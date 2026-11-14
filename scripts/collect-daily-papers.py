"""Collect one arXiv announcement into the site's versioned Paper archive."""
import argparse
from email.utils import parsedate_to_datetime
import json
from pathlib import Path
import re
import time
import unicodedata
from html import unescape
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
TOPICS = json.loads((ROOT / "content/data/daily-paper-topics.json").read_text())
ARCHIVE = ROOT / "content/daily-papers"
FEED = "https://rss.arxiv.org/rss/" + "+".join(TOPICS["categories"])
USER_AGENT = "BORAN002-Paper-Digest/1.0 (+https://boran002.github.io/papers/daily/)"
NS = "{http://arxiv.org/schemas/atom}"
LIMIT = 5


def fetch_feed(url):
    for attempt in range(3):
        try:
            with urlopen(Request(url, headers={"User-Agent": USER_AGENT}), timeout=45) as response:
                return response.read()
        except (URLError, TimeoutError) as error:
            if isinstance(error, HTTPError) and error.code not in (429, 500, 502, 503, 504):
                raise
            if attempt == 2:
                raise
            time.sleep(10 * (attempt + 1))


def normalize(text):
    # Hyphens and punctuation vary even between the title and abstract of one paper.
    return " ".join(re.findall(r"[a-z0-9]+", unicodedata.normalize("NFKC", text).lower().replace("multi-modal", "multimodal")))


def pattern(term):
    words = normalize(term).split()
    return re.compile(r"\b" + " ".join(words) + r"s?\b")


VISUAL = [pattern(term) for term in TOPICS["visualContext"]]
RULES = {topic["id"]: [(term, pattern(term), False) for term in topic["terms"]]
         + [(term, pattern(term), True) for term in topic["contextual"]] for topic in TOPICS["topics"]}


def matches(title, abstract):
    title = normalize(title)
    sentences = [normalize(s) for s in re.split(r"(?<=[.!?])\s+", abstract)]
    visual_title = any(regex.search(title) for regex in VISUAL)
    contexts = [visual_title or any(regex.search(s) for regex in VISUAL) for s in sentences]
    scored = []
    for topic, rules in RULES.items():
        hits, score = [], 0
        for term, regex, needs_context in rules:
            in_title = regex.search(title) and (not needs_context or visual_title or any(contexts))
            in_abstract = any(regex.search(s) and (not needs_context or c) for s, c in zip(sentences, contexts))
            if in_title or in_abstract:
                hits.append(term)
                score += (10 if in_title else 2) + (1 if not needs_context else 0)
        if hits:
            scored.append((topic, score, hits))
    return scored


def entries(xml):
    channel = ET.fromstring(xml).find("channel")
    if channel is None or not channel.findtext("title") or not channel.findtext("pubDate"):
        raise ValueError("Expected a dated arXiv RSS channel")
    day = parsedate_to_datetime(channel.findtext("pubDate")).date().isoformat()
    items = channel.findall("item")
    papers = {}
    for item in items:
        if item.findtext(NS + "announce_type") not in ("new", "cross"):
            continue
        description = item.findtext("description", "")
        version = re.search(r"\barXiv:(\d{4}\.\d{4,5})v(\d+)\b", description)
        _, marker, abstract = description.partition("Abstract:")
        if not version or not marker or not abstract.strip() or not item.findtext("title"):
            raise ValueError("Incomplete arXiv item: " + item.findtext("link", "unknown"))
        paper_id = version[1]
        if item.findtext("link", "").rstrip("/").split("/")[-1] not in (paper_id, f"{paper_id}v{version[2]}"):
            raise ValueError("Inconsistent arXiv item identity")
        paper = {"id": paper_id, "version": int(version[2]), "title": " ".join(item.findtext("title").split()),
                 "abstract": " ".join(abstract.split()), "categories": [c.text for c in item.findall("category")]}
        if paper_id not in papers or paper["version"] > papers[paper_id]["version"]:
            papers[paper_id] = paper
    return day, papers


def excerpt(abstract):
    # Prefer a complete sentence describing what the authors built or studied.
    clean = re.sub(r"\\(?:textbf|textit|emph)\{([^{}]+)\}", r"\1", unescape(abstract))
    sentences = re.split(r"(?<=[.!?])\s+(?=[A-Z])", clean)
    method = re.compile(r"\b(?:we (?:propose|introduce|present|develop|investigate)|our (?:method|approach|framework))\b", re.I)
    sentence = next((s for s in sentences if method.search(s)), sentences[0])
    words = sentence.split()
    return sentence if len(words) <= 24 else " ".join(words[:24]).rstrip(",;:") + "…"


def select(papers, seen):
    candidates = []
    for paper_id, paper in papers.items():
        if paper_id in seen:
            continue
        for topic, score, terms in matches(paper["title"], paper["abstract"]):
            candidates.append((score, topic, paper_id, terms))
    candidates.sort(key=lambda row: (-row[0], row[2], row[1]))
    selected, ids, covered = [], set(), set()
    for diversify in (True, False):
        for _, topic, paper_id, terms in candidates:
            if len(selected) == LIMIT:
                return selected
            if paper_id in ids or (diversify and topic in covered):
                continue
            paper = papers[paper_id]
            selected.append({"id": paper_id, "version": paper["version"], "title": paper["title"],
                             "topic": topic, "matched": terms, "excerpt": excerpt(paper["abstract"])})
            ids.add(paper_id)
            covered.add(topic)
    return selected


def fetch_batch(categories):
    xml = fetch_feed("https://rss.arxiv.org/rss/" + "+".join(categories))
    day, papers = entries(xml)
    if len(ET.fromstring(xml).findall("channel/item")) < 2000:
        return day, papers
    if len(categories) == 1:
        raise ValueError(f"arXiv truncated the {categories[0]} feed")
    middle = len(categories) // 2
    merged = {}
    for part in (categories[:middle], categories[middle:]):
        time.sleep(3)
        part_day, part_papers = fetch_batch(part)
        if part_day != day:
            raise ValueError("arXiv announcement date changed during collection; retry")
        merged.update(part_papers)
    return day, merged


def collect(day, papers, directory):
    directory.mkdir(parents=True, exist_ok=True)
    destination = directory / f"{day}.json"
    if destination.exists():
        print(f"{day} already archived")
        return
    seen = {p["id"] for file in directory.glob("*.json")
            for p in json.loads(file.read_text())["papers"]}
    chosen = select(papers, seen)
    if not chosen:
        print(f"{day}: no matching new papers")
        return
    issue = {"date": day, "source": FEED, "papers": chosen}
    temp = destination.with_suffix(".tmp")
    temp.write_text(json.dumps(issue, ensure_ascii=False, indent=2) + "\n")
    temp.replace(destination)
    print(f"{day}: {len(chosen)} selected from {len(papers)} new or cross-listed papers")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--feed-file", type=Path, help="Process a saved arXiv RSS response")
    args = parser.parse_args()
    batch = entries(args.feed_file.read_bytes()) if args.feed_file else fetch_batch(TOPICS["categories"])
    collect(*batch, ARCHIVE)

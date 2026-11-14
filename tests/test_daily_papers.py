import importlib.util
import json
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

script = Path(__file__).resolve().parents[1] / "scripts/collect-daily-papers.py"
spec = importlib.util.spec_from_file_location("collector", script)
collector = importlib.util.module_from_spec(spec)
spec.loader.exec_module(collector)


class DigestTest(unittest.TestCase):
    def test_contextual_harness_and_ranking(self):
        self.assertEqual(collector.matches("An evaluation harness for databases", "SQL query reranking."), [])
        self.assertIn("harness", [m[0] for m in collector.matches("A visual evaluation harness", "")])
        self.assertIn("understanding", [m[0] for m in collector.matches("Image re-ranking", "")])

    def test_cross_listing_and_replay(self):
        items = []
        for paper_id, kind in [("2611.10001", "new"), ("2611.10001", "cross"), ("2611.10002", "replace")]:
            items.append(f"""<item><title>Video editing</title><link>https://arxiv.org/abs/{paper_id}</link>
              <description>arXiv:{paper_id}v1 Announce Type: {kind}
              Abstract: We present a video editing method.</description><a:announce_type>{kind}</a:announce_type></item>""")
        xml = '<rss xmlns:a="http://arxiv.org/schemas/atom"><channel><title>arXiv</title><pubDate>Fri, 13 Nov 2026 00:00:00 -0500</pubDate>' + ''.join(items) + '</channel></rss>'
        day, papers = collector.entries(xml)
        self.assertEqual(list(papers), ["2611.10001"])
        with TemporaryDirectory() as tmp:
            path = Path(tmp)
            collector.collect(day, papers, path)
            issue = json.loads((path / f"{day}.json").read_text())
            self.assertEqual(len(issue["papers"]), 1)
            collector.collect(day, papers, path)
            collector.collect("2026-11-16", papers, path)
            self.assertEqual(len(list(path.glob("*.json"))), 1)

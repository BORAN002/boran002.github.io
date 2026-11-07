# Site maintenance

This repository publishes https://boran002.github.io/. Keep the existing static site, white background, black text, clear headings, and comfortable spacing. Do not add a personal name or biography without supplied content.

## Classify before writing

| Section | Use it for | Source |
| --- | --- | --- |
| Note | A reusable topic, concept, or method that grows over time; e.g. Agent / Context Engineering | `content/notes/*.md` |
| Blog | A self-contained argument, project retrospective, or experiment report | `content/blog/*.md` |
| Paper | A specific paper, a reading collection, or a survey grounded in original publications | `content/papers/*.md` or the collection's source JSON |
| About | Site scope and reading guidance | `content/about.md` |

Labels are singular; existing `/notes/` and `/papers/` URLs stay stable. About is a standalone page, not a dated post. Do not duplicate an article across categories: classify by its main purpose and use links elsewhere. Blog may be empty; do not invent posts to fill it.

## Write and update

- Search existing entries first. Extend a topic note in place when appropriate.
- `npm run new -- note|blog|paper slug "Title"` creates a draft with the matching template and refuses to overwrite files. Replace template prompts with actual content; adapt the section order to the material.
- Frontmatter uses quoted `title`, `date`, optional `updated`, a concise `description`, and boolean `draft`. Set `draft: false` only for content intended to go live. Keep the original `date`; change `updated` for substantive content edits, not a site-wide navigation change. The homepage sorts by `updated`.
- Preserve the Agent note's title, hidden dates, and Basic / Insight structure under each topic. Key technical terms stay in English. Explain mechanisms with concrete examples before discussing implications. Prefer useful Insight and executable Method over unexplained terminology.
- Cite primary sources next to factual claims. Distinguish published results, interpretation, and actual experiments. Never call a summary a reproduction or invent validation evidence.
- The renderer supplies H1 from frontmatter; start the body at `##`. This is a static export: native anchors are intentional, so the Next.js client-Link-only lint rule is disabled. Use Markdown links and images. Assets go under `public/` with root-relative URLs. Math uses `$...$` and `$$...$$`.

## Single sources of truth

- `content/data/agent-tool-use-2026.json` owns the existing 359-paper collection. Do not edit its generated catalog Markdown, Explorer, reading pages, or downloads individually. The generator is `scripts/build-paper-catalog.mjs`; the Explorer template is `content/templates/paper-explorer.html`.
- Keep IDs stable, update counts when adding/removing records, and preserve evidence fields. `full_text` means cited source pages were actually read, not that experiments were reproduced.
- `content/generated.json`, `content/about.generated.json`, generated files under `public/papers/`, and `docs/` are outputs. Edit sources and regenerate.
- React navigation is defined in `lib/site.ts`; standalone paper pages use the generator and Explorer template. All surfaces expose Note / Blog / Paper / About. Export validation covers them.

## Check and publish

1. Run `npm run check`: build Markdown/static pages, typecheck and lint, then verify internal links, four-section navigation, paper counts, source/download consistency, and compatibility redirects.
2. For layout changes, inspect desktop and narrow viewports before publishing. Readability takes priority over decoration.
3. Review the diff. Publish only within the user's authorized scope.
4. `.github/workflows/pages.yml` runs the same checks on PRs and main. Deployment depends on a successful build and runs only from main. Verify the exact commit's workflow and live pages before reporting publication.

`PAPER_NOTES_PREVIEW=1` is for local incomplete-paper previews only; never use it in release CI. CI rebuilds from source; `docs/` is a generated snapshot, not an authoring location.

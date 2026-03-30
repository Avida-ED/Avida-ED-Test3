# Legacy content inventory

## Learner/Instructor backpacks

- **Curriculum** (`curriculum/`, lab manual/model lessons) – multiple detailed exercise pages, downloadable lab books, linked publications, and embedded video references.
- **Support** (`support/`, `instructor-faqs/`, `student-faqs/`) – deep troubleshooting steps, reporting templates, accessibility notes, complete FAQ lists, and instructor reporting guidance.
- **Videos** (`avida-ed-4-tutorial-videos/`, transcripts referenced in `files/`) – multiple tutorial pages that chronicle features and classroom uses with transcript text.
- **Download/Offline** (`download-avida-ed/`) – multiple installer packages, Windows localhost instructions, Anti-BitRot repo link, and mirror/mailing list references.

## Background/Archive nodes

- **About/History** (`about-us/`, `digital-evolution/`, `version-history/`, `vintage-archive/`) – contributor listings, pedagogical references, research publications, and archival release notes.
- **News/Workshops** (`news/`, `active-lens-...`, `2017/...`, `topics/workshop/`) – chronological articles, workshop announcements, and Active LENS summaries.
- **Tag/Feed infrastructure** (`tag/*`, `author/*`) – taxonomy and archive pages that aggregate posts by theme or author, plus RSS feeds and mailing list links.

## Current Test3 coverage

- Curriculum and instructor/student guides exist under `src/pages/curriculum`, `src/pages/getstarted`, and linked docs, but still need richer detail from the legacy lab manual and video references.
- Support and troubleshooting are migrated into `docs/support/*`, with gaps around reporting templates and the broader FAQ catalogue.
- Videos have transcripts under `docs/videos`, but only a subset of the legacy tutorial gallery is present.
- Downloads are now textual; only a small selection of legacy binaries remain in `static/versions/` with documentation in `download.md`.
- About/history content is replicated under `src/pages/about`, with the `news-archive` page, but the news/workshop backlog is only a single summary page.

## Immediate inventory action items

1. Document the missing lab-manual exercises/publications that still remain purely as legacy static assets.
2. List the legacy support/FAQ entries not yet reproduced in `docs/support` and map them to future pages.
3. Enumerate the remaining tutorial videos/transcripts that need to be generated.
4. Note the news/workshop posts that should remain archived (maybe under `/about/news-archive`) and the ones that can be condensed into a single narrative summary.

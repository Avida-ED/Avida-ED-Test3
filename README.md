# Avida-ED-Test3

This repository is the current `Avida-ED-Test3` site prototype and migration
workspace. It uses Docusaurus as the site engine, but the site is being shaped
away from default Docusaurus "docs" presentation and toward a simpler public
website for learners and instructors.

The current site includes:

- a custom landing page with logo, overview video, and audience-first entry
  points
- public pages for app access, support, downloads, archive/news, and project
  background
- page-based curriculum content under `src/pages/curriculum/`
- student, support, and video content under `docs/`, including transcript-first
  migration work
- local scripts and process documents for media transcription and transcript
  publication

## Requirements

- Node.js 18+

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## Site structure

- `src/pages/`
  public site pages and the active page-based curriculum content
- `docs/`
  selected docs-rendered content, including student/support/video sections and
  a reduced instructor comparison example
- `static/`
  public assets copied directly into the built site
- `scripts/`
  local transcription and publication tooling plus process notes

## Transcript workflow

For media-to-transcript migration work, see
[scripts/README.md](/mnt/CIFS/pengolodh/Docs/Projects/genai/codex-projects/web-avida-ed-codex/Avida-ED-Test3/scripts/README.md).

The detailed remaining process document is at
[scripts/VIDEO_PROCESS.md](/mnt/CIFS/pengolodh/Docs/Projects/genai/codex-projects/web-avida-ed-codex/Avida-ED-Test3/scripts/VIDEO_PROCESS.md).

For repo promotion and GitHub setup steps, see
[REPO_PROMOTION_PROCESS.md](/mnt/CIFS/pengolodh/Docs/Projects/genai/codex-projects/web-avida-ed-codex/Avida-ED-Test3/REPO_PROMOTION_PROCESS.md).

The local workflow now has two stages:

- `scripts/transcribe_media.py` for media-to-draft transcript generation
- `scripts/publish_transcript.py` for promoting reviewed drafts into
  `docs/videos/`

## Repo process

For the repo promotion history and ongoing repo/process notes, see
[REPO_PROMOTION_PROCESS.md](/mnt/CIFS/pengolodh/Docs/Projects/genai/codex-projects/web-avida-ed-codex/Avida-ED-Test3/REPO_PROMOTION_PROCESS.md).

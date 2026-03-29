# Avida-ED Docusaurus Site (Starter)

This repository is a minimal Docusaurus site with:

- A global navbar (title + horizontal menu)
- A simple Home page: logo → text → embedded overview video
- A separate “News Archive” page
- Docs enabled (minimal stub)
- Local scripts for transcript-oriented migration work

## Requirements

- Node.js 18+

## Install

```bash
npm install
```

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

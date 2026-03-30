# Gap priorities (leaner/instructor focus)

1. **Curriculum detail**  
   - Legacy `curriculum/lab-manual` and `model-lessons` contain exercise-by-exercise narration, linked PDFs (`lab-book/*.pdf`), and video references.  
   - Action: expand `src/pages/curriculum/lab-manual/*` so each exercise has the full context, links to downloads, and cross-links to the matching `model-lessons`. Use the existing exercises as scaffolding and bring in missing bullet points (e.g., sequencing, variants, research notes).

2. **Instructor/student FAQ + workflows**  
   - `support/`, `instructor-faqs/`, and `student-faqs/` list many common problems, reporting templates, and classroom policies. Test3 currently only carries a high-level support page plus short docs.  
   - Action: populate `docs/support/instructor-faq.md`, `docs/support/troubleshooting.md`, `docs/students/faq.md`, and `docs/students/first-steps.md` with the missing question/answer pairs, and add reporting templates (from `support/index.html` and `support/reporting-problems`).

3. **Video/transcript coverage**  
   - Legacy `avida-ed-4-tutorial-videos/` plus related transcripts are not fully mirrored.  
   - Action: list each tutorial video file from `avida-ed-4-tutorial-videos/` and generate transcripts via `scripts/transcribe_media.py` as needed, adding pages under `docs/videos/` with embedded video references and transcript text, linking them back to `docs/students/videos.md`.

4. **Download/offline guidance**  
   - Legacy `download-avida-ed` enumerated installers, Anti-BitRot repo, Windows localhost instructions, and mirror notes. Test3 currently summarizes but lacks structured sections.  
   - Action: widen `download.md` to include mini subsections for each fallback path (Anti-BitRot, Avida-ED 3 installers, Windows localhost) with clear callouts linking to `staging/` or `static/versions` copies where appropriate.

5. **News/workshop archives**  
   - Rich news feed (`news/`, `active-lens`), mailing list, and workshop announcements offer context for instructors.  
   - Action: keep the single `/about/news-archive` but add subsections summarizing workshop series and mailing-list signups. Archive the rest (tag/feed pages) as optional references rather than full imports.

6. **Background research context**  
   - Digital evolution page and about-us contributions now exist but the legacy `digital-evolution` still offers publication lists.  
   - Action: ensure `src/pages/about/digital-evolution.md` (and `about/team.md`) include the referenced publication lists and funding acknowledgments; capture missing `files/` assets under `static/files` per large-file rules.

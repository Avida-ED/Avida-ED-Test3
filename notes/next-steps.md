## Next implementation focus

1. **Lift more legacy curriculum detail inline**  
   - Split the lab manual and model lesson pages on Test3 into the same sections the legacy `curriculum/` directory used (intro, guided exercises, intermediate project).  
   - Add missing download links/ref citations and surface the matching publications in `src/pages/curriculum/publications.md`.

2. **Expand student/instructor support docs**  
   - Import the remaining Q&A from `student-faqs` and `instructor-faqs` into `docs/students/faq.md` and `docs/support/instructor-faq.md`.  
   - Move the reporting templates and accessibility guidance into the support workflow docs so instructors can copy/paste them.

3. **Systematize video/transcript coverage**  
   - Use `scripts/transcribe_media.py` against each tutorial video you plan to keep; publish transcripts under `docs/videos` and describe which curriculum node they align with.  
   - Keep the raw media under `staging/` (if >95MB) and document hosting in `staging/README.md`.

4. **Refine the news/workshop archive narrative**  
   - Keep the `/about/news-archive` page, but add a curated summary of the Active LENS workshops and key news posts. Mention that the feed/tag pages remain archived (with `notes/legacy-inventory.md` as reference).  
   - Consider linking to the mailing list or mirror site only where relevant for classroom reliability.

5. **Track progress**  
   - For each gap above, add a short entry to `notes/legacy-inventory.md` when you finish migrating its content so the next reviewer knows that section was closed.  
   - Preserve the large-file guidance while you add video or installer references.

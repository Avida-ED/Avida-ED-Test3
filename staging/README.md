Large assets (>95MB) must stay out of the committed `static/` tree so GitHub
Pages builds don’t fail. Use this folder as transient storage while you decide
where to host each installer/movie/archive.

Steps:

1. Place the oversized file under `staging/large-assets/...` with a sensible
   name.
2. Document the file in this README, listing the proposed host (cloud bucket,
   archive, storage repo, etc.) and the page(s) that will eventually point to
   the hosted URL.
3. Once the file is hosted, update the corresponding content link(s) from the
   staging path to the final host and delete the file from `staging/`.
4. Add a short note in the content or change-log describing why the hosted URL
   was chosen so future maintainers can replicate it.

If you ever need a temporary local copy while editing, keep it in `staging/`
and reference it only in your working draft. Do not commit large files directly
under `static/` or `src/`.

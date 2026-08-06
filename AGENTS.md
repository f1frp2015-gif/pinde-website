<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Canonical PINDÉ site and routing rules

- The only canonical public domain is `https://pindesys.com`.
- `pinde-alu.com` is retired and `pindesye.com` is an invalid misspelling. Never use either as a canonical URL, deployment target, email domain, or source of current content.
- Canonical content is bilingual under `/en` and `/ru`. Aluminium products live under `/{locale}/systems/aluminium/{slug}`; PD75 lives under the established `/{locale}/systems/frp/xd75` URL.
- `/products`, `/projects`, `/technology`, `/quality`, `/about`, and `/contact` are redirect-only legacy paths. Do not recreate page implementations for them.
- The legacy blog is permanently retired. Do not restore `/blog` pages, article data, navigation entries, sitemap entries, or old blog copy. Retired blog requests must remain non-indexable.
- GitHub `f1frp2015-gif/pinde-website` on `main` and Vercel project `f1composite/pinde-website` (`prj_E3ap9L96Q7JF6wfUtjByU4sA9uX4`) are the code and deployment sources of truth.

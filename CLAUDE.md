# CLAUDE.md

Personal resume and portfolio site (mattheusfaria.com). SvelteKit with adapter-static, styled with Bulma.

## Rules

- **Keep credit usage low.** Read only the files the task needs, don't explore broadly, skip subagents unless asked, and keep replies short.
- **Keep the particles background.** Don't remove or break the particles.js background (`static/particles/` and its setup in `src/routes/+page.svelte`).
- **Use Bulma for styling.** Use Bulma classes and helpers before writing custom CSS. Theme changes go in `static/scss/bulma.scss`; then run `npm run css-build` and commit the regenerated `static/css/bulma.css`.
- **Write commit messages in 2-4 words**, e.g. "Add chess project".
- **Push only to `main`.** Don't deploy to `gh-pages` (`npm run deploy`) unless the user asks for it.

## Adding a project

1. Copy `src/routes/projects/aaa_template.ts` to a new file in `src/routes/projects/` and fill it in.
2. Import it in `src/routes/projects/aaa_projects.ts` and add it to the `projects` array. The array order is the display order.
3. Put the thumbnail in `static/images/project-thumbnails/`. Language/tool icons are in `static/images/code-icons/`.

## Commands

- `npm run dev`: local dev server
- `npm run check`: type check
- `npm run deploy`: build and publish to `gh-pages`, which updates the live site. Only run it on request.

## Environment notes

- The repo is on a D: drive that doesn't record file ownership, so git needs `safe.directory` entries. If a deploy fails with "dubious ownership", add the path git prints. This includes the `gh-pages` cache clone in `node_modules/.cache/gh-pages/`.

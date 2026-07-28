# Riffle documentation

The source for the [Riffle documentation site](https://uniffle-rust.github.io/), built with VitePress.

## Local development

```bash
npm install
npm run docs:dev
```

Build the production site with:

```bash
npm run docs:build
```

## Changelog

The changelog lists every Git tag in [`zuston/riffle`](https://github.com/zuston/riffle) and the commits included in that version.

Refresh it with:

```bash
npm run docs:sync-changelog
```

Set `RIFFLE_REPO_PATH` to reuse an existing local clone:

```bash
RIFFLE_REPO_PATH=/path/to/riffle npm run docs:sync-changelog
```

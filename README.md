# Riffle documentation

The source for the [Riffle documentation site](https://uniffle-rust.github.io/),
built with [Just the Docs](https://just-the-docs.com/) and Jekyll.

## Local development

Use Ruby 3.3, then install the dependencies:

```bash
bundle install
```

Start the local documentation server:

```bash
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000/`.

## Production build

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The generated site is written to `_site/`.

## Web analytics

Production builds support
[Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/).
The beacon is omitted from local development and from builds without a site
token.

1. Add `uniffle-rust.github.io` in Cloudflare Web Analytics and copy its site
   token.
2. In this repository, open **Settings → Secrets and variables → Actions →
   Variables**.
3. Create `CLOUDFLARE_WEB_ANALYTICS_TOKEN` with the copied token.
4. Run the `Deploy Jekyll site to Pages` workflow or push to `master`.

To verify the integration locally without reporting a real visit, build with a
test token and inspect `_site/index.html`:

```bash
CLOUDFLARE_WEB_ANALYTICS_TOKEN=test-token \
  JEKYLL_ENV=production bundle exec jekyll build
```

## Changelog

The changelog is a single page containing the historical Git tags from
[`zuston/riffle`](https://github.com/zuston/riffle) and the changes introduced
by each version. A scheduled GitHub Actions workflow checks for new GitHub
Releases every day and prepends their release notes to `docs/changelog.md`.

Run the same synchronization locally with:

```bash
ruby scripts/sync-releases.rb
```

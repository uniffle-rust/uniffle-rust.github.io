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

## Changelog

The changelog is a single page containing the historical Git tags from
[`zuston/riffle`](https://github.com/zuston/riffle) and the changes introduced
by each version. A scheduled GitHub Actions workflow checks for new GitHub
Releases every day and prepends their release notes to `docs/changelog.md`.

Run the same synchronization locally with:

```bash
ruby scripts/sync-releases.rb
```

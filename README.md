# Safe Paths [![Netlify Status](https://api.netlify.com/api/v1/badges/05d740ff-e5ec-48ce-86b9-3f24ec60be9d/deploy-status)](https://app.netlify.com/sites/safepaths/deploys) ![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg) ![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg)

> A new look for https://safepaths.mit.edu

- **Website**: https://safepaths.netlify.com/
- **Netlify Admin**: https://app.netlify.com/sites/safepaths/settings/general

## 📜 About

- Pages are authored in HTML or, optionally, [Twig](https://github.com/twigjs/twig.js/wiki) and live in the [`src/pages`](src/pages) directory.
- Twig templates and partials live in [`src/templates`](src/templates).
- Site data files live in [`src/data`](src/data). Drop any `.json`, `.yml`, or `.js` file exporting a function into this directory and access the resulting data in Twig templates using `{{ site.data['path/to/file.ext'] }}`. Powered by [Puppy](https://www.npmjs.com/package/@upstatement/puppy).
- Styles are authored with [Sass](https://sass-lang.com/) and live in [`src/scss`](src/scss).
- Javascripts live in [`src/js`](src/js). They are transipiled at build time with [Babel](https://babeljs.io/) so that they can take advantage of [modern JS syntax](https://babeljs.io/docs/en/learn)
- Any files in the [`public`](public) directory are copied to the web root recursively at build time.
- Static assets are bundled at build time using [Webpack](https://webpack.js.org/).
- All source assets are pulled together with [Gulp](https://gulpjs.com/) and used to generate a static site in the `dist` directory.

## ✨ Install

```sh
# Install Node & NPM with [NVM](https://github.com/nvm-sh/nvm)
nvm install

# Install project dependencies
npm install
```

## 👩‍💻 Usage

### Development

```sh
# Start a local dev server
npm start

# Check for JS/SCSS style violations prior to commit
npm run lint

# Fix the fixable linter violations
npm run lint:fix

# Format code with Prettier
npm run format
```

### Production

```sh
# Build for production
npm run build

# Serve locally using `serve`
npx serve dist
```

### Deployment

This site is hosted on [Netlify](https://www.netlify.com/).

Deployments to https://safepaths.netlify.com/ are triggered automatically by commits to the `master` branch via their [GitHub App](https://github.com/apps/netlify).

---

A [Puppy](https://github.com/Upstatement/puppy) 🐶 powered project

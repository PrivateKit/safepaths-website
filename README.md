
# Safe Paths [![Netlify Status](https://api.netlify.com/api/v1/badges/05d740ff-e5ec-48ce-86b9-3f24ec60be9d/deploy-status)](https://app.netlify.com/sites/safepaths/deploys) ![Prerequisite](https://img.shields.io/badge/node-10.13.0-blue.svg) ![Prerequisite](https://img.shields.io/badge/npm-6.4.1-blue.svg)

> A new look for https://safepaths.mit.edu

- **Website**: https://safepaths.netlify.com/
- **Netlify Admin**: https://app.netlify.com/sites/safepaths/settings/general 

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

## 📝 License

Copyright &copy; 2020 Upstatement, LLC

---

A [Puppy](https://github.com/Upstatement/puppy/wiki) 🐶 powered project

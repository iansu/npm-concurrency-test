# npm Concurrency Test

Test concurrent installs with npm. Also includes Yarn v1 for comparison.

This repo contains 10 apps bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It does not use workspaces and attempts to run `npm install` (or `yarn install`) in all 10 projects in parallel.

## Usage

### npm

`node npm-install.js`

### Yarn

`node yarn-install.js`

Between tests you will want to clear out `node_modules` by running `npm run clean`

## Expected Results

Yarn v1 has issues with concurrent cache access so you should see errors that look like this:

```txt
error An unexpected error occurred: "https://registry.yarnpkg.com/tailwindcss/-/tailwindcss-3.0.15.tgz: ENOENT: no such file or directory, open '/Users/iansu/Library/Caches/Yarn/v6/npm-tailwindcss-3.0.15-e4db219771eb7678a3bfd97b3f6c8fe20be0a410-integrity/node_modules/tailwindcss/.yarn-tarball.tgz'".
```

When running with npm (tested with npm 8.3.0) there should be no errors.

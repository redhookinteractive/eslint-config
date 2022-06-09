# @redhook/eslint-config

An eslint configuration that will allow projects to have consistent code quality and standards. It exports configurations for node, react, react-native, and a common package that can be used more generally.

## How to use it

### Install the package

```bash
# from the project you're trying to add it to
yarn add @redhook/eslint-config -D
```

### Add the package in your .eslintrc.js file

To install the common package:

```js
module.exports = {
  extends: [
    '@redhook/eslint-config',
  ],
};
```

To install the node package:

```js
module.exports = {
  extends: [
    '@redhook/eslint-config/node',
  ],
};
```

To install the react package:

```js
module.exports = {
  extends: [
    '@redhook/eslint-config/react',
  ],
};
```

To install the react-native package:

```js
module.exports = {
  extends: [
    '@redhook/eslint-config/react',
  ],
};
```

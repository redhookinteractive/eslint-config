module.exports = {
  env: {
    jest: true,
    node: true,
  },
  extends: "./common",
  overrides: [
    {
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
      files: ["*.js"],
      parser: "espree",
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
      },
      plugins: ["prettier"],
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};

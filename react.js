module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ["airbnb", "airbnb/hooks", "./common"],
  overrides: [
    {
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
      files: ["*.js"],
      parser: "espree",
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
      },
      plugins: ["prettier"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": [
      "error",
      { ignorePropertyModificationsFor: ["state"], props: true },
    ],
    "react/forbid-prop-types": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "warn",
    "react/no-unused-prop-types": "warn",
    "react/require-default-props": "off",
  },
};

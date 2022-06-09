module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "build",
    "dist",
    "node_modules",
    "public",
    "typedocs",
    "bak",
    "local",
    "scripts",
  ],
  overrides: [
    {
      files: ["*.spec.ts", "*.spec.tsx", "*.test.ts", "*.test.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "simple-import-sort",
    "sort-keys-fix",
    "@typescript-eslint",
    "typescript-sort-keys",
  ],
  rules: {
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
    "@typescript-eslint/no-use-before-define": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    camelcase: [
      "error",
      {
        ignoreDestructuring: true,
      },
    ],
    "class-methods-use-this": "off",
    "consistent-return": "warn",
    curly: "error",
    "import/extensions": [
      2,
      {
        json: "always",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**",
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.test.ts",
          "**/*.spec.ts",
        ],
      },
    ],
    "import/order": "off",
    "import/prefer-default-export": "off",
    "lines-between-class-members": ["error", "always"],
    "no-shadow": "off",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    // per: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "*",
        prev: [
          "class",
          "export",
          "function",
          "multiline-const",
          "multiline-expression",
        ],
      },
      {
        blankLine: "always",
        next: [
          "class",
          "export",
          "function",
          "multiline-const",
          "multiline-expression",
          "return",
        ],
        prev: "*",
      },
    ],
    "prefer-arrow-callback": "error",
    "quote-props": ["error", "as-needed"],
    "simple-import-sort/imports": "error",
    "sort-imports": "off",
    "sort-keys-fix/sort-keys-fix": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
};

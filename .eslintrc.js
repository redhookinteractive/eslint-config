module.exports = {
  extends: ["./index.js"],
  // Disabling some rules for index.js due to some strange typescript errors that should be fixed in DIS-1647
  overrides: [
    {
      files: ["index.js"],
      rules: {
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-self-import": "off",
        "import/no-unresolved": "off",
        "import/no-useless-path-segments": "off"
      },
    },
  ],
};

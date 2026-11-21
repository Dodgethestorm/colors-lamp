export default [
  {
    files: ["public/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        XMLHttpRequest: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-tabs": "off",
      "no-trailing-spaces": "off",
      "indent": "off",
      "quotes": "off",
      "semi": "off",
      "comma-dangle": "off",
      "no-empty": "off",
      "no-redeclare": "off"
    }
  }
];

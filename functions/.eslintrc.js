module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    "promise",
  ],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {
    "ecmaVersion": 2020,
  },
};

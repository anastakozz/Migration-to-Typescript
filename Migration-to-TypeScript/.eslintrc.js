const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', "eslint:recommended", "plugin:@typescript-eslint/recommended"] ,
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: { 
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/strict-boolean-expressions": 0
  },

  plugins: ["@typescript-eslint"]
}

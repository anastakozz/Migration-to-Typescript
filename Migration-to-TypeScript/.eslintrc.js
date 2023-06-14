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
    "@typescript-eslint/no-explicit-any": 2
  },

  plugins: ["@typescript-eslint"]
}

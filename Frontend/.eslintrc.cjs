module.exports = {
      env: {
          "browser": true,
          "es2021": true
      },
      parser: "@typescript-eslint/parser",
      extends: [
            "plugin:@typescript-eslint/recommended",
            "prettier/@typescript-eslint",
            "plugin:prettier/recommend",
      ],
      parserOptions: {
          "ecmaVersion": "latest",
          "sourceType": "module"
      },
      rule:{}
    }
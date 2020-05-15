module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": "off",
      "import/no-dynamic-require": "off",
      "global-require": "off",
      "max-len": "off",
      "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-param-reassign": "off",
      "indent": ["error", 4],
      semi: [2, "never"],
      "space-before-function-paren": ["error", "never"],
      "vue/html-closing-bracket-newline": "off",
      "vue/max-attributes-per-line": [
          1,
          {
              singleline: 1,
              multiline: {
                  max: 1,
                  allowFirstLine: false
              }
          }
      ],
      "vue/singleline-html-element-content-newline": "off",
      "vue/component-name-in-template-casing": [
          "error",
          "PascalCase",
          {
              registeredComponentsOnly: true,
              ignores: []
          }
      ],
      "vue/no-v-html": "off",
      "vue/html-indent": ["error", 4, {
          "attribute": 1,
          "baseIndent": 1,
          "closeBracket": 0,
          "alignAttributesVertically": true,
          "ignores": []
      }],
  },
};

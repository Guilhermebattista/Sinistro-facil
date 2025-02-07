module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',  // Desativa a regra
    },
    parserOptions: {
      parser: 'babel-eslint',  // Assegura que o Babel seja usado
    },
  };
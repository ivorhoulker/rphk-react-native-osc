/* eslint-disable no-undef */
module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint-config-prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'sort-imports': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};

// https://eslint.org/docs/user-guide/configuring/
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'next', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
    'func-style': ['error', 'declaration'],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'prettier/prettier': 'error'
  }
}

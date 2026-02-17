// https://docs.expo.dev/guides/using-eslint/
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({ baseDirectory: process.cwd() });

module.exports = [
  ...compat.extends('expo'),
  {
    ignores: ['dist/*'],
  },
];

module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  ignorePatterns: ['*.test.js', '*.test.tsx'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
  plugins: ['prettier'],
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'jest',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js, *.jsx, *.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-unused-styles': 2,
        'react-native/no-raw-text': 0,
        'react-native/no-single-element-style-arrays': 2,
        'linebreak-style': [2, 'unix'],
        'no-unused-vars': 2,
        'no-console': [2, { allow: ['warn', 'error'] }],
        'prefer-arrow-callback': 2,
        '@typescript-eslint/no-non-null-assertion': 0, // This is purely to handle a create context being null at the start.
      },
    },
  ],
}

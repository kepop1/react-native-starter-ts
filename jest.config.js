// jest.config.js
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: [
    'node_modules',
    'src/lib/helpers', // a utility folder - test-utils.ts.
    __dirname, // the root directory
  ],
}

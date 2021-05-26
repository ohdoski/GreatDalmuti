module.exports = {
  testPathIgnorePatterns: [`node_modules`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleFileExtensions: ['js', 'ts'],
  setupFiles: ['jest-plugin-context/setup'],
}

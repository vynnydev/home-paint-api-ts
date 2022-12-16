export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@data(.*)': '<rootDir>/src/data/$1',
    '@domain(.*)': '<rootDir>/src/domain/$1',
    '@infra(.*)': '<rootDir>/src/infra/$1',
    '@main(.*)': '<rootDir>/src/main/$1',
    '@presentation(.*)': '<rootDir>/src/presentation/$1',
    '@utils(.*)': '<rootDir>/src/utils/$1',
    '@tests(.*)': '<rootDir>/src/tests/$1',
  },
};

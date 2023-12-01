/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  coverageDirectory: "./coverage",
  clearMocks: true,
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        outputDirectory: "./coverage/Junit",
        outputName: "junit.xml",
      },
    ],
    [
      "jest-silent-reporter",
      {
        useDots: true,
      },
    ],
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage/html-report",
        filename: "report.html",
        openReport: true,
      },
    ],
  ],
  coveragePathIgnorePatterns: ["<rootDir>/src/apis"],
  coverageReporters: ["lcov", "text"],
  // coverageDirectory: "test-coverage",
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  maxWorkers: "50%",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|pdf|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__test__/mocks/file-transform.ts",
  },
};

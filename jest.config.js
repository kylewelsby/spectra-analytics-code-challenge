module.exports = {
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(js)$": "babel-jest"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "babel-jest"

  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  // transformIgnorePatterns: ["/node_modules/(?!@babel/runtime)"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.vue"],
  coverageReporters: ["text-summary", "html", "lcov", "clover"]
};

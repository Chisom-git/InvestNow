const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://app-invest-dev3.investnow.ng/',
    defaultCommandTimeout: 10000,
    viewportHeight: 960,
    viewportWidth: 1530,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");
// const _ = require('lodash')
// const del = require('del')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // headless: true,
    retries: {
      "runMode": 1,
      "openMode": 0
    },
    reporter: "mochawesome",
    reporterOptions: {
      "reportDir": "cypress/reports/e2e",
      "overwrite": true,
      "reportFilename": "[datetime]_[status]_[name]-report",
      "timestamp": "default",
      "showPassed": true
    },
    screenshotsFolder: "cypress/reports/e2e/screenshots",
    video: false,
    videosFolder: "cypress/reports/e2e/videos"
    //,
    //
    // smoke:{
    //   "spec": "cypress/e2e/regression/failed-test-example-spec.cy.js"
    // }
  }
});

const { defineConfig } = require("cypress");
// const _ = require('lodash')
// const del = require('del')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: {
      "runMode": 1,
      "openMode": 0
    },
    //todo: merge reports with mochawesome-merge + mochawesome-report-generator
    reporter: "mochawesome",
    reporterOptions: {
      "reportDir": "cypress/reports/e2e",
      "overwrite": true,
      "reportFilename": "[datetime]_[status]_[name]-report",
      "timestamp": "default"
      ,"showPassed": true
    },
    screenshotsFolder: "cypress/reports/e2e/screenshots",
    videosFolder: "cypress/reports/e2e/videos"
    ,video: false
  }
});

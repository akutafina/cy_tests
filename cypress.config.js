const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: {
      "runMode": 1,
      "openMode": 0
    },
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

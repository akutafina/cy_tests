const { defineConfig } = require("cypress");
// const _ = require('lodash')
// const del = require('del')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // on('after:spec', (spec, results) => {
      //   if (results && results.video) {
      //     const failures = _.some(results.tests, (test) => {
      //       return _.some(test.attempts, { state: 'failed' })
      //     })
      //     if (!failures) {
      //       return del(results.video)
      //     }
      //   }
      // })
      // on('after:screenshot', (details) => {
      //   // details will look something like this:
      //   // {
      //   //   size: 10248
      //   //   takenAt: '2018-06-27T20:17:19.537Z'
      //   //   duration: 4071
      //   //   dimensions: { width: 1000, height: 660 }
      //   //   multipart: false
      //   //   pixelRatio: 1
      //   //   name: 'my-screenshot'
      //   //   specName: 'integration/my-spec.js'
      //   //   testFailure: true
      //   //   path: '/path/to/my-screenshot.png'
      //   //   scaled: true
      //   //   blackout: []
      //   // }
      //
      //   // example of renaming the screenshot file
      //
      //   const newPath = '/new/path/to/screenshot.png'
      //
      //   return new Promise((resolve, reject) => {
      //     fs.rename(details.path, newPath, (err) => {
      //       if (err) return reject(err)
      //
      //       // because we renamed/moved the image, resolve with the new path
      //       // so it is accurate in the test results
      //       resolve({ path: newPath })
      //     })
      //   })
      // })
    },
    baseUrl: "http://localhost:3000",
    screenshotsFolder: "cypress/reports/e2e/assets",
    // retries:{
    //   runMode: 1,
    //   openMode: 0
    // }
  }
});

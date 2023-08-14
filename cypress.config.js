const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const environmentName = config.env.env || 'local'
            const environmentFilename = `./${environmentName}.config.json`
            console.log('loading %s', environmentFilename)
            const settings = require(environmentFilename)
            if (settings.baseUrl) {
                config.baseUrl = settings.baseUrl
            }
            if (settings.env) {
                config.env = {
                    ...config.env,
                    ...settings.env,
                }
            }
            console.log('loaded settings for environment %s', environmentName)
            return config
        },
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
            , "showPassed": true
        },
        screenshotsFolder: "cypress/reports/e2e/screenshots",
        videosFolder: "cypress/reports/e2e/videos"
        , video: false
    }
});

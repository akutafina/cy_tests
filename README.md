# UI Test Automation Playground Tests

UI Test Automation Playground Tests project is a test automation project, covering functional smoke and regression
end-to-end testing
for [UI Test Automation Playground Project](https://github.com/inflectra/ui-test-automation-playground).
All the e2e tests stored withing the respective [cypress/e2e/smoke](cypress/e2e/smoke)
and [cypress/e2e/regression](cypress/e2e/regression) folders.

## Teck Solution

* JavaScript + [Cypress](https://docs.cypress.io/guides/overview/why-cypress) is used.
* Page Object pattern is used.
* Solution doesn't imply parallel tests run.
* Solution provides option to stub or not the requests (see example
  in [ajax_data.spec.cy.js](cypress/e2e/regression/ajax_data.spec.cy.js))
* Test run is currently supported in following browsers:
    * `Chrome`,
    * `Firefox`,
    * `Edge`.
* Test configuration currently supports following environments:
    * `local`,
    * `production`.
* Three default viewports values were chosen based
  on [BI data](https://gs.statcounter.com/screen-resolution-stats/all/europe):
    * `1920x1080` representing `desktop viewport`;
    * `360x800` representing `mobile portrait viewport`;
    * `800x360` representing `mobile landscape viewport`.

## Usage

### Set up

In order to utilise this project:

* Make sure you have all
  the [system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
  fulfilled.
* You need to have the following browsers installed: Chrome, FireFox, Edge. Installation links can be
  found [here](https://docs.cypress.io/guides/guides/launching-browsers#Browsers).
* Install Cypress following
  the [official documentation guidelines](https://docs.cypress.io/guides/getting-started/installing-cypress#Installing).
* Clone or download this project to your local.
* Navigate to the project root folder in your terminal and execute `sudo npm install --save-dev` to install all dependencies.
* In case you use [IntelliJ IDEA](https://www.jetbrains.com/de-de/idea/download) IDE, we recommend to have [Cypress Support Plugin](https://plugins.jetbrains.com/plugin/13819-cypress-support) installed.
* In case running the tests with `local` configuration do not forget to spin up the UI Test Automation Playground App
  following [the guidelines](https://github.com/Inflectra/ui-test-automation-playground#usage).

### Running your tests

The project is broken into separate parts for smoke and e2e testing. Each of these parts can be utilised independently
of the others using the `scripts` from [package.json](package.json).

To open **graphic UI** of your Cypress tests
follow [the guidelines](https://docs.cypress.io/guides/getting-started/opening-the-app).

**Command** pattern **to run** a specific set of tests modules in a chosen browser and one of three viewports **from a
terminal** is following:

`npm run test:<e2e/smoke>:<env>:<browser>:<viewport>`

E.g. to run e2e `smoke` tests only in `Chrome` `desktop` browser against your app spinned `locally`, navigate to the
root directory and run:
`npm run test:smoke:local:chrome:1920x1080`

[Look here](##Teck-Solution) for all the supported values of `env`,`browser` and `viewport` values.

In case of need of passing additional params to the existing script use `-- <additional param>`, e.g. run following to
test your reporting logic:
`npm run cy:run -- --spec 'cypress/e2e/regression/skip-failed-test-example-spec.cy.js'`
The test is marker as skipped by default, so if you want it to fail you have to unskip it.

Other examples of needs and their params could be:
```
headless: --headless,
local: --env ENV='local',
prod: --env ENV='prod',
chrome: --browser chrome,
firefox: --browser firefox,
edge: --browser edge,
smoke: --spec 'cypress/e2e/smoke/*',
regression: --spec 'cypress/e2e/regression/*'
```

Additionally, following set up before script will set up a veiwport:

```
for desktop: "export CYPRESS_VIEWPORT_WIDTH=1920;export CYPRESS_VIEWPORT_HEIGHT=1080;",
for mobile:portrait: "export CYPRESS_VIEWPORT_WIDTH=360;export CYPRESS_VIEWPORT_HEIGHT=800;",
for mobile:landscape: "export CYPRESS_VIEWPORT_WIDTH=800;export CYPRESS_VIEWPORT_HEIGHT=360;"
```

*IMPORTANT!*

In order for the [Login tests](cy_1/cy_tests_1/cypress/e2e/regression/sample_app.spec.cy.js) to pass, you will need to pass the test pwd.
Then you can pass when running with a comand e.g. like: `export CYPRESS_DEFAULT_USERS_PWD="pwd"; npm run test:e2e:smoke:local:chrome:1920x1080` and add it in the CI job properties later.

## Reporting

* Reports for each tests are written into `cypress/reports` directories after a successful run.
* Screenshots are generated in case a test fail into 'screenshots' directory withing the respective to the test suite folder inside `cypress/reports`.
* Video recording is off y default. It can be switched on by changing video value to true in [cypress.config.js](cy_1/cy_tests_1/cypress.config.js). Generated videos can be found for all the tests regardless of their status in the 'videos' directory withing the respective to the test suite folder inside `cypress/reports`.

## Further in the pipeline:

* Add instruction with screenshots on how to run from studio (Intelij, Visual).
* Add negative aka tests to fail [Jira Tasks](https://cdn.vox-cdn.com/thumbor/6WUQ-FozHdnzwKN7t31bJWPbdxI=/0x0:900x500/1400x1050/filters:focal(450x250:451x251)/cdn.vox-cdn.com/uploads/chorus_asset/file/6438793/this-is-fine.jpg).
* Merging reports into one in the pipeline with mochawesome-merge & mochawesome-report-generator.
* Add [throttling](https://docs.cypress.io/faq/questions/using-cypress-faq#Can-I-throttle-network-speeds-using-Cypress) speed posibility.
* Add component tests to check accessibility according to [WAI-ARIA standarts](https://www.w3.org/TR/wai-aria-1.1).
* Introduce metrics to track the test implementation progress.

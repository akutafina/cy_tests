/// <reference types="Cypress" />

import {progressBarSteps} from "../../steps/progress-bar-steps";

describe('Progress Bar Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        progressBarSteps.visit();
    })

    it(`verifies the header`, () => {
        progressBarSteps.titleTextIs('Progress Bar');
    })

    it('displays correct % in message when clicking Start > Stop at value', () => {
        const testPercentage = 75;
        progressBarSteps.clickStart()
        progressBarSteps.waitForProgressBarToReachPercentage(testPercentage, 30000)
        progressBarSteps.clickStop()
        progressBarSteps.progressBarPercentageIs(testPercentage)
        progressBarSteps.resultIsNotGreaterThen(0)
    })

})
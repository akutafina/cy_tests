/// <reference types="Cypress" />

import { visibilitySteps } from "../../steps/visibility-steps";

describe('Failed Test Example (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        visibilitySteps.visit();
    })

    it(`the test should fail`, () => {
        visibilitySteps.titleTextIs('Failed Test Example');
    })


})
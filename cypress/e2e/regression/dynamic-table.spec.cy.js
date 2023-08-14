/// <reference types="Cypress" />

import {dynamicTableSteps} from "../../steps/dynamic-table-steps";

describe('AJAX Data Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        dynamicTableSteps.visit();
    })

    it(`verifies the header`, () => {
        dynamicTableSteps.titleTextIs('Dynamic Table');
    })

    it('Chrome CPU Load table value equals one in the yellow label', () => {
        dynamicTableSteps
            .compareValuesInTableAndWarnFor('Chrome', 'CPU')

    })

})
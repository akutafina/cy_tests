/// <reference types="Cypress" />

import { overlappedElementSteps } from "../../steps/overlapped-element-steps";

describe('AJAX Data Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        overlappedElementSteps.visit();
    })

    it(`verifies the header`, () => {
        overlappedElementSteps.titleTextIs('Overlapped Element');
    })

    it('scrolls to Name input field and validates the text', () => {
        overlappedElementSteps.scrollAndFillInName('Test Name');
        overlappedElementSteps.nameFieldValueIs('Test Name');

    })

})
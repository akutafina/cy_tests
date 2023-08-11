/// <reference types="Cypress" />

import { overlappedElementSteps } from "../steps/overlapped-element-steps";

describe('AJAX Data Page', () => {

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
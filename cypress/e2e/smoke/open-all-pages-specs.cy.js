/// <reference types="Cypress" />

import {ajaxDataSteps} from "../../steps/ajax-data-steps";
import {dynamicTableSteps} from "../../steps/dynamic-table-steps";
import {overlappedElementSteps} from "../../steps/overlapped-element-steps";
import {progressBarSteps} from "../../steps/progress-bar-steps";
import {sampleAppSteps} from "../../steps/sample-app-steps";
import {textInputSteps} from "../../steps/text-input-steps";
import {visibilitySteps} from "../../steps/visibility-steps";


describe('Loads all the pages (browser: ' + Cypress.browser.name + ', viewport: ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    it(`Ajax Data page loads and has title`, () => {
        ajaxDataSteps.visit();
        ajaxDataSteps.hasTitle();
    })

    it(`Dynamic Table page loads and has title`, () => {
        dynamicTableSteps.visit();
        dynamicTableSteps.hasTitle();
    })

    it(`Overlapped Elements page loads and has title`, () => {
        overlappedElementSteps.visit();
        overlappedElementSteps.hasTitle();
    })

    it(`Progress bar page loads and has title`, () => {
        progressBarSteps.visit();
        progressBarSteps.hasTitle();
    })

    it(`Sample App page loads and has title`, () => {
        sampleAppSteps.visit();
        sampleAppSteps.hasTitle();
    })

    it(`Text Input page loads and has title`, () => {
        textInputSteps.visit();
        textInputSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        visibilitySteps.visit();
        visibilitySteps.hasTitle();
    })

})
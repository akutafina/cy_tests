/// <reference types="Cypress" />

import {ajaxDataSteps} from "../../steps/ajax-data-steps";
import {dynamicTableSteps} from "../../steps/dynamic-table-steps";
import {overlappedElementSteps} from "../../steps/overlapped-element-steps";
import {progressBarSteps} from "../../steps/progress-bar-steps";
import {sampleAppSteps} from "../../steps/sample-app-steps";
import {textInputSteps} from "../../steps/text-input-steps";
import {visibilitySteps} from "../../steps/visibility-steps";


describe('Loads all the pages (browser: ' + Cypress.browser.name + ', viewport: ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    it(`Visibility page loads and has title`, () => {
        ajaxDataSteps.visit();
        ajaxDataSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        dynamicTableSteps.visit();
        dynamicTableSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        overlappedElementSteps.visit();
        overlappedElementSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        progressBarSteps.visit();
        progressBarSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        sampleAppSteps.visit();
        sampleAppSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        textInputSteps.visit();
        textInputSteps.hasTitle();
    })

    it(`Visibility page loads and has title`, () => {
        visibilitySteps.visit();
        visibilitySteps.hasTitle();
    })

    // beforeEach(() => {
    //     visibilitySteps.visit();
    // })
    //
    // it(`verifies the header`, () => {
    //     visibilitySteps.titleTextIs('Visibility');
    // })
    //
    // it('removes "Removed" button after clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     // visibilitySteps.removedBtnIsNotInDom()
    // })
    //
    // it('perceived "Zero Width" button as invisible after clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     visibilitySteps.zeroWidthBtnIsInvisible()
    // })
    //
    // it('overlaps "Overlapped" button when clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     visibilitySteps.overlappedBtnIsOverlapped()
    // })
    //
    // it('perceived "Opacity 0" button as invisible after clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     visibilitySteps.opacityZeroBtnIsInvisible()
    // })
    //
    // it('perceived "Visibility Hidden" button as invisible after clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     visibilitySteps.visibilityHiddenBtnIsInvisible()
    // })
    //
    // it('perceived "Display None" button as invisible after clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     visibilitySteps.displayNoneBtnIsInvisible()
    // })
    //
    // it('moves "Offscreen" button outside viewport after clicking on "Hide" button', () => {
    //     visibilitySteps.clickHideBtn()
    //     visibilitySteps.offscreenBtnIsOutsideViewport()
    // })

})
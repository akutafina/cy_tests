/// <reference types="Cypress" />

import { visibilitySteps } from "../../steps/visibility-steps";

describe('Visibility Page (browser: ' + Cypress.browser.name + ', viewport: ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        visibilitySteps.visit();
    })

    it(`verifies the header`, () => {
        visibilitySteps.titleTextIs('Visibility');
        visibilitySteps.titleTextIs('Failed Test');
    })

    it('removes "Removed" button after clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        // visibilitySteps.removedBtnIsNotInDom()
    })

    it('perceived "Zero Width" button as invisible after clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        visibilitySteps.zeroWidthBtnIsInvisible()
    })

    it('overlaps "Overlapped" button when clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        visibilitySteps.overlappedBtnIsOverlapped()
    })

    it('perceived "Opacity 0" button as invisible after clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        visibilitySteps.opacityZeroBtnIsInvisible()
    })

    it('perceived "Visibility Hidden" button as invisible after clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        visibilitySteps.visibilityHiddenBtnIsInvisible()
    })

    it('perceived "Display None" button as invisible after clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        visibilitySteps.displayNoneBtnIsInvisible()
    })

    it('moves "Offscreen" button outside viewport after clicking on "Hide" button', () => {
        visibilitySteps.clickHideBtn()
        visibilitySteps.offscreenBtnIsOutsideViewport()
    })

})
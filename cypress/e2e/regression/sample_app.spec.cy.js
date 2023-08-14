/// <reference types="Cypress" />

import {credentials} from "../../test-data/valid-user-credentials";
import {sampleAppSteps} from "../../steps/sample-app-steps";

const validUserCredentials = credentials;

describe('Sample App Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        sampleAppSteps.visit();
    })

    it(`verifies the header`, () => {
        sampleAppSteps.titleTextIs('Sample App');
    })

    validUserCredentials.forEach((credentials) => {
        it('signs in and out with valid credentials: "' +
            credentials.userName + '", "' + credentials.comment + '"', () => {
            sampleAppSteps.verifyLoginFormIsClear()
            sampleAppSteps.fillInLoginFormWithDefaultPwd(credentials.userName);
            sampleAppSteps.submitLoginForm();
            sampleAppSteps.successfulLoginMessageIsDisplayed(credentials.userName);
            sampleAppSteps.isOnSampleAppPage();
            sampleAppSteps.hasLogoutButton()
            sampleAppSteps.clickLogOutBtn()
            sampleAppSteps.successfulLogOutMessageIsDisplayed()
            sampleAppSteps.isOnSampleAppPage();
            sampleAppSteps.verifyLoginFormIsClear()
        })
    })

})
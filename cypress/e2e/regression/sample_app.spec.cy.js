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
        const password = Cypress.env('DEFAULT_USERS_PWD');

        it('signs in and out with valid credentials: "' +
            credentials.userName + '", "' + credentials.comment + '"', () => {
            sampleAppSteps.verifyLoginFormIsClear()
            sampleAppSteps.fillInLoginForm(credentials.userName, password);
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
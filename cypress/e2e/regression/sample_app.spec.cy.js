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

    //todo: move pwd to config
    validUserCredentials.forEach((credentials) => {
        it('signs in and out with valid credentials: "' + credentials.userName + '", "' +
            // credentials.comment
            Cypress.env('DEFAULT_USERS_PWD')
            + '"', () => {
            sampleAppSteps.verifyLoginFormIsClear()
            sampleAppSteps.fillInLoginForm(credentials);
            sampleAppSteps.submitLoginForm();
            sampleAppSteps.successfulLoginMessageIsDisplayed(credentials.userName,Cypress.env('DEFAULT_USERS_PWD'));
            sampleAppSteps.isOnSampleAppPage();
            sampleAppSteps.hasLogoutButton()
            sampleAppSteps.clickLogOutBtn()
            sampleAppSteps.successfulLogOutMessageIsDisplayed()
            sampleAppSteps.isOnSampleAppPage();
            sampleAppSteps.verifyLoginFormIsClear()
        })
    })

})
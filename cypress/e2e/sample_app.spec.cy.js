/// <reference types="Cypress" />

import {credentials} from "../test-data/valid-user-credentials";
import {sampleAppSteps} from "../steps/sample-app-steps";

const validUserCredentials = credentials;

describe('Sample App Page', () => {

    beforeEach(() => {
        sampleAppSteps.visit();
    })

    it(`verifies the header`, () => {
        sampleAppSteps.titleTextIs('Sample App');
    })

    //todo: move pwd to config
    validUserCredentials.forEach((credentials) => {
        it('signs in and out with valid credentials: "' + credentials.userName + '", "' + credentials.password + '"', () => {
            sampleAppSteps.verifyLoginFormIsClear()
            sampleAppSteps.fillInLoginForm(credentials);
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
import SampleAppPage from "../pages/sample-app-page";
import {GeneralSteps} from "./general-steps";

export class SampleAppSteps extends GeneralSteps {
    visit() {
        cy.visit(SampleAppPage.path)
        this.isOnSampleAppPage();
    }

    isOnSampleAppPage() {
        this.urlPathIs(SampleAppPage.path)
    }

    fillInLoginFormWithDefaultPwd(userName) {

        const password = Cypress.env('DEFAULT_USERS_PWD');

        expect(username, 'username was set').to.be.a('string').and.not.be.empty
        expect(password, 'password was set').to.be.a('string').and.not.be.empty

        SampleAppPage.getUserNameField.type(userName).should('have.value', userName);
        SampleAppPage.getPasswordField.type(password).should('have.value', password);

    }

    verifyLoginFormIsClear() {
        SampleAppPage.getUserNameField.should('be.empty')
        SampleAppPage.getPasswordField.should('be.empty')
    }

    submitLoginForm() {
        SampleAppPage.getSubmitButton.click();
    }

    successfulLoginMessageIsDisplayed(userName) {
        SampleAppPage.getLoginStatusMessage
            .should('have.text', 'Welcome, ' + userName + '!')
    }

    successfulLogOutMessageIsDisplayed() {
        SampleAppPage.getLoginStatusMessage
            .should('have.text', 'User logged out.')
    }

    hasLogoutButton() {
        SampleAppPage.getLogoutButton
    }

    clickLogOutBtn() {
        SampleAppPage.clickLogoutButton
    }

}

export const sampleAppSteps = new SampleAppSteps();
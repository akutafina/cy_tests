import SampleAppPage from "../pages/sample-app-page";
import { GeneralSteps, generalSteps } from "./general-steps";

export class SampleAppSteps extends GeneralSteps
{
    visit(){
        cy.visit(this.baseUrl + SampleAppPage.path)
        // cy.url().should('include', SampleAppPage.path)
        this.isOnSampleAppPage();
    }

    isOnSampleAppPage(){
        this.urlPathIs(SampleAppPage.path)
        // cy.url().should('include', 'sampleapp')
        //todo: improve matcher to the full match
    }

    fillInLoginForm(userName, password) {
        if (userName) {
            SampleAppPage.getUserNameField
                .type(userName).should('have.value', userName);
        }
        if (password) {
            SampleAppPage.getPasswordField
                .type(password).should('have.value', password);
        }
    }

    verifyLoginFormIsClear(){
        SampleAppPage.getUserNameField.should('be.empty')
        SampleAppPage.getPasswordField.should('be.empty')
    }

    submitLoginForm() {
        SampleAppPage.getSubmitButton.click();
    }

    successfulLoginMessageIsDisplayed (userName) {
        SampleAppPage.getLoginStatusMessage
            .should('have.text', 'Welcome, ' + userName + '!')
    }

    successfulLogOutMessageIsDisplayed () {
        SampleAppPage.getLoginStatusMessage
            .should('have.text', 'User logged out.')
    }

    hasLogoutButton() {
        SampleAppPage.getLogoutButton
    }

    clickLogOutBtn(){
    SampleAppPage.clickLogoutButton
    }

}

export const sampleAppSteps = new SampleAppSteps();
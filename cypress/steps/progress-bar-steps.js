import ProgressBarPage from "../pages/progress-bar-page";
import VisibilityPage from "../pages/visibility-page";
//todo: put visit in general steps
// put url path as a constant

import { GeneralSteps, generalSteps } from "./general-steps";
import AjaxDataPage from "../pages/ajax-data-page";

// const path = '/progressbar';

export class ProgressBarSteps extends GeneralSteps
{
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit() {
        cy.visit(this.baseUrl + ProgressBarPage.path)
        this.isOnProgressBarPage()
    }

    //todo: move to base steps
    isOnProgressBarPage(){
        this.urlPathIs(ProgressBarPage.path)
        // cy.url().should('include', path)
        //todo: improve matcher to the full match
    }
    //
    // titleTextIs(text) {
    //     ProgressBarPage.getPageTitle.should('have.text', text);
    // }

    clickStart() {
        ProgressBarPage.getStartBtn.click()
    }

    clickStop() {
        ProgressBarPage.getStopBtn.click()
    }

    waitForProgressBarToReachPercentage(testPercentage, timeout) {
        ProgressBarPage.waitForProgressBarPercentage(testPercentage, timeout)
    }

    progressBarPercentageIs(testPercentage) {
        ProgressBarPage.getProgressBar.should('have.text', testPercentage + '%')
    }

    resultIsNotGreaterThen(resultVal) {
        ProgressBarPage.getResultMessage.contains('Result: ' + resultVal + ', duration: ')
    }
}

export const progressBarSteps = new ProgressBarSteps();
import ProgressBarPage from "../pages/progress-bar-page";
import { GeneralSteps, generalSteps } from "./general-steps";

export class ProgressBarSteps extends GeneralSteps
{
    visit() {
        cy.visit(this.baseUrl + ProgressBarPage.path)
        this.isOnProgressBarPage()
    }

    isOnProgressBarPage(){
        this.urlPathIs(ProgressBarPage.path)
    }

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
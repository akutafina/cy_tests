import { GeneralPage } from "./general-page";

class ProgressBarPage extends GeneralPage{
    //
    // static get getPageTitle() {
    //     return cy.get('h3')
    // }
    static path = '/progressbar';

    static get getStartBtn() {
        return cy.get('button:contains("Start")')
    }

    static get getStopBtn() {
        return cy.get('button:contains("Stop")')
    }

    static get getProgressBar() {
        return  cy.get('#progressBar')
    }

    static get getResultMessage() {
        return  cy.get('#result')
    }

    static waitForProgressBarPercentage(testPercentage, timeout) {
        cy.get('#progressBar',{timeout: timeout}).should(($div) => {
            const n = parseFloat($div.text())
            expect(n).to.be.gte(testPercentage)
         })
    }

}

export default ProgressBarPage
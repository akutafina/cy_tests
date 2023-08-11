import DynamicTablePage from "../pages/dynamic-table-page";
//todo: put visit in general steps
// put url path as a constant

const path = '/dynamictable';

export class DynamicTableSteps //extends GeneralStep
{
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit() {
        cy.visit('http://localhost:3000' + path)
        this.isOnDynamicTablePage()
    }

    isOnDynamicTablePage(){
        cy.url().should('include', path)
        //todo: improve matcher to the full match
    }

    titleTextIs(text) {
        DynamicTablePage.getPageTitle.should('have.text', text);
    }

    getTaskManagerTableCellText(processName, metricName){
        return cy.getWaiAriaTableCell(processName, metricName).invoke('text')
    }

    verifyWarnText(processName, metricName, value) {
    DynamicTablePage.getWarning
        .should('have.text', processName + ' ' + metricName + ': ' + value);
}

    compareValuesInTableAndWarnFor(processName, metricName){
        this.getTaskManagerTableCellText(processName, metricName)
            .then((value) => {
                this.verifyWarnText(processName, metricName, value);
            })
    }

}

export const dynamicTableSteps = new DynamicTableSteps();
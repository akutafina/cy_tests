import DynamicTablePage from "../pages/dynamic-table-page";
import VisibilityPage from "../pages/visibility-page";

import { GeneralSteps, generalSteps } from "./general-steps";
import AjaxDataPage from "../pages/ajax-data-page";
//todo: put visit in general steps
// put url path as a constant

// const path = '/dynamictable';

export class DynamicTableSteps extends GeneralSteps
{
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit() {
        cy.visit(this.baseUrl + DynamicTablePage.path)
        this.isOnDynamicTablePage()
    }

    isOnDynamicTablePage(){
        this.urlPathIs(DynamicTablePage.path)
        // cy.url().should('include', .path)
        // //todo: improve matcher to the full match
    }
    //
    // titleTextIs(text) {
    //     DynamicTablePage.getPageTitle.should('have.text', text);
    // }

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
import DynamicTablePage from "../pages/dynamic-table-page";
import {GeneralSteps} from "./general-steps";

export class DynamicTableSteps extends GeneralSteps {
    visit() {
        cy.visit(DynamicTablePage.path)
        this.isOnDynamicTablePage()
    }

    isOnDynamicTablePage() {
        this.urlPathIs(DynamicTablePage.path)
    }

    getTaskManagerTableCellText(processName, metricName) {
        return cy.getWaiAriaTableCell(processName, metricName).invoke('text')
    }

    verifyWarnText(processName, metricName, value) {
        DynamicTablePage.getWarning
            .should('have.text', processName + ' ' + metricName + ': ' + value);
    }

    compareValuesInTableAndWarnFor(processName, metricName) {
        this.getTaskManagerTableCellText(processName, metricName)
            .then((value) => {
                this.verifyWarnText(processName, metricName, value);
            })
    }

}

export const dynamicTableSteps = new DynamicTableSteps();
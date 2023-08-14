import {GeneralPage} from "./general-page";

class DynamicTablePage extends GeneralPage {
    static path = '/overlapped';

    static get getNameField() {
        cy.get('#name').scrollIntoView()
        return cy.get('#name')
    }

}

export default DynamicTablePage
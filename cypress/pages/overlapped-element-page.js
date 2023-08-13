import { GeneralPage } from "./general-page";

class DynamicTablePage extends GeneralPage{
    //
    // static get getPageTitle() {
    //     return cy.get('h3')
    // }
    static path = '/overlapped';

    static get getNameField() {
        cy.get('#name').scrollIntoView()
        return cy.get('#name')
    }

}

export default DynamicTablePage
class DynamicTablePage {

    static get getPageTitle() {
        return cy.get('h3')
    }

    static get getNameField() {
        cy.get('#name').scrollIntoView()
        return cy.get('#name')
    }


}

export default DynamicTablePage
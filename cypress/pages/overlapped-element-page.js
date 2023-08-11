class DynamicTablePage {

    static get getPageTitle() {
        return cy.get('h3')
    }

    static get getNameField() {
        return cy.get('#name').scrollIntoView()
    }


}

export default DynamicTablePage
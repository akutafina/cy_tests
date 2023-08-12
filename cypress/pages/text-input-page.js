class TextInputPage {

    static get getPageTitle() {
        return cy.get('h3')
    }

    static get getButtonNameInputField() {
        return cy.get('#newButtonName')
    }

    static get getUpdatingBtn() {
        return cy.get('#updatingButton')
    }
}

export default TextInputPage
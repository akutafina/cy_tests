import { GeneralPage } from "./general-page";

class TextInputPage extends GeneralPage{
    //
    // static get getPageTitle() {
    //     return cy.get('h3')
    // }

    static path = '/textinput';

    static get getButtonNameInputField() {
        return cy.get('#newButtonName')
    }

    static get getUpdatingBtn() {
        return cy.get('#updatingButton')
    }
}

export default TextInputPage
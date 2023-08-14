import {GeneralPage} from "./general-page";

class TextInputPage extends GeneralPage {
    static path = '/textinput';

    static get getButtonNameInputField() {
        return cy.get('#newButtonName')
    }

    static get getUpdatingBtn() {
        return cy.get('#updatingButton')
    }
}

export default TextInputPage
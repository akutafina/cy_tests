import TextInputPage from "../pages/text-input-page";
import {GeneralSteps} from "./general-steps";

export class TextInputSteps extends GeneralSteps {
    visit() {
        cy.visit(TextInputPage.path)
        this.isOnTextInputPage()
    }

    isOnTextInputPage() {
        this.urlPathIs(TextInputPage.path)
    }

    fillInInputField(newBtnName) {
        TextInputPage.getButtonNameInputField.type(newBtnName)
        // would check for accessibility as well but pressing Enter reloads the page >> Jira Task
    }

    updatingBtnTextIs(expectedBtnText) {
        TextInputPage.getUpdatingBtn.should('have.text', expectedBtnText)
    }

    clickUpdatingBtn() {
        TextInputPage.getUpdatingBtn.click()
    }

}

export const textInputSteps = new TextInputSteps();
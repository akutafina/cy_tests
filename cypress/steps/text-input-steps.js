import TextInputPage from "../pages/text-input-page";
//todo: put visit in general steps
// put url path as a constant

const path = '/textinput';

export class TextInputSteps //extends GeneralStep
{
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit() {
        cy.visit('http://localhost:3000' + path)
        this.isOnTextInputPage()
    }

    //todo: move to base steps
    isOnTextInputPage(){
        cy.url().should('include', path)
        //todo: improve matcher to the full match
    }

    titleTextIs(text) {
        TextInputPage.getPageTitle.should('have.text', text);
    }

    fillInInputField(newBtnName){
        TextInputPage.getButtonNameInputField.type(newBtnName)
        // would check for accessibility as well but pressing Enter reloads the page >> Jira Task
    }

    updatingBtnTextIs(expectedBtnText){
        TextInputPage.getUpdatingBtn.should('have.text', expectedBtnText)
    }

    clickUpdatingBtn(){
        TextInputPage.getUpdatingBtn.click()
    }


}

export const textInputSteps = new TextInputSteps();
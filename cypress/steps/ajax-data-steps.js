import AjaxDataPage from "../pages/ajax-data-page";
//todo: put visit in general steps
// put url path as a constant

export class AjaxDataSteps //extends GeneralStep
{
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit(){
        cy.visit('http://localhost:3000/ajax')
        cy.url().should('include', 'ajax')
    }

    isOnAjaxDataPage(){
        cy.url().should('include', 'ajax')
        //todo: improve matcher to the full match
    }

    titleTextIs(text) {
        AjaxDataPage.getPageTitle.should('have.text', text);
    }

    hasDataLoadMessage(message){
        AjaxDataPage.getContentMessage.contains(message);
    }

    clickTriggeringRequestBtn(){
        AjaxDataPage.getTriggeringRequestBtn.click()
    }

}

export const ajaxDataSteps = new AjaxDataSteps();
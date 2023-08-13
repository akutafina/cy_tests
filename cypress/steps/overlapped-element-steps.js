import OverlappedElementPage from "../pages/overlapped-element-page";
import VisibilityPage from "../pages/visibility-page";

import { GeneralSteps, generalSteps } from "./general-steps";
import AjaxDataPage from "../pages/ajax-data-page";
//todo: put visit in general steps
// put url path as a constant

// const path = '/overlapped';

export class OverlappedElementSteps extends GeneralSteps
{
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit() {
        cy.visit(this.baseUrl + OverlappedElementPage.path)
        this.isOnOverlappedElementPage()
    }

    isOnOverlappedElementPage(){
        this.urlPathIs(OverlappedElementPage.path)
        // cy.url().should('include', path)
        //todo: improve matcher to the full match
    }
    //
    // titleTextIs(text) {
    //     OverlappedElementPage.getPageTitle.should('have.text', text);
    // }

    scrollAndFillInName(name){
        OverlappedElementPage.getNameField.type(name)
    }
    nameFieldValueIs(name){
        OverlappedElementPage.getNameField.invoke('val').should('eq', name)
    }
}

export const overlappedElementSteps = new OverlappedElementSteps();
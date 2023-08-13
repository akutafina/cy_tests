import AjaxDataPage from "../pages/ajax-data-page";

//todo: put visit in general steps
// put url path as a constant

const ajaxRequestAlias = 'getAjaxData';

//
// import {ConfigUtility, configUtility} from "../config-utility";
// import {GeneralSteps} from "./general-steps";

import { GeneralSteps, generalSteps } from "./general-steps";

// const baseUrl = configUtility.getBaseUrl();
// const path = '/ajax';

export class AjaxDataSteps extends GeneralSteps
{
     //
     // baseUrl = configUtility.getBaseUrl();

    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit(){
        // cy.visit("http://localhost:3000" + AjaxDataPage.path)
        cy.visit(this.baseUrl + AjaxDataPage.path)

        this.isOnAjaxDataPage(AjaxDataPage.path)
    }

    isOnAjaxDataPage(){
        this.urlPathIs(AjaxDataPage.path)
    }

    hasDataLoadMessage(message){
        AjaxDataPage.getContentMessage.contains(message);
    }

    clickTriggeringRequestBtn(){
        AjaxDataPage.getTriggeringRequestBtn.click()
    }

    //todo: move to general
    inteceptAjaxRequest(ajaxRequestResponse){
        if(ajaxRequestResponse.request) {
            if (ajaxRequestResponse.response) {
                return cy.intercept(
                    ajaxRequestResponse.request,
                    ajaxRequestResponse.response //stubbing
                ).as(ajaxRequestAlias)
            }
            else{
                return cy.intercept(
                    ajaxRequestResponse.request
                ).as(ajaxRequestAlias)
            }
        }
    }

    waitForAjaxResponse(timeout){
        cy.waitForResponse('@' + ajaxRequestAlias, timeout)
    }

}

export const ajaxDataSteps = new AjaxDataSteps();
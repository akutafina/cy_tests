import AjaxDataPage from "../pages/ajax-data-page";
import {GeneralSteps} from "./general-steps";

const ajaxRequestAlias = 'getAjaxData';

export class AjaxDataSteps extends GeneralSteps {
    visit() {
        cy.visit(AjaxDataPage.path)
        this.isOnAjaxDataPage(AjaxDataPage.path)
    }

    isOnAjaxDataPage() {
        this.urlPathIs(AjaxDataPage.path)
    }

    hasDataLoadMessage(message) {
        AjaxDataPage.getContentMessage.contains(message);
    }

    clickTriggeringRequestBtn() {
        AjaxDataPage.getTriggeringRequestBtn.click()
    }

    inteceptAjaxRequest(ajaxRequestResponse) {
        if (ajaxRequestResponse.request) {
            if (ajaxRequestResponse.response) {
                return cy.intercept(
                    ajaxRequestResponse.request,
                    ajaxRequestResponse.response //stubbing
                ).as(ajaxRequestAlias)
            } else {
                return cy.intercept(
                    ajaxRequestResponse.request
                ).as(ajaxRequestAlias)
            }
        }
    }

    waitForAjaxResponse(timeout) {
        cy.waitForResponse('@' + ajaxRequestAlias, timeout)
    }

}

export const ajaxDataSteps = new AjaxDataSteps();
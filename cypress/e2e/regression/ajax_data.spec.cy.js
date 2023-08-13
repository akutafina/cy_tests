/// <reference types="Cypress" />

//todo: page object model in cypress https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
import { ajaxDataSteps } from "../../steps/ajax-data-steps";
import ajaxRequestResponse from '../../fixtures/ajax-request.json';
// import ajaxRequestResponse from '../fixtures/ajax-request-response.json' //to stub

//todo: Record the following steps. check the videos are there

describe('AJAX Data Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        ajaxDataSteps.visit();
    })

    it(`verifies the header`, () => {
        ajaxDataSteps.titleTextIs('AJAX Data');
    })

    it('shows an element after processing of an AJAX request', () => {
        ajaxDataSteps.inteceptAjaxRequest(ajaxRequestResponse)
        ajaxDataSteps.clickTriggeringRequestBtn()
        ajaxDataSteps.waitForAjaxResponse(15000)
        ajaxDataSteps.hasDataLoadMessage('Data loaded with AJAX get request.');

  })

})
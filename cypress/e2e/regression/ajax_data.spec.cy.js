/// <reference types="Cypress" />

import {ajaxDataSteps} from "../../steps/ajax-data-steps";
import ajaxRequestResponse from '../../fixtures/ajax-request.json';
// import ajaxRequestResponse from '../fixtures/ajax-request-response.json' //use this one to stub the request

const ajaxResponseTimeout = 15000;

describe('AJAX Data Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        ajaxDataSteps.visit();
    })

    it(`verifies the header`, () => {
        ajaxDataSteps.titleTextIs('AJAX Data');
    })

    it('shows an element after processing of an AJAX request', () => {
        ajaxDataSteps.inteceptAjaxRequest(ajaxRequestResponse);
        ajaxDataSteps.clickTriggeringRequestBtn();
        ajaxDataSteps.waitForAjaxResponse(ajaxResponseTimeout);
        ajaxDataSteps.hasDataLoadMessage('Data loaded with AJAX get request.');

    })

})
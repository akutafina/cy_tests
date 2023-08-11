/// <reference types="Cypress" />

//todo: page object model in cypress https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/

import { ajaxDataSteps } from "../steps/ajax-data-steps";
import ajaxRequestResponse from '../fixtures/ajax-request-response.json'

//todo: Record the following steps. check the videos are there

describe('AJAX Data Page', () => {

    beforeEach(() => {
        ajaxDataSteps.visit();
    })

    it(`verifies the header`, () => {
        ajaxDataSteps.titleTextIs('AJAX Data');
    })

    it('shows an element after processing of an AJAX request', () => {

        cy.intercept(
            ajaxRequestResponse.request,
            ajaxRequestResponse.response
      ).as('getAjaxData') // and assign an alias

        ajaxDataSteps.clickTriggeringRequestBtn()


      cy.wait('@getAjaxData',{ timeout : 15000}).its('response.statusCode').should('be.oneOf', [200, 304])
        ajaxDataSteps.hasDataLoadMessage('Data loaded with AJAX get request.');

  })

})
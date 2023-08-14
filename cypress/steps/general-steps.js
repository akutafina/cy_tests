/// <reference types="Cypress"/>

import {GeneralPage} from "../pages/general-page";

export class GeneralSteps {

    hasTitle() {
        GeneralPage.getPageTitle.should('be.visible');
    }

    titleTextIs(text) {
        GeneralPage.getPageTitle.should('have.text', text);
    }

    urlPathIs(path) {
        cy.url().should('include', path)
    }

}

export const generalSteps = new GeneralSteps();

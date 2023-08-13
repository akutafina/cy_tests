/// <reference types="Cypress"/>

import {GeneralPage, generalPage} from "../pages/general-page";
import {ConfigUtility, configUtility} from "../config-utility";

export class GeneralSteps {

    baseUrl = configUtility.getBaseUrl();

    hasTitle(){
        GeneralPage.getPageTitle.should('be.visible');
    }

    titleTextIs(text) {
        GeneralPage.getPageTitle.should('have.text', text);
    }

    urlPathIs(path){
        cy.url().should('include', path)
        //todo: improve matcher to the full match
    }

}

export const generalSteps = new GeneralSteps();

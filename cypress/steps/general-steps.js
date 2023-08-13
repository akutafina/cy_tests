// import "cypress-xpath";
/// <reference types="Cypress"/>


// import { configUtility } from "../config-utility";
// import VisibilityPage from "../pages/visibility-page";
// import AjaxDataPage from "../pages/ajax-data-page";
import {GeneralPage, generalPage} from "../pages/general-page";
// import {configUtility} from "../config-utility";


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

    // constructor() {
    //     this.baseUrl = configUtility.getBaseUrl();
    //     this.viewPort = configUtility.getViewPort();
    // }

    // baseUrl = configUtility.getBaseUrl();

    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    // visit() {
    //     cy.visit(this.baseUrl)
    // }

//   openContactUs() {
//     cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
//   }
//
//   openHomePage() {
//     cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
//   }
//   openProductsPage() {
//     cy.visit(
//       `http://www.webdriveruniversity.com/Page-Object-Model/products.html#`
//     );
//   }
//   openAccordionPage() {
//     cy.visit(`http://www.webdriveruniversity.com/Accordion/index.html`);
//   }
//   openDropdownPage() {
//     cy.visit(
//       `http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html`
//     );
//   }
//
//   openHiddenElementspage() {
//     cy.visit(`http://www.webdriveruniversity.com/Hidden-Elements/index.html`);
//   }
//
// openDataTablespage(){
//   cy.visit(`http://www.webdriveruniversity.com/Data-Table/index.html`);
// }

  // verifyThatHeaderIsDisplayed() {
  //   return cy.xpath('//a[@id="nav-title"]').should("be.visible");
  // }
  // verifyThatFooterIsDisplayed(screen) {
  //   cy.xpath(`//div[@class='row']//div[@class='col-${screen}-12']/p`)
  //     .should("have.text", accordionTexts.copyright)
  //     .should("be.visible");
  // }
}
//it can store data
export const generalSteps = new GeneralSteps();

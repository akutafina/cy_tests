// import {GeneralSteps} from "../steps/general-steps";

export class GeneralPage {

    //todo: move to basic steps
    static get getPageTitle() {
        // return cy.xpath(`//h2[@name='contactme']`);
        return cy.get('h3')
    }

}

export const generalPage = new GeneralPage();
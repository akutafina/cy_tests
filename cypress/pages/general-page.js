// import {GeneralSteps} from "../steps/general-steps";

export class GeneralPage {

    static get getPageTitle() {
        return cy.get('h3')
    }

}

export const generalPage = new GeneralPage();
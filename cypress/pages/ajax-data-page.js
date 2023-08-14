import {GeneralPage} from "./general-page";

class AjaxDataPage extends GeneralPage {

    static path = '/ajax';

    static get getTriggeringRequestBtn() {
        return cy.get('button').contains('Button Triggering AJAX Request')
    }

    static get getContentMessage() {
        return cy.get('#content')
    }

}

export default AjaxDataPage
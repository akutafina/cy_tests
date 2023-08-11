class AjaxDataPage {

    //todo: move to basic steps
    static get getPageTitle() {
        // return cy.xpath(`//h2[@name='contactme']`);
        return cy.get('h3')
    }

    static get getTriggeringRequestBtn(){
        //todo: ask it looks for the first btn or the first btn whoich contains?
        return  cy.get('button').contains('Button Triggering AJAX Request')
    }

    static get getContentMessage(){
        return  cy.get('#content')
    }

}

export default AjaxDataPage
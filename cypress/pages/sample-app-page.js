class SampleAppPage {

    static get getPageTitle() {
        // return cy.xpath(`//h2[@name='contactme']`);
        return cy.get('h3')
    }
    
    static get getUserNameField(){
        return cy.get('[placeholder="User Name"]')
    }

    static get getContentMessage(){
        return cy.get('.content')
    }

    static get getPasswordField(){
        return cy.get('[placeholder="********"]')
    }

    static get getSubmitButton(){
        //todo: ask it looks for the first btn or the first btn whoich contains?
        return  cy.get('button').contains('Log In')
    }

    static get getLogoutButton(){
        //todo: ask it looks for the first btn or the first btn whoich contains?
        return  cy.get('button').contains('Log Out')
    }

    static get clickLogoutButton(){
        this.getLogoutButton.click()
    }

    static get getLoginStatusMessage(){
        return cy.get('#loginstatus')
        }

}

export default SampleAppPage
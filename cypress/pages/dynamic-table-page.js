import { GeneralPage } from "./general-page";

class DynamicTablePage extends GeneralPage{
    static path = '/dynamictable';

    static get getWarning(){
        return cy.get('.bg-warning')
    }

    static get getWarnValue(){

        cy.get('.bg-warning')
            .invoke('text')
            .invoke('match', /: (?<valInWarn>\d+(\.\d+)?)\%$/)
            .should('be.an', 'array')
            .its('groups.valInWarn')
            .should('be.a', 'string')
            .then((valInWarn) => {
                return parseFloat(valInWarn)
            })
    }

}

export default DynamicTablePage
class DynamicTablePage {

    static get getPageTitle() {
        // return cy.xpath(`//h2[@name='contactme']`);
        return cy.get('h3')
    }

    static get getWarning(){
        return cy.get('.bg-warning')
        //     .then((warn) => {
        //     //     // var tableVal = parseFloat(value);
        //     //     // cy.wrap(num).should('equal', 1) // true
        //     //
        //     return cy.wrap(warn).invoke('text');
        //
        //     //works without wrap?
        // })
    }

    // if to follow the task 1:1 "Compare it with *value* in the yellow label."
    static get getWarnValue(){

        cy.get('.bg-warning')
            .invoke('text')
            //todo: what's diff of ' and ` ?
            .invoke('match', /: (?<valInWarn>\d+(\.\d+)?)\%$/)
            //todo: add processNameinto the equation
            // .invoke('match', /^${processName} CPU: (?<cpuLoadInWarn>\d+(\.\d+)?)\%$/)
            // .invoke('match', new RegExp('^' + processName + ' CPU: (?<cpuLoadInWarn>\d+(\.\d+)?)\%$'))
            // .then((element) => {
            //     const regex = new RegExp('^' + processName + ' CPU: \\d') //' CPU: \d+(\.\d+)?\%' #todo
            //     cy.contains(regex)
            // })
            // .invoke('match', /^(?<cpuLoadInWarn>\d+(\.\d+)?)\%$/)
            .should('be.an', 'array')
            .its('groups.valInWarn')
            .should('be.a', 'string')
            .then((valInWarn) => {
                // cy.get('@cpuValInTable').should('be.eq', parseFloat(cpuValInWarn))
                return parseFloat(valInWarn)
            })

    }

}

export default DynamicTablePage
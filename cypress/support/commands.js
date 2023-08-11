Cypress.Commands.add('getWaiAriaTableCell', (itemName, columnName) => {

    cy.get('[role="table"]').contains('[role="columnheader"]', columnName)
        .invoke('index')
        .should('be.a', 'number')
        .then((columnIndex) => {
            cy.contains('[role="row"]', itemName)
                .find('[role="cell"]')
                .eq(columnIndex)
                .then((cell) => {
                    return cell;
                })
        })
});

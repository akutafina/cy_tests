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

Cypress.Commands.add('waitForResponse', (requestAlias, timeout) => {
    cy.wait(requestAlias,{ timeout : timeout}).its('response.statusCode').should('be.oneOf', [200, 304])
});

Cypress.Commands.add('isOutsideViewport', { prevSubject: true }, (subject) => {
    const rect = subject[0].getBoundingClientRect();

    expect(rect.top).not.to.be.within(0, Cypress.config().viewportHeight);
    expect(rect.right).not.to.be.within(0,Cypress.config().viewportWidth);
    expect(rect.bottom).not.to.be.within(0, Cypress.config().viewportHeight);
    expect(rect.left).not.to.be.within(0, Cypress.config().viewportWidth);

    return subject;
});
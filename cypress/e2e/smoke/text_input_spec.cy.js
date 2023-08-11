describe('Text Input Page spec', () => {
  beforeEach(() => {
    //todo: make a mainURL config variable and pass it from the console
    cy.visit('/textinput')
  })

  //todo: check navi panel is there

  it('displays texts input intro text by default', () => {

    //todo: should I check the text here? too many unknowns
    cy.contains('Text Input').should('have.length.gt', 0)
    cy.get('p').invoke('text').should('have.length.gt', 0)
    cy.contains('Scenario').should('have.length.gt', 0)
    cy.get('h4').invoke('text').should('have.length.gt', 0)
    cy.contains('Playground').should('have.length.gt', 0)

    cy.contains('Set New Button Name').should('have.length.gt', 0)

  })

  it('changes the button\'s name when entering new name and clicking on the button', () => {
    //todo: ask whether TC naming is ok for cypress? the log is small
    //todo: add a list of positive names and make a scenario outline
    //todo: add a negative TC
    const newName = 'New Button\'s Name'

    cy.get('[placeholder="MyButton"]').type(`${newName}`)
    // would check for accessibility but pressing Enter reloads the page

    cy.get('[type="button"]').should('have.text', 'Button That Should Change it\'s Name Based on Input Value')
    cy.get('[type="button"]').contains('Button That Should Change it\'s Name Based on Input Value').click()
    //todo: ask whether get('[type="button"]') is ok? there are no data-attr

    cy.get('[type="button"]').should("have.text", `${newName}`);
  })


  it('loads page at its initial state after button name changes and reload', () => {
    //todo: change the TC naming
    //todo: add a list of positive names and make a scenario outline
    //todo: add a negative TC
    const newName = 'Updated Button\'s Name'

    cy.get('[placeholder="MyButton"]').type(`${newName}`)

    cy.get('[type="button"]').should('have.text', 'Button That Should Change it\'s Name Based on Input Value')
    cy.get('[type="button"]').contains('Button That Should Change it\'s Name Based on Input Value').click()
    //todo: place all the text vars into the vars/conts or files (?)
    //todo: read get vs contains
    //todo: whether get('[type="button"]') is ok? there are no data-attr

    cy.get('[type="button"]').should("have.text", `${newName}`);

    cy.reload()

    cy.get('[type="button"]').should('have.text', 'Button That Should Change it\'s Name Based on Input Value')
  //todo: can I reuse the code from above?
  })

  //todo: can you reuse scenarios?
  //add tags as smoke and full integration tests and config in the config and console params
  it('allows to modify the button name twice without the page reload', () => {
    //todo: change the TC naming
    //todo: add a list of positive names and make a scenario outline
    //todo: add a negative TC
    const newName1 = 'Updated Button\'s Name'

    const newName2 = 'Updated Again Button\'s Name'

    cy.get('[placeholder="MyButton"]').type(`${newName1}`)

    cy.get('[type="button"]').should('have.text', 'Button That Should Change it\'s Name Based on Input Value')
    cy.get('[type="button"]').contains('Button That Should Change it\'s Name Based on Input Value').click()
    //todo: place all the text vars into the vars/conts or files (?)
    //todo: read get vs contains
    //todo: whether get('[type="button"]') is ok? there are no data-attr

    cy.get('[type="button"]').should("have.text", `${newName1}`);

    cy.get('[placeholder="MyButton"]').clear().type(`${newName2}`)

    cy.get('[type="button"]').should('have.text', `${newName1}`)
    cy.get('[type="button"]').contains(`${newName1}`).click()
    // todo: following would be correct or a bad practice to pur action after should?
    //  cy.get('[type="button"]').should('have.text', `${newName1}`).click()

    //todo: place all the text vars into the vars/conts or files (?)
    //todo: read get vs contains
    //todo: whether get('[type="button"]') is ok? there are no data-attr

    cy.get('[type="button"]').should("have.text", `${newName2}`);

  })
})


describe('Text Input Page spec', () => {
  beforeEach(() => {

    //todo: make a mainURL config variable and pass it from the console
    cy.visit('/progressbar')
  })

  it('displays texts input intro text by default', () => {

    cy.get('[type="button"]').contains('Start').click()

    //todo: change [id="progressBar"] to a normal one
    //todo: change 75% to a constant
    cy.get('[id="progressBar"]',{timeout: 30000}).should(($div) => {
      const n = parseFloat($div.text())
      expect(n).to.be.gte(75)
      //todo: is there a discretion of retries?
    })

    cy.get('[type="button"]').contains('Stop').click()
    cy.get('[id="progressBar"]').should('have.text', '75%')


    cy.get('[id="result"]').contains('Result: 0, duration: ')
    //todo: change to a specific text
    // cy.get('[id="result"]').should('have.text', 'Result: 0, duration: ')
    // cy.get('[id="result"]').should('have.text', 'Result: 0')
    //todo: check duration val
  })
})
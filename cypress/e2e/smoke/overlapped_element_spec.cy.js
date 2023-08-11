describe('Overlapped Element Specs', () => {

  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('/overlapped')
  })

//todo: change naming
  it('passes', () => {
    // cy.get('#id').type('TestId0')

    cy.get('#name').type('Test Name')

    // cy.get('#id').invoke('val').should('eq','TestId0')

    cy.get('#name').invoke('val').should('eq','Test Name')

    //todo add the name and id to var
    
    //todo: ask or better again ask by id?
  })
})
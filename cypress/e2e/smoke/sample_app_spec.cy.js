const loginWithUI = (name, password) => {
    cy.visit('/sampleapp')
    //CYPRESS_password=pwd npx cypress open|run
    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?
    cy.get('[placeholder="User Name"]').type(name)
    cy.get('[placeholder="********"]').type(password)
    cy.get('button1').contains('Log In').click()
    //todo: ask it looks for the first btn or the first btn whoich contains?
    cy.url().should('contain', '/sampleapp')
    cy.get('#loginstatus').should('have.text', 'Welcome, ' + name + '!')
}

const logoutWithUI = () => {
    //todo: make a mainURL config variable and pass it from the console
    cy.get('button').contains('Log Out').click()
    //todo: ask it looks for the first btn or the first btn whoich contains?
    cy.url().should('contain', '/sampleapp')
    cy.get('#loginstatus').should('have.text', 'User logged out.')

    cy.get('[placeholder="User Name"]').should('be.empty')
    cy.get('[placeholder="********"]').should('be.empty')

}


//todo: add login with api

describe('Login App Spec', () => {

const validUserCredentialsData = require('../fixtures/valid-user-credentials-data.json')

    //todo: add smoke label
    validUserCredentialsData.forEach((credentials) => {
      it('should stay on the same page and show welcome message if login with valid credentials: "' + credentials.name +'", "' + credentials.password +'"', () => {
        // cy.session(['loginWithUI', name], () => {
        loginWithUI(credentials.name,credentials.password)

          // cy.session(['loginWithUI', name]).url().should('contain', '/sampleapp')
          // cy.get('#loginstatus').should('have.text', 'Welcome, ' + credentials.name + '!')
        logoutWithUI()
        // })
      })
})


})
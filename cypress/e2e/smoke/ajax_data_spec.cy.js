
describe('AJAX Data Spec', () => {
  beforeEach(() => {
    cy.visit('/ajax')
  })

  //todo: Record the following steps. check the videos are there
  //todo: increase the timeout for 15 sec

  it('shows an element after processing of an AJAX request', () => {
      // cy.intercept('/ajaxdata*').as('getAjaxData')

      cy.intercept(
          {
            method: 'GET', // Route all GET requests
            url: '/ajaxdata', // that have a URL that matches '/users/*'
          }
          ,
          ['Data loaded with AJAX get request.'] // and force the response to be: []
      ).as('getAjaxData') // and assign an alias

      cy.contains('Button Triggering AJAX Request').click()

    //don't get the task
    //mean to add mock?
    //Scenario
    //     Record the following steps. - Record what?
    //     Press the button below and wait for data to appear (15 seconds),
    // - should i do additional timeout? or rewrite the timeout for the ajax requests ?
    // click on text of the loaded label. - click for what?
    //     Then execute your test to make sure it waits for label text to appear.
    // then execute the test - wat?

      // cy.wait('@getAjaxData',{ timeout : 15000}).then((interception) => {
      //     // assert.isNotNull(interception.response.body, 'Data loaded with AJAX get request.')
      //     assert.isNotNull(interception.response, 'Data loaded with AJAX get request.')
      // })
      //todo: why this takes longer?

      cy.wait('@getAjaxData',{ timeout : 15000}).its('response.statusCode').should('be.oneOf', [200, 304])

      cy.contains('Data loaded with AJAX get request.')
  })
})
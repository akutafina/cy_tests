describe('Buttons Visibility Specs', () => {

  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('/visibility')
  })

  //item coordinates: https://glebbahmutov.com/blog/images/visible-in-the-viewport/element-box-diagram.png
  //https://glebbahmutov.com/blog/visible-in-the-viewport/

  it('#todo: modify', () => {

    //https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Visibility

    cy.get('button').contains('Hide').click()

    cy.get('button').contains('Removed').should('not.exist', 'Removed btn should not exist in DOM')
    //todo:
    // assertexpected undefined not to exist in the DOM
    //change the ssertion messages
    //because... 
    // assertexpected <button#zeroWidthButton.btn.btn-warning.zerowidth> not to be visible

    cy.get('button').contains('Zero Width').should('not.be.visible')

    cy.get('button').contains('Overlapped').should('be.visible')
    cy.get('#hidingLayer').should('be.visible')

    const getRectangle = ($el) => $el[0].getBoundingClientRect()

    const isFullyOverlappedBy = (element1, element2) => {

      const rect1 = getRectangle(element1)
      const rect2 = getRectangle(element2)

      expect(rect1.top | 0).to.be.gte(rect2.top | 0)
      expect(rect1.bottom | 0).to.be.lte(rect2.bottom | 0)
      expect(rect1.left | 0).to.be.gte(rect2.left | 0)
      expect(rect1.right | 0).to.be.lte(rect2.right | 0)

      return true
    }

    cy.get('button').contains('Overlapped')
        .then((rectBtn) => {
          cy.get('#hidingLayer')
              .then((rectOverlap) => {
                      expect(isFullyOverlappedBy(rectBtn, rectOverlap), 'rectBtn and rectOverlap are overlapping?').to.be.true
              })
        })

    //todo: run your tests for the set of viewports: desktop mobile horisontal vertical
    

    cy.get('button').contains('Opacity 0').should('not.be.visible')

    cy.get('button').contains('Visibility Hidden').should('not.be.visible')

    cy.get('button').contains('Display None').should('not.be.visible')

    //element todo: https://docs.cypress.io/api/cypress-api/custom-commands#Arguments
    //taken from https://stackoverflow.com/questions/58713418/verify-element-is-within-viewport-with-cypress
    Cypress.Commands.add('isOutsideViewport', { prevSubject: true }, (subject) => {
      const rect = subject[0].getBoundingClientRect();
      
      //todo: save default selectors proiroty https://docs.cypress.io/guides/core-concepts/cypress-app#Default-Selector-Priority
      // const window = cy.window()
      //todo: replace with a viewport values from the config
      //because now they are 0!!!!!!
      //is that global window?
      expect(rect.top).not.to.be.within(0, window.innerHeight);
      expect(rect.right).not.to.be.within(0, window.innerWidth);
      expect(rect.bottom).not.to.be.within(0, window.innerHeight);
      expect(rect.left).not.to.be.within(0, window.innerWidth);

      return subject;
    });

    cy.get('button:contains("Offscreen")').isOutsideViewport()

    //todo config viewport in config file
    //todo: add  mobile layout
    //https://on.cypress.io/viewport
    //todo: save themn in a file
    //todo: can stroe in csv file?

    // const top = cy.window().its('top')
    // const width = cy.window().its('bottom')

    cy.get('button:contains("Offscreen")').isOutsideViewport()
    // todo: ask if not BS?:
    //     .offscreen {
    //   position: absolute;
    //   top: -9999px;
    //   left: -9999px;
    // }
    //BUT Its CSS property is position: fixed and it's offscreen or covered up. by https://docs.cypress.io/guides/core-concepts/interacting-with-elements#An-element-is-considered-hidden-if
    // is absolute the same as fixed?
    // be.visible won't work

  })
})
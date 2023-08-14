/// <reference types="Cypress" />

import {textInputSteps} from "../../steps/text-input-steps";

describe('Text Input Page (browser ' + Cypress.browser.name + ', viewport ' + Cypress.config('viewportWidth') + 'x' + Cypress.config('viewportHeight') + ')', () => {

    beforeEach(() => {
        textInputSteps.visit();
    })

    it(`verifies the header`, () => {
        textInputSteps.titleTextIs('Text Input');
    })

    it('changes the button\'s name after filling in \'My button\' field and clicking on the button', () => {
        const newName = 'New Button\'s Name'
        textInputSteps.fillInInputField(newName);
        textInputSteps.updatingBtnTextIs('Button That Should Change it\'s Name Based on Input Value');
        textInputSteps.clickUpdatingBtn();
        textInputSteps.updatingBtnTextIs(newName);
    })

    it('reloads page at its initial state after button name changes', () => {
        const newName = 'Updated Button\'s Name'

        textInputSteps.fillInInputField(newName);
        textInputSteps.updatingBtnTextIs('Button That Should Change it\'s Name Based on Input Value');
        textInputSteps.clickUpdatingBtn();
        textInputSteps.updatingBtnTextIs(newName);
        cy.reload()
        textInputSteps.updatingBtnTextIs('Button That Should Change it\'s Name Based on Input Value');

    })

    //todo:
    it('allows to modify the button name twice without the page reload', () => {
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
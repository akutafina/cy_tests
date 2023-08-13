import { GeneralPage } from "./general-page";

class VisibilityPage extends GeneralPage{

    // static get getPageTitle() {
    //     return cy.get('h3')
    // }

    static path = '/visibility';

    static get getHideBtn() {
        return cy.get('#hideButton')
    }

    static get getRemovedBtn() {
        return cy.get('#removedButton')
    }

    static get getZeroWidthBtn() {
        return cy.get('#zeroWidthButton')
    }

    static get getOverlapedBtn() {
        return cy.get('#overlappedButton')
    }

    static get getOpacityZeroBtn() {
        return cy.get('#transparentButton')
    }

    static get getHidingLayer() {
        return cy.get('#hidingLayer')
    }

    static get getVisibilityHiddenBtn() {
        return cy.get('#invisibleButton')
    }
    static get getDisplayNoneBtn() {
        return cy.get('#notdisplayedButton')
    }

    static get getOffscreenBtn() {
        return cy.get('#offscreenButton')
    }

}

export default VisibilityPage
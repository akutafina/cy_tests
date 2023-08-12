class VisibilityPage {

    static get getPageTitle() {
        // return cy.xpath(`//h2[@name='contactme']`);
        return cy.get('h3')
    }

    static get getHideBtn() {
        return cy.get('button:contains("Hide")')
    }

    static get getRemovedBtn() {
        return cy.get('button:contains("Removed")')
    }

    static get getZeroWidthBtn() {
        return cy.get('button:contains("Zero Width")')
    }

    static get getOverlapedBtn() {
        return cy.get('button:contains("Overlapped")')
    }

    static get getOpacityZeroBtn() {
        return cy.get('button:contains("Opacity 0")')
    }

    static get getHidingLayer() {
        return cy.get('#hidingLayer')
    }

    static get getVisibilityHiddenBtn() {
        return cy.get('button:contains("Visibility Hidden")')
    }
    static get getDisplayNoneBtn() {
        return cy.get('button:contains("Display None")')
    }

    static get getOffscreenBtn() {
        return cy.get('button:contains("Offscreen")')
    }



}

export default VisibilityPage
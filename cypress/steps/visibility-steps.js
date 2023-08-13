import VisibilityPage from "../pages/visibility-page";
import { GeneralSteps, generalSteps } from "./general-steps";
import {ConfigUtility} from "../config-utility";
import AjaxDataPage from "../pages/ajax-data-page";

//todo: put visit in general steps
// put url path as a constant
//
//
// import { configUtility } from "../config-utility";
// const baseUrl = configUtility.getBaseUrl();

//todo: move to basic class
const isFullOverlap = (element1, element2) => {

    const getRectangle = ($el) => $el[0].getBoundingClientRect()

    const rect1 = getRectangle(element1)
    const rect2 = getRectangle(element2)

    expect(rect1.top | 0).to.be.gte(rect2.top | 0)
    expect(rect1.bottom | 0).to.be.lte(rect2.bottom | 0)
    expect(rect1.left | 0).to.be.gte(rect2.left | 0)
    expect(rect1.right | 0).to.be.lte(rect2.right | 0)

    return true
}

// const baseUrl = new ConfigUtility().getBaseUrl();
// const path = '/visibility';

export class VisibilitySteps extends GeneralSteps
{

    //todo: should be moved out of the login func, because log out doesn't have it?
    //todo: make a mainURL config variable and pass it from the console
    //todo: should be pwd passed from the the Command Log? https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
    // challenge: I want to pass a couple of logins; store "" pwd in congig.js?

    visit() {
        // cy.viewport('iphone-x', 'landscape');
        cy.visit(this.baseUrl + VisibilityPage.path)
        this.isOnVisibilityPage()
    }

    //todo: move to base steps
    isOnVisibilityPage(){
        this.urlPathIs(VisibilityPage.path)
        // cy.url().should('include', path)
        //todo: improve matcher to the full match
    }
    //
    // titleTextIs(text) {
    //     VisibilityPage.getPageTitle.should('have.text', text);
    // }

    clickHideBtn(){
        VisibilityPage.getHideBtn.click()
    }

    removedBtnIsNotInDom(){
        VisibilityPage.getRemovedBtn.should('not.exist', 'Removed btn should not exist in DOM')
    }

    zeroWidthBtnIsInvisible(){
        VisibilityPage.getZeroWidthBtn.should('not.be.visible')
    }

    overlappedBtnIsOverlapped(){
        VisibilityPage.getOverlapedBtn.should('be.visible')
        VisibilityPage.getHidingLayer.should('be.visible')

        VisibilityPage.getOverlapedBtn
            .then((rectBtn) => {
                VisibilityPage.getHidingLayer
                    .then((rectOverlap) => {
                        expect(isFullOverlap(rectBtn, rectOverlap), 'rectBtn and rectOverlap are overlapping?').to.be.true
                    })
            })

        //todo: run your tests for the set of viewports: desktop mobile horisontal vertical
    }

    opacityZeroBtnIsInvisible(){
        VisibilityPage.getOpacityZeroBtn.should('not.be.visible')
        // VisibilityPage.getOpacityZeroBtn.invoke('css', 'opacity', '1').should('be.visible');
    }

    visibilityHiddenBtnIsInvisible(){
        VisibilityPage.getVisibilityHiddenBtn.should('not.be.visible')
        // VisibilityPage.getVisibilityHiddenBtn.invoke('css', 'visibility', 'visible').should('be.visible');

    }

    displayNoneBtnIsInvisible(){
        VisibilityPage.getDisplayNoneBtn.should('not.be.visible')
    }

    offscreenBtnIsOutsideViewport(){
        VisibilityPage.getOffscreenBtn.isOutsideViewport()
        //todo: add  mobile layout
    }



}

export const visibilitySteps = new VisibilitySteps();
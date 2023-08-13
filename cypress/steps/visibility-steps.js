import VisibilityPage from "../pages/visibility-page";
import { GeneralSteps, generalSteps } from "./general-steps";

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

export class VisibilitySteps extends GeneralSteps
{
    visit() {
        cy.visit(this.baseUrl + VisibilityPage.path)
        this.isOnVisibilityPage()
    }

    isOnVisibilityPage(){
        this.urlPathIs(VisibilityPage.path)
    }

    clickHideBtn(){
        VisibilityPage.getHideBtn.click()
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
    }

    opacityZeroBtnIsInvisible(){
        VisibilityPage.getOpacityZeroBtn.should('not.be.visible')
    }

    visibilityHiddenBtnIsInvisible(){
        VisibilityPage.getVisibilityHiddenBtn.should('not.be.visible')
    }

    displayNoneBtnIsInvisible(){
        VisibilityPage.getDisplayNoneBtn.should('not.be.visible')
    }

    offscreenBtnIsOutsideViewport(){
        VisibilityPage.getOffscreenBtn.isOutsideViewport()
    }

}

export const visibilitySteps = new VisibilitySteps();
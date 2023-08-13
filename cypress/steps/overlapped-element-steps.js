import OverlappedElementPage from "../pages/overlapped-element-page";
import { GeneralSteps, generalSteps } from "./general-steps";

export class OverlappedElementSteps extends GeneralSteps
{
   visit() {
        cy.visit(this.baseUrl + OverlappedElementPage.path)
        this.isOnOverlappedElementPage()
    }

    isOnOverlappedElementPage(){
        this.urlPathIs(OverlappedElementPage.path)
    }

    scrollAndFillInName(name){
        OverlappedElementPage.getNameField.type(name)
    }

    nameFieldValueIs(name){
        OverlappedElementPage.getNameField.invoke('val').should('eq', name)
    }
}

export const overlappedElementSteps = new OverlappedElementSteps();
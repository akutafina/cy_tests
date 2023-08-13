
// https://docs.cypress.io/api/commands/viewport#Usage
// https://gs.statcounter.com/screen-resolution-stats/desktop/europe

export class ConfigUtility
{
    // baseUrl = '';
    // constructor() {
    //         let envi = Cypress.env('ENV');
    //
    //         if (envi == 'prod') this.baseUrl = "http://uitestingplayground.com";
    //         else if (envi == 'local') this.baseUrl = "http://localhost:3000";
    //         else this.baseUrl = "http://localhost:3000";
    //
    //     // // cy.viewport('iphone-6')
    //     // this.baseUrl = this.getBaseUrl();
    //     // // this.viewPort = configUtility.getViewPort();
    // }
    //
    // getBaseUrl(){
    //     // let envi = Cypress.env('ENV');
    //     //
    //     // if (envi == 'prod') return "http://uitestingplayground.com";
    //     // else if (envi == 'local') return "http://localhost:3000";
    //     // else return "http://localhost:3000";
    //     return this.baseUrl;
    // }

     getBaseUrl(){
        let envi = Cypress.env('ENV');

        if (envi == 'prod') return "http://uitestingplayground.com";
        else if (envi == 'local') return "http://localhost:3000";
        else return "http://localhost:3000";

     }

//https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
};

export const configUtility = new ConfigUtility();
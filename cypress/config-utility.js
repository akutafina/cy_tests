export class ConfigUtility
{
     getBaseUrl(){
        let envi = Cypress.env('ENV');

        if (envi == 'prod') return "http://uitestingplayground.com";
        else if (envi == 'local') return "http://localhost:3000";
        else return "http://localhost:3000";

     }
};

export const configUtility = new ConfigUtility();
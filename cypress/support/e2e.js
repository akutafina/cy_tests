
import './commands'

import addContext from "mochawesome/addContext";
Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        //todo: change &quot to regexp
        const screenshot =`screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title.replaceAll("\"", '' )} (failed) (attempt 2).png`;
        addContext({ test }, screenshot);
    }
});

/**app :
 *      1. create or hook to app
 *      2. create starting module
 *      3. initalize modules
*/

import { startModule } from './js/KnightsModule'

if (!window.app) {

    const app = {};
    app.startModule = new startModule();

    //initialize modules
    app.startModule.init();
}
else {

    app.startModule = new startModule();

    //intialize modules
    app.startModule.init();
}
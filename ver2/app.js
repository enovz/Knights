
/**app :
 *      1. create or hook to app
 *      2. create starting module
 *      3. initalize modules
*/

import { KnightsModule } from './js/KnightsModule'

if (!window.app) {

    const app = {};
    app.startModule = new KnightsModule();
    
    //initialize modules
    app.startModule.init();
}
else {

    app.startModule = new startModule();

    //intialize modules
    app.startModule.init();
}
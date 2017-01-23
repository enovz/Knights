
/**app :
 * 
 *      1. initialize app
 *      2. create starting module
 *      3. initalize module
*/

import { KnightsModule } from './js/KnightsModule'

if (!window.app) {

    const app = {};
    app.knightsModule = new KnightsModule();
    app.knightsModule.init();
}
else {

    app.knightsModule = new KnightsModule();
    app.knightsModule.init();
}
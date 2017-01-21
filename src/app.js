
/**app */

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
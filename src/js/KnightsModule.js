/**Knights Module:
 * 
 * 1.add events to DOM
 * 2.remove events from DOM
 */

/**dependencies */
import { clickHandler } from './clickHandler'

/**Knights Module */
export function KnightsModule() {

    this._version = "0.1.1";
    this._moduleName = "knights";
    this._desctiption = "paper knights generator";
    this._templateSource = "./knight.html";

}
KnightsModule.prototype.init = function () {

    //bind events
    document.addEventListener('click', clickHandler.bind(this));
}
KnightsModule.prototype.close = function () {

    //unbind events
    document.removeEventListener('click', clickHandler);
}

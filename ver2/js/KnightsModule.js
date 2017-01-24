/**Knights Module:
 * 
 * 1.add events to DOM
 * 2.remove events from DOM
 */

/**dependencies */
import{ api } from './api'

/**Knights Module */
export function KnightsModule() {

    this._version = "3.0.0";
    this._moduleName = "knights";
    this._desctiption = "paper knights generator";
    this._api = api;
}
KnightsModule.prototype.init = function () {

    //bind _api
    this.api = {};

    for(let prop in this._api){

        this.api[prop] = this._api[prop].bind(this);
    }


    //bind events
    document.addEventListener('click', this.api.clickAnyWhere, false);

}
KnightsModule.prototype.close = function () {

    //unbind events
    document.removeEventListener('click', this.api.clickAnyWhere, false);
}
KnightsModule.prototype.restart = function () {

    this.close();
    setTimeout(function () {

        location.reload();
        this.init.bind(this);

    }.bind(this), 20000); // figure out timer

}

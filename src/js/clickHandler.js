
/**clickHandler:
 * 
 * 1. get view
 * 2. create new knight
 * 3. render new knight to view
 * 4. print view
 * 5. cool down
 * 5. reset view 
 */

/**dependencies */
import { Knight } from './Knight'

/**clickHandler */
export function clickHandler() {

    let view = getView();
    let newKnight = new Knight();

    renderKnight(view, newKnight);
    printKnight();
    resetView(view);
    coolDown();
}

function getView() {

    /**
     * 1. set logo div to hidden
     * 2. set knight div to be visible
     * 3. get each element from knight div (jQuerry)
     * 4. return view object composed of elements
     */
    let $knight = $('#knight');
    let $logo = $('#logo');
    let helmet = $knight.find("#helmet");
    //so on

    /*let view = {
        armor:[] -> array of armor elements
        name: string ->
        stats:
        traits:
        biography: 
    }*/

}
function renderKnight(view, knight) {
    /**
     * 1. renderArmor
     * 2. renderName
     * 3. renderStats
     * 4. renderTraits
     * 5. renderBiography
     */

    /*knight.armor.forEach(armorPart => {
        //console.log(armorPart);
        document.getElementById(armorPart.Id).src = armorPart.source;
    });*/
}
function printKnight() {

    /**
     * 1.print page
     */
}
function resetView(view) {

    /**
     * 1. set knight div to be hidden
     * 2. set logo div to be visible
     */
    if ($(view.knight).is(":visible")) {

        view.knight.addClass('hidden');
        view.logo.addClass('visable');
    }

}
function coolDown() {
    /**
     * 1. run timeout func 
     */
}
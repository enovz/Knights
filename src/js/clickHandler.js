
/**clickHandler:
 * 
 * 1. get view
 * 2. create new knight
 * 3. render new knight to view
 * 4. print view
 * 5. cool down
 * 5. toggle visibility 
 */

/**dependencies */
import { Knight } from './Knight'
import { KnightsModule } from './KnightsModule'

/**clickHandler */
export function clickHandler() {

    //test
    let view = getView();
    let newKnight = new Knight();

    var loader = $('#loading-banner');
    

    //test 
    console.log(view);
    console.log(newKnight);

    /*renderKnight(view, newKnight);
    printKnight();
    resetView(view.logo, view.knight);*/
    coolDown();

   loader.css('display','block');

}

function getView() {

    /**
     * 1. get each element from knight div (jQuerry)
     * 2. return view object composed of elements
     */

    //get logo element
    let $logo = $('#logo');
    //get knight element
    let $knight = $('#knight');

    //toggle visable/hidden
    //toggleVisibility($logo, $knight);

    //get knight elements
    let armor = $knight.find('#armor');
    let name = $knight.find('#name');
    let stats = $knight.find('#stats');
    let traits = $knight.find('#traits');
    let biography = $knight.find('#biography');


    //create view
    let view = {
        logo: $logo,
        knight: $knight,
        armor: armor,
        name: name,
        stats: stats,
        traits: traits,
        biography: biography

    }

    //return view
    return view;

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
function toggleVisibility(logo, knight) {

    /**
     * 1. set knight div to be hidden
     * 2. set logo div to be visible
     */
    if (!$(logo).is(":visible")) {

        knight.addClass('hidden');
        logo.addClass('visable');
    }
    else{
        knight.addClass('visable');
        logo.addClass('hidden');
    }

}
function coolDown() {
    /**
     * 1. run timeout func 
     */
    
    console.log("coolDown!!!!")
    if (!window.app) {

    const app = {};
    app.knightsModule = new KnightsModule();
    app.knightsModule.close();
    }
    else {

    app.knightsModule = new KnightsModule();
    app.knightsModule.close();
    }
    
    setTimeout(function(){ location.reload(); }, 3000);
}


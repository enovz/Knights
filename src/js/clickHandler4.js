
/**clickHandler:
 *      1. start loading animation
 *      2. printKnight
 * 
 * 
 * 1.loading animation:
 *      1.1. get view
 *      1.3. animation.start()
 *      1.3. animation.stop()
 * 
 * 
 * 2.printKnight:
 *      2.1. get view
 *      2.2. create new knight
 *      2.3. render new knight to view
 *      2.4. print view    
 *      2.5. cool down
 *      2.6. toggle animation 
 */

/**dependencies */
import { Knight } from './Knight'
import { printKnight } from './printKnight'


/**clickHandler */
export function clickHandler() {

    //test
    let view = getView();
    let newKnight = new Knight();


    renderKnight(view, newKnight);
    printKnight(this._templateSource);
    //toggleAnimation(view.logo, view.knight);

}

function getView() {

    /**
     * 1. get each element from knight div (jQuerry)
     * 2. return view object composed of elements
     */

    //var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" );

    //get logo element
    let $logo = $('#logo');
    //get knight element
    let $knight = $('#knight');

    //toggle visable/hidden
    //toggleVisibility($logo, $knight);

    //get knight elements
    let $armor = $knight.find('#armor');
    let $name = $knight.find('#name');
    let $stats = $knight.find('#stats');
    let $traits = $knight.find('#traits');
    let $biography = $knight.find('#biography');

    //create view
    let view = {
        logo: $logo,
        knight: $knight,
        armor: $armor,
        name: $name,
        /*stats: {
            stat_1: $stats.find('#stat_1'),
            stat_2: $stats.find('#stat_2'),
            stat_3: $stats.find('#stat_3'),
            stat_4: $stats.find('#stat_4'),
            stat_5: $stats.find('#stat_5'),
        },
        traits: {
            trait_1: $traits.find('#trait_1'),
            trait_2: $traits.find('#trait_2'),
            trait_3: $traits.find('#trait_3'),
        },*/
        traits:$traits,
        stats:$stats,
        biography: $biography

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

    let armor = $("#armor");
    //render armor
    knight.armor.forEach(part => {

        //document.getElementById(part.Id).src = part.source;
        armor.children[part.Id].src = part.source;
    });

    //name
    view.name.val(knight.name);

    //stats
    let i = 0;
    view.stats.forEach(stat => {

        stat.val(knight.stats[i].value);
        i++;
    });

    //traits
    let j = 0;
    view.traits.forEach(trait => {

        trait.val(knight.traits[i].value);
        j++;
    });

    //biography
    view.biography.value(knight.biography);
}
function toggleAnimation(logo, knight) {

    /**
     * 1. set knight div to be hidden
     * 2. set logo div to be visible
     */
    if (!$(logo).is(":visible")) {

        knight.addClass('hidden');
        logo.addClass('visable');
    }
    else {
        knight.addClass('visable');
        logo.addClass('hidden');
    }

}
function coolDown() {
    /**
     * 1. run timeout func 
     */
}
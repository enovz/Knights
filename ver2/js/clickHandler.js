
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
import { Knight } from './helpers/Knight'


/**clickHandler */
export function clickHandler() {

    //setup
    let view = getView();
    let newKnight = new Knight();

    //handle click
    /*renderKnight(view, newKnight);
    printKnight();
    view.logo.css('display', 'none');
    view.loader.css('display', 'block');

    this.restart();*/

    //test
    renderKnight(view, newKnight);
    printKnight();
    //$('div.main').attr('style', 'visibility: visible');
    view.logo.css('display', 'none');
    view.loader.css('display', 'none');

    //this.restart();
}

function getView() {


    //logo and animation
    let logo = $('#logo');
    let loader = $('#loading-banner');

    let vKnight = document.getElementById('knight');
    let vArmor = document.getElementById('armor');
    let vName = document.getElementById('name');
    let vStats = document.getElementById('stats');
    let vTraits = document.getElementById('traits');
    let vSkills = document.getElementById('skills');
    let vBiography = document.getElementById('biography');


    //create view
    let view = {
        logo: logo,
        loader: loader,
        paperKnight: {
            knight: vKnight,
            armor: vArmor,
            name: vName,
            stats: vStats,
            traits: vTraits,
            skills: vSkills
        }
        /*,
        biography: vBiography*/
    }

    return view;
};
function renderKnight(view, knight) {




    //name
    view.paperKnight.name.value = knight.name;

    //stats
    knight.stats.forEach(stat => {

        view.paperKnight.stats.children[stat.id].value = stat.value;
    });

    //traits
    for (let i = 0; i < view.paperKnight.traits.children.length; i++) {

        view.paperKnight.traits.children[i].value = knight.traits[i];
    }

    //skills
    for (let i = 0; i < view.paperKnight.skills.children.length; i++) {

        view.paperKnight.skills.children[i].value = knight.skills[i];
    }

    //render armor
    knight.armor.forEach(part => {

        view.paperKnight.armor.children[part.id].src = part.source;
    });
    //biography
    //view.paperKnight.biography.value = knight.biography;

}
function printKnight() {

    let mode = 'iframe'; //popup
    let close = mode == "popup";
    let options = { mode: mode, popClose: close };
    $('div.main').attr('style', 'visibility: visible');
    $("div.main").printArea(options);
    $('div.main').attr('style', 'visibility: hidden');
}


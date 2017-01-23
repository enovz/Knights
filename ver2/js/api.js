
/**knights api:
 * 
 *      1.clickAnyWhere:
 *          1. start loading animation
 *          2. render knight
 *          3. printKnight
 *          3. restart aplication
 */

/**dependencies */
import { Knight } from './domain/Knight'

export const api = {

    clickAnyWhere : clickAnyWhere

}

/**clickAnyWhere */
function clickAnyWhere() {

    //setup
    let view = getView();
    let newKnight = new Knight();

    //handle click
    renderKnight(view, newKnight);
    printKnight();
    view.logo.css('display', 'none');
    view.loader.css('display', 'block');

    this.restart();

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


    //render armor
    knight.armor.forEach(part => {

        view.paperKnight.armor.children[part.id].src = part.source;
    });

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

    //biography
    //view.paperKnight.biography.value = knight.biography;

}
function printKnight() {

    //woking example
    /*let mode = 'iframe'; //popup
    let close = mode == "popup";
    let options = { mode: mode, popClose: close };
    $('div.paperKnight').attr('style', 'visibility: visible');
    $("div.paperKnight").printArea(options);
    $('div.paperKnight').attr('style', 'visibility: hidden');*/


    //testing
    let mode = 'popup'; //popup
    let close = mode == "popup";
    let options = { mode: mode, popClose: false };
    $('div.paperKnight').attr('style', 'visibility: visible');
    $("div.paperKnight").printArea(options);
    $('div.paperKnight').attr('style', 'visibility: hidden');
}


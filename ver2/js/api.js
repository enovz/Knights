
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
import { layers } from './data/data'

export const api = {

    clickAnyWhere: clickAnyWhere

}

/**clickAnyWhere */
function clickAnyWhere() {

    //setup
    let layersNum = renderLayers();
    let view = getView(layersNum);
    let newKnight = new Knight();

    //handle click
    renderKnight(view, newKnight);
    printKnight();
    view.logo.css('display', 'none');
    view.loader.css('display', 'block');

    this.restart();

}
function getView(layersNum) {


    //logo and animation
    let logo = $('#logo');
    let loader = $('#loading-banner');

    let vKnight = document.getElementById('paperKnight');
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
            self: vKnight,
            layers: layersNum,
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
/**test */
function renderLayers() {

    //setup
    let paperKnight = document.getElementById('paperKnight');
    let imgPath = './img'
    let i = 0;

    layers.forEach(layer => {

        // ./img/outline/
        let name = '/' + layer + '/';
        // ./img/outline_3.format
        let source = imgPath + layer + ".png" //format
        let zIndex = i*10; 

        let image = document.createTextNode('<img class="container-background" src=" ' + source + ' " style: z-index: " ' + zIndex +';"/>');
        paperKnight.appendChild(image);

        i++;
    });

    return i;
}
/**end test */
function renderKnight(view, knight) {

    //render armor
    knight.armor.forEach(part => {

        view.paperKnight.armor.children[part.id].src = part.source;
        //reconsider putting y-index in generator while generating armorPart data
        view.paperKnight.armor.children[part.id].style["z-index"] = ;
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


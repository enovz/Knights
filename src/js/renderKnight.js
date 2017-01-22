/**renderKnight 
 * 2.1. get view
 *      2.2. create new knight
 *      2.3. render new knight to view
*/

import { Knight } from './helpers/Knight'

export function renderKnight() {

    let view = getView();
    let knight = new Knight();

    console.log(view);
    //render armor
    knight.armor.forEach(part => {

        view.armor.children[part.id].src = part.source;
    });

    //name
    view.name.value = knight.name;

    //stats
    knight.stats.forEach(stat => {

        view.stats.children[stat.id].value = stat.value;
    });

    //traits
    for (let i = 0; i < view.traits.children.length; i++) {

        view.traits.children[i].value = knight.traits[i];
    }

    //skills
    for (let i = 0; i < view.traits.children.length; i++) {

        view.skills.children[i].value = knight.skills[i];
    }
    //biography
    //view.biography.value = knight.biography;
}
function getView() {

    //get view should get invisible elements

    let iframe = document.getElementById('knightTemplate');
    var paperKnight = iframe.contentDocument || iframe.contentWindow.document;*/


    let vKnight = paperKnight.getElementById('knight');
    let vArmor = paperKnight.getElementById('armor');
    let vName = paperKnight.getElementById('name');
    let vStats = paperKnight.getElementById('stats');
    let vTraits = paperKnight.getElementById('traits');
    let vSkills = paperKnight.getElementById('skills');
    let vBiography = paperKnight.getElementById('biography');


    //create view
    let view = {
        knight: vKnight,
        armor: vArmor,
        name: vName,
        stats: vStats,
        traits: vTraits,
        skills: vSkills,
        biography: vBiography
    }

    return view;
} 

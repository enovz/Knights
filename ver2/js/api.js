
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

    pressStartKey: pressStartKey,
    clickAnyWhere: clickAnyWhere

}

/**press start key */
function pressStartKey(e) {

    if (e.key === 'q') {

        //handle click
        startAnimation();
        renderKnight();
        printKnight();

        this.restart();
    }
}
/**clickAnyWhere */
function clickAnyWhere() {

    //handle click
    startAnimation();
    renderKnight();
    printKnight();

    this.restart();

}
function startAnimation() {

    document.getElementById("loader").style.display = "block";
}
function renderKnight() {

    let view = getView();
    let knight = new Knight();

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

    //TODO:
    //awareness
    /* for (let i = 0; i < knight.awareness.length; i++) {
 
         let point = document.createElement('button');
         point.style.display = "block";
 
         document.getElementById('awareness').appendChild(point);
     }
 
     //consciousness
     for (let i = 0; i < knight.consciousness.length; i++) {
 
         let point = document.createElement('button');
         point.className += " btn btn-default btn-circle";
 
         document.getElementById('consciousness').appendChild(point);
     }*/

    //biography
    //view.paperKnight.biography.value = knight.biography;

}
function getView() {

    let vKnight = document.getElementById('paperKnight');
    let vArmor = document.getElementById('armor');
    let vName = document.getElementById('name');
    let vStats = document.getElementById('stats');
    let vTraits = document.getElementById('traits');
    let vSkills = document.getElementById('skills');
    let vBiography = document.getElementById('biography');

    //create view
    let view = {
        paperKnight: {
            self: vKnight,
            armor: vArmor,
            name: vName,
            stats: vStats,
            traits: vTraits,
            skills: vSkills
        }
    }

    return view;
};
function printKnight() {

    //woking example
    let mode = 'iframe'; //popup
    let close = mode == "popup";
    let options = { mode: mode, popClose: close };
    $('div.paperKnight').attr('style', 'visibility: visible');
    $("div.paperKnight").printArea(options);
    $('div.paperKnight').attr('style', 'visibility: hidden');


}


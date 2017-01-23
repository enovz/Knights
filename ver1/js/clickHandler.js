
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

//depreciated
//import { Knight } from './Knight'

//circular dependencie filipe
//import { KnightsModule } from './KnightsModule'

/**dependencies */
//import { printKnight1, printKnight2, printKnight3 } from './printKnight'


/**clickHandler */
/*export function clickHandler() {

    //moved to renderKnight.js
    //let view = getView();
    //let newKnight = new Knight();
    //renderKnight(view, newKnight);



    //loader animation
    let loader = $('#loading-banner');
    loader.css('display', 'block');
    //print knight
    //printKnight1(this._templateSource);


    //priiint
    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = { mode: mode, popClose: close };
    $('div.main').attr('style', 'visibility: visible');
    $("div.main").printArea(options);
    $('div.main').attr('style', 'visibility: hidden');
    coolDown();
    //printKnight2(this._templateSource);
    //printKnight3(this._templateSource);




}*/

import { Knight } from './helpers/Knight'

export function clickHandler() {
    //test
    /*let view = getView();
    let newKnight = new Knight();*/

    var loader = $('#loading-banner');




    //test 
    //console.log(view);
    //console.log(newKnight);

    //renderKnight(view, newKnight);
    renderKnight();
    //printKnight();
    //resetView(view.logo, view.knight);

    //priiint
    var mode = 'iframe'; //popup
    var close = mode == "popup";
<<<<<<< HEAD
    var options = { mode: mode, popClose: close };
    $('div.main').attr('style', 'visibility: visible');
    $("div.main").printArea(options);
    $('div.main').attr('style', 'visibility: hidden');
=======
    var options = { mode : mode, popClose : close};
    $('div.main').attr('style','visibility: visible');
    $("div.main").printArea( options );
    $('div.main').attr('style','visibility: hidden');
>>>>>>> f35ee0a75f0cfe45be7836ae96ca0b15003e49e8
    coolDown();

    loader.css('display', 'block');
}
/*function getView() {


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
        traits: $traits,
        stats: $stats,
        biography: $biography

    }

    //return view
    return view;

}*/
function getView() {

    /*let iframe = document.getElementById('paperKnight');
    console.log(iframe);
    var paperKnight = iframe.contentDocument || iframe.contentWindow.document;*/


    let vKnight = document.getElementById('knight');
    let vArmor = document.getElementById('armor');
    let vName = document.getElementById('name');
    let vStats = document.getElementById('stats');
    let vTraits = document.getElementById('traits');
    let vSkills = document.getElementById('skills');
    let vBiography = document.getElementById('biography');

    console.log(vArmor);

    //create view
    let view = {
        //knight: vKnight,
        armor: vArmor,
        name: vName,
        stats: vStats,
        traits: vTraits,
        skills: vSkills,
        biography: vBiography
    }

    return view;
}
function renderKnight() {

    //test
    let view = getView();
    let knight = new Knight();

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
/*depreciated
function getView() {


    //var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" );

    //get logo element
    //let $logo = $('#logo');
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
        //logo: $logo,
        knight: $knight,
        armor: $armor,
        name: $name,
        traits: $traits,
        stats: $stats,
        biography: $biography

    }

    //return view
    return view;

}*/

//moved to renderKnight.js
/*function getView() {

    
    let vKknight = document.getElementById('knight');
    let vArmor = document.getElementById('armor');
    let vName = document.getElementById('name');
    let vStats = document.getElementById('stats');
    let vTraits = document.getElementById('traits');
    let vSkills = document.getElementById('skills');
    let vBiography = document.getElementById('biography');


    //create view
    let view = {
        knight: vKknight,
        armor: vArmor,
        name: vName,
        stats: vStats,
        traits: vTraits,
        skills: vSkills,
        biography: vBiography
    }

    return view;
}
function renderKnight(view, knight) {

    //render armor
    knight.armor.forEach(part => {

        view.armor.children[part.id].src = part.source;
    });

    //name
    view.name.value = knight.name;

    //stats
    knight.stats.forEach(stat=>{

        view.stats.children[stat.id].value = stat.value;
    });

    //traits
    for(let i = 0; i<view.traits.children.length; i++){

        view.traits.children[i].value = knight.traits[i];
    }

    //skills
    for(let i = 0; i<view.traits.children.length; i++){

        view.skills.children[i].value = knight.skills[i];
    }
    //biography
    //view.biography.value = knight.biography;
}*/
/*function toggleAnimation(logo, knight) {
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
<<<<<<< HEAD

    setTimeout(function () { location.reload(); }, 3000);
}*/
=======
    
    setTimeout(function(){ location.reload(); }, 9000);
}
>>>>>>> f35ee0a75f0cfe45be7836ae96ca0b15003e49e8


/**handle click event:
 * 
 * 1. get view
 * 2. create new knight
 * 3. render new knight to view
 * 4. print view
 * 5. cool down
 * 5. reset view 
 */

import {Knight} from './Knight'

export function clickHandler(){

    let newKnight = new Knight();
    console.log(newKnight);

    /*jQuerry object
    let $knight = $('#knight');
    console.log($knight);
    let helmet = $knight.find("#helmet");
    console.log(helmet);*/

    //loade images
    newKnight.armor.forEach(armorPart => {
        //console.log(armorPart);
        document.getElementById(armorPart.Id).src = armorPart.source;
    });
}
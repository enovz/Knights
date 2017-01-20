/**Knight:
 * 
 * Properties: 
 *      1. name
 *      2. stats
 *      3. traits
 *      4. armor
*/

import {generator} from './generator' 

function Knight() {

    //Properties
    this.name = generator.getName();
    this.stats = generator.getStats();
    this.traits = generator.getTraits();
    this.renderArmor();

}

Knight.prototype.renderArmor = function () {

    let armor = generator.getArmorParts();

    armor.forEach(armorPart =>{
        document.getElementById(armorPart.Id).src = armorPart.source;
    });
    
}


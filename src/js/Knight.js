/**Knight:
 * 
 * Properties: 
 *      1. name
 *      2. stats
 *      3. traits
 *      4. armor
*/

import {generator} from './generator' 

export function Knight() {

    //Properties
    this.name = generator.getName();
    this.stats = generator.getStats();
    this.traits = generator.getTraits();
    this.armor = generator.getArmorParts();

}


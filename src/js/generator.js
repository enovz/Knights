
import { names, surnames, stats, traits, armorParts } from './data';

export const generator = {

    randomIntFromInterval: function (min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getName: function () {

        let nameIndex = this.randomIntFromInterval(0, names.length);
        let surnameIndex = this.randomIntFromInterval(0, surnames.length);

        let name = names[nameIndex] + " " + surnames[surnameIndex];
        return name;
    },
    getStats: function () {

        let newStats = [];

        stats.forEach(stat => {

            let newStat = {
                name: stat,
                value: this.randomIntFromInterval(0, 100)
            };

            newStats.push(newStat);
        });

        return newStats;
    },
    getTraits: function () {

        let newTraits = [];

        for (let i = 0; i < 10; i++) {

            let traitIndex = this.randomIntFromInterval(0, traits.length);
            newTraits.push(traits[traitIndex]);
        }

        return newTraits;
    },
    getArmorParts() {

        let armor = [];

        //img
        let imgPath = '../img'

        armorParts.forEach(armorPart => {

            // /torsos/
            let folder = '/' + armorPart + 's/';

            // torso3.format
            let randomNumber = generator.randomIntFromInterval(1, 20);
            let partId = armorPart + randomNumber + ".format"; //set FORMAT !!

            // /img/torsos/torso3.format
            let source = imgPath + folder + partId + ".format";

            let newArmorPart = {
                Id : armorPart,
                source : source
            };

            armor.push(armorPart);
        });

        return armor;
    }
};

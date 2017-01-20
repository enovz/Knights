
import { names, surnames, stats, traits, armorParts } from './data';

export const generator = {

    randomIntFromInterval: function (min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getName: function () {

        let nameIndex = this.randomIntFromInterval(0, (names.length-1));
        let surnameIndex = this.randomIntFromInterval(0, (surnames.length-1));

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

            let traitIndex = this.randomIntFromInterval(0, (traits.length-1));
            newTraits.push(traits[traitIndex]);
        }

        return newTraits;
    },
    getArmorParts: function() {

        let armor = [];

        //img
        let imgPath = './img'

        armorParts.forEach(armorPart => {

            // /torsos/
            let folder = '/' + armorPart + '/';

            // torso_3.format
            let randomNumber = generator.randomIntFromInterval(1, 3); //set max number to num of files
            let partId = armorPart + "_" +randomNumber + ".png"; //set FORMAT !!

            // /img/torsos/torso_3.format
            let source = imgPath + folder + partId;

            let newArmorPart = {
                Id : armorPart,
                source : source
            };

            armor.push(newArmorPart);
        });

        return armor;
    }
};

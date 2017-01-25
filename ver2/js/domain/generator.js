
import { names, surnames, stats, traits, skills, armorParts, biographies } from '../data/data';

export const generator = {

    randomIntFromInterval: function (min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getName: function () {

        let nameIndex = this.randomIntFromInterval(0, (names.length - 1));
        let surnameIndex = this.randomIntFromInterval(0, (surnames.length - 1));

        let name = names[nameIndex] + " " + surnames[surnameIndex];
        return name;
    },
    getStats: function () {

        let newStats = [];

        stats.forEach(stat => {

            let newStat = {
                id: stat,
                value: this.randomIntFromInterval(10, 99)
            };

            newStats.push(newStat);
        });

        return newStats;
    },
    getTraits: function () {

        let newTraits = [];

        while (newTraits.length < 5) {
            
            let traitIndex = this.randomIntFromInterval(0, (traits.length - 1));

            if (isValid(traits[traitIndex], newTraits)) {

                newTraits.push(traits[traitIndex]);
            }
        }

        return newTraits;
    },
    getSkills: function () {

        let newSkills = [];

        while (newSkills.length < 5) {
            
            let skillIndex = this.randomIntFromInterval(0, (skills.length - 1));

            if (isValid(skills[skillIndex], newSkills)) {

                newSkills.push(skills[skillIndex]);
            }
        }

        return newSkills;
    },
    getArmorParts: function () {

        let armor = [];

        //img
        let imgPath = './bin//img'

        armorParts.forEach(armorPart => {

            // /torsos/
            let folder = '/' + armorPart.name + '/';

            // torso_3.format
            let randomNumber = generator.randomIntFromInterval(1, armorPart.maxNum); //set max number to num of files
            let partId = armorPart + "_" + randomNumber + ".png"; //set FORMAT !!

            // /img/torsos/torso_3.format
            let source = imgPath + folder + partId;

            //test
            let newArmorPart = {
                id: armorPart,
                source: source
            };

            armor.push(newArmorPart);

        });

        return armor;
    },
    getBiography: function () {

        let newBiography = "";
        let used = [];
        for (let i = 0; i < 4; i++) {

            let sentenceIndex = this.randomIntFromInterval(0, (biographies.length - 1));

            if (used.indexOf(sentenceIndex) === -1) {
                newBiography += biographies[sentenceIndex];
            }

            used.push(sentenceIndex);
        }

        return newBiography;

    },
    getAwareness: function () {

        let awareness = this.randomIntFromInterval(1, 6);
        return awareness;
    },
    getConsciousness: function () {

        let consc = this.randomIntFromInterval(1, 6);
        return consc;
    }
};

function isValid(data, array) {

    if(typeof (data) === 'undefined' ) {

        return false
    }
    if(array.indexOf(data) === -1){
        return true;
    }
    /*
    else {
        return false
    }*/
}
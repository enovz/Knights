
import { names, surnames, stats, traits, skills, armorParts, biographies } from './data/data';

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
                value: this.randomIntFromInterval(0, 100)
            };

            newStats.push(newStat);
        });

        return newStats;
    },
    getTraits: function () {

        let newTraits = [];

        for (let i = 0; i < 5; i++) {

            let traitIndex = this.randomIntFromInterval(0, (traits.length - 1));
            if(newTraits.indexOf(traits[traitIndex]) === -1){

                newTraits.push(traits[traitIndex]);    
            }
        }

        return newTraits;
    },
    getSkills: function () {

        let newSkills = [];

        for (let i = 0; i < 5; i++) {

            let skillIndex = this.randomIntFromInterval(0, (skills.length - 1));
            if(newSkills.indexOf(skills[skillIndex]) === -1){
                newSkills.push(skills[skillIndex]);
            }
        }

        return newSkills;
    },
    getArmorParts: function () {

        //test
        let armor = [];

        //let armor = {};
        //img
        let imgPath = './img'

        armorParts.forEach(armorPart => {

            // /torsos/
            let folder = '/' + armorPart + '/';

            // torso_3.format
            let randomNumber = generator.randomIntFromInterval(1, 3); //set max number to num of files
            let partId = armorPart + "_" + randomNumber + ".png"; //set FORMAT !!

            // /img/torsos/torso_3.format
            let source = imgPath + folder + partId;

            //test
            let newArmorPart = {
                id: armorPart,
                source: source
            };

            //test
            armor.push(newArmorPart);

            //armor[armorPart] = source;


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

    }
};

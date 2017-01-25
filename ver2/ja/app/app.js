(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _KnightsModule = require('./js/KnightsModule');

if (!window.app) {

    var _app = {};
    _app.startModule = new _KnightsModule.KnightsModule();

    //initialize modules
    _app.startModule.init();
} else {

    app.startModule = new startModule();

    //intialize modules
    app.startModule.init();
}
/**app :
 *      1. create or hook to app
 *      2. create starting module
 *      3. initalize modules
*/

},{"./js/KnightsModule":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KnightsModule = KnightsModule;

var _api = require("./api");

/**Knights Module */
function KnightsModule() {

    this._version = "3.0.0";
    this._moduleName = "knights";
    this._desctiption = "paper knights generator";
    this._api = _api.api;
} /**Knights Module:
   * 
   * 1.add events to DOM
   * 2.remove events from DOM
   */

/**dependencies */

KnightsModule.prototype.init = function () {

    //bind _api
    this.api = {};

    for (var prop in this._api) {

        this.api[prop] = this._api[prop].bind(this);
    }

    //document.addEventListener('click', this.api.clickAnyWhere, false);
    document.addEventListener('keypress', this.api.pressStartKey, false);
};
KnightsModule.prototype.close = function () {

    //unbind events
    //document.removeEventListener('click', this.api.clickAnyWhere, false);
    document.removeEventListener('keypress', this.api.pressStartKey, false);
};
KnightsModule.prototype.restart = function () {

    this.close();
    setTimeout(function () {

        location.reload();
        this.init.bind(this);
    }.bind(this), 20000); // figure out timer
};

},{"./api":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _Knight = require('./domain/Knight');

var api = exports.api = {

    pressStartKey: pressStartKey,
    clickAnyWhere: clickAnyWhere

};

/**press start key */

/**knights api:
 * 
 *      1.clickAnyWhere:
 *          1. start loading animation
 *          2. render knight
 *          3. printKnight
 *          3. restart aplication
 */

/**dependencies */
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

    var view = getView();
    var knight = new _Knight.Knight();

    //render armor
    knight.armor.forEach(function (part) {

        view.paperKnight.armor.children[part.id].src = part.source;
    });

    //name
    view.paperKnight.name.value = knight.name;

    //stats    
    knight.stats.forEach(function (stat) {

        view.paperKnight.stats.children[stat.id].value = stat.value;
    });

    //traits
    for (var i = 0; i < view.paperKnight.traits.children.length; i++) {

        view.paperKnight.traits.children[i].value = knight.traits[i];
    }

    //skills
    for (var _i = 0; _i < view.paperKnight.skills.children.length; _i++) {

        view.paperKnight.skills.children[_i].value = knight.skills[_i];
    }
}
function getView() {

    var vKnight = document.getElementById('paperKnight');
    var vArmor = document.getElementById('armor');
    var vName = document.getElementById('name');
    var vStats = document.getElementById('stats');
    var vTraits = document.getElementById('traits');
    var vSkills = document.getElementById('skills');
    var vBiography = document.getElementById('biography');

    //create view
    var view = {
        paperKnight: {
            self: vKnight,
            armor: vArmor,
            name: vName,
            stats: vStats,
            traits: vTraits,
            skills: vSkills
        }
    };

    return view;
};
function printKnight() {

    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = { mode: mode, popClose: close };
    $('div.paperKnight').attr('style', 'visibility: visible');
    $("div.paperKnight").printArea(options);
    $('div.paperKnight').attr('style', 'visibility: hidden');
}

},{"./domain/Knight":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**data */

var names = exports.names = ["Adept", "Arcanist", "Archmage", "Archer", "Assassin", "Battlemage", "Bard", "Beastmaster", "Binder", "Bladesinger", "Brawler", "Cavalier", "Conjurer", "Commissar", "Champion", "Cleric", "Disciple", "Divine", "Doomcaster", "Emissary", "Enchanter", "Gladiator", "Guardian", "Harbinger", "Hellreaver", "Hexblade", "Hunter", "Infiltrator", "Inquisitor", "Knight", "Lord", "Magehunter", "Marauder", "Marshal", "Master", "Navigator", "Necromancer", "Outrider", "Paladin", "Ranger", "Runecaster", "Sage", "Scavenger", "Seer", "Sentinel", "Shadowsmith", "Slayer", "Sorcerer", "Soulcaster", "Soulguard", "Spellsword", "Spymaster", "Summoner", "Sunlord", "Stormlord", "Tactician", "Theurgist", "Templar", "Warden", "Warlock", "Warmage", "Warmaster", "Warrior"];
var surnames = exports.surnames = ["Acarred", "Acartim", "Adelbard", "Adkin", "Agerrod", "Aldescord", "Aldise", "Aldyere", "Alear", "Aleden", "Aleof", "Anrie", "Ansenward", "Anstur", "Arceol", "Ardis", "Arhes", "Arynd", "Ashthan", "Athwar", "Baadel", "Baelbu", "Baldord", "Banrothy", "Barbert", "Barham", "Bawerd", "Beloh", "Belward", "Beohal", "Beorn", "Beorth", "Beorthnald", "Beosen", "Bertguth", "Bertric", "Bethlac", "Bojai", "Brihelm", "Brytris", "Buernor", "Burthae", "Cacthain", "Cangorma", "Cartondo", "Casbarhelm", "Cencyn", "Ceolwulf", "Cerzryn", "Chroage", "Cialhal", "Clacar", "Claferd", "Cloight", "Criskel", "Cuthlas", "Cymarma", "Daethan", "Danferd", "Darentri", "Dargum", "Donlett", "Dowald", "Draest", "Drakfor", "Drukthard", "Drytlas", "Dux", "Eafrid", "Eal", "Ealen", "Eawise", "Echim", "Echrad", "Edaan", "Edcar", "Edvia", "Eibryt", "Eldane", "Eldash", "Eleof", "Endtor", "Enthdar", "Erddic", "Erdra", "Eresse", "Ertai", "Estogh", "Ethelmi", "Everbrand", "Evervell", "Ferdswith", "Fermuel", "Fledgrim", "Fledmond", "Fredken", "Frid", "Fridcuth", "Fridmark", "Frith", "Frithmac", "Gaferd", "Garcrow", "Gardhol", "Gardjen", "Gardneth", "Gareon", "Garmash", "Ghaot", "Gormalett", "Grimcuth", "Grimdon", "Grimferd", "Grimwyn", "Harglor", "Hargruul", "Heald", "Helettan", "Helmsang", "Hemaroc", "Hereco", "Hesnath", "Hesylcon", "Hetimhol", "Hewbard", "Hildferd", "Hildidon", "Hildiord", "Hildired", "Hinos", "Holvel", "Honsgar", "Iannhildi", "Imaugh", "Inedas", "Ineon", "Ingchar", "Irmakethel", "Isen", "Isenson", "Issine", "Jakrahan", "Jeffdra", "Joanroc", "Jored", "Kaar", "Kahelm", "Kaltur", "Karoth", "Keciaron", "Keethel", "Kenthas", "Kerid", "Khuzme", "Kimsul", "Lacead", "Lasdra", "Lasferum", "Laumac", "Lauthgard", "Learmas", "Lenwyn", "Leof", "Leofbur", "Leofmond", "Lesealvin", "Lettfled", "Leysan", "Liamferth", "Liamhald", "Lihon", "Liron", "Locriasen", "Lormic", "Lorrod", "Lybeorn", "Lyeeng", "Lyeuld", "Malisanth", "Maordroy", "Marghel", "Markven", "Markvin", "Marmanas", "Maseph", "Mhed", "Miardas", "Mitegel", "Mondrah", "Mondvid", "Moranlor", "Morannor", "Morbur", "Moruul", "Mosorth", "Mosper", "Mudan", "Muelbert", "Muelcuth", "Naldcrow", "Naldren", "Nalech", "Nansobeth", "Naor", "Natheal", "Nathu", "Nethda", "Nethrie", "Newerd", "Niethel", "Norroth", "Nysep", "Odeb", "Ohildi", "Oldfroth", "Omolt", "Onskel", "Onwar", "Orann", "Ordjefel", "Ordlin", "Ormris", "Osnys", "Oughusk", "Queeng", "Raenvil", "Rahge", "Rahke", "Rakih", "Ranerath", "Rawyn", "Redard", "Redloc", "Redwil", "Renlett", "Retfled", "Retrah", "Riabras", "Riarroc", "Ridryt", "Rilon", "Rilrbur", "Risghat", "Risstan", "Risthor", "Risyth", "Rocrid", "Rocroy", "Rodsam", "Rolisum", "Roltim", "Ronegar", "Ronmane", "Ronvell", "Ronvithor", "Royham", "Ryess", "Ryimil", "Ryleof", "Sagardi", "Sared", "Saric", "Sathor", "Saykenth", "Shamo", "Sigand", "Sigsana", "Stanhelm", "Stipo", "Sungric", "Suroth", "Swithred", "Sylbri", "Sylwald", "Tamalor", "Terbeo", "Thaejoan", "Thobeorn", "Thorad", "Thordbur", "Thorwig", "Tomald", "Torit", "Triga", "Trisonwald", "Trivor", "Tule", "Turang", "Tyald", "Tyferth", "Tyward", "Undach", "Undarr", "Undert", "Urnret", "Ushdra", "Vagrim", "Vaser", "Ven", "Venan", "Venberbas", "Vengeor", "Verchom", "Verelm", "Vertan", "Vintada", "Voet", "Vorate", "Vorgo", "Vorrir", "Vorses", "Walddic", "Waldgrim", "Wargdorn", "Warod", "Wenferth", "Werdcas", "Werthas", "Wilannrie", "Wilvell", "Winebert", "Wiseret", "Worhin", "Wulfdun", "Wulfranth", "Wulfstan", "Wynadel", "Wyndoc", "Yerhtin", "Yerlan", "Zaarchet", "Zaregin", "Zhapol", "Zhyray", "Zoash"];

var traits = exports.traits = ["Abrasive", "Aggressive", "Aimless", "Anxious", "Apologetic", "Arrogant", "Bleak", "Careless", "Cowardly", "Cruel", "Dependable", "Depressive", "Desperate", "Despairing", "Destructive", "Dishonest", "Dull", "Fanatical", "Fragile", "Fearful", "Feeble", "Foolish", "Forgetful", "Futile", "Greedy", "Grievous", "Hateful", "Humble", "Hopeless", "Unfortunate", "Uninspired", "Idealistic", "Impatient", "Ineffective", "Indecisive", "Insecure", "Irrelevant", "Jealous", "Judgemental", "Lazy", "Manipulative", "Melancholic", "Meaningless", "Miserable", "Morbid", "Mysterious", "Naive", "Nervous", "Opinionated", "Obsessive", "Passive", "Paranoid", "Pessimistic", "Powerless", "Pretentious", "Rebellious", "Reckless", "Reflective", "Reserved", "Restless", "Rigid", "Scared", "Secretive", "Selfish", "Solitary", "Sunk", "Spiritless", "Stingy", "Stubborn", "Submissive", "Thoughtless", "Timid", "Tragic", "Trivial", "Unstable", "Vain", "Volatile", "Vindictive", "Violent", "Worthless", "Withdrawn", "Weak"];
var skills = exports.skills = ["Absolve", "Bargain", "Berserk", "Betray", "Bind", "Blind", "Bluff", "Break", "Burst", "Clone", "Crush", "Delude", "Destroy", "Decay", "Disguise", "Disrupt", "Dissolve", "Distract", "Dodge", "Dominate", "Elude", "Evade", "Execute", "Fade", "Focus", "Frenzy", "Fury", "Gamble", "Grasp", "Grow", "Heal", "Hex", "Hide", "Illuminate", "Imitate", "Interrupt", "Intimidate", "Leap", "Levitate", "Listen", "Maim", "Mirror", "Mislead", "Mute", "Panic", "Provoke", "Pursuit", "Rage", "Renew", "Repair", "Resolve", "Retaliate", "Rush", "Search", "Sense", "Shatter", "Sooth", "Spot", "Stun", "Sunder", "Taunt", "Torture", "Trap", "Trick", "Tumble", "Vanish", "Ward", "Weaken"];
var stats = exports.stats = ["strength", "dexterity", "constitution", "inteligence", "wisdom", "charisma"];
var armorParts = exports.armorParts = ["helm", "chest", "arms", "legs"];
var biographies = exports.biographies = [" Was born in __________ ", " During the Great War of _____________ ", " Was given the mission to _____________ ", " Must revenge the death of ______________ "];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Knight = Knight;

var _generator = require('./generator');

function Knight() {

    //Properties
    this.name = _generator.generator.getName();
    this.stats = _generator.generator.getStats();
    this.traits = _generator.generator.getTraits();
    this.skills = _generator.generator.getSkills();
    this.armor = _generator.generator.getArmorParts();
    this.awareness = _generator.generator.getAwareness();
    this.consciousness = _generator.generator.getConsciousness();
} /**Knight:
   * 
   * Properties: 
   *      1. name
   *      2. stats
   *      3. traits
   *      4. armor
  */

},{"./generator":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generator = undefined;

var _data = require('../data/data');

var generator = exports.generator = {

    randomIntFromInterval: function randomIntFromInterval(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getName: function getName() {

        var nameIndex = this.randomIntFromInterval(0, _data.names.length - 1);
        var surnameIndex = this.randomIntFromInterval(0, _data.surnames.length - 1);

        var name = _data.names[nameIndex] + " " + _data.surnames[surnameIndex];
        return name;
    },
    getStats: function getStats() {
        var _this = this;

        var newStats = [];

        _data.stats.forEach(function (stat) {

            var newStat = {
                id: stat,
                value: _this.randomIntFromInterval(10, 99)
            };

            newStats.push(newStat);
        });

        return newStats;
    },
    getTraits: function getTraits() {

        var newTraits = [];

        while (newTraits.length < 5) {

            var traitIndex = this.randomIntFromInterval(0, _data.traits.length - 1);

            if (isValid(_data.traits[traitIndex], newTraits)) {

                newTraits.push(_data.traits[traitIndex]);
            }
        }

        return newTraits;
    },
    getSkills: function getSkills() {

        var newSkills = [];

        while (newSkills.length < 5) {

            var skillIndex = this.randomIntFromInterval(0, _data.skills.length - 1);

            if (isValid(_data.skills[skillIndex], newSkills)) {

                newSkills.push(_data.skills[skillIndex]);
            }
        }

        return newSkills;
    },
    getArmorParts: function getArmorParts() {

        var armor = [];

        //img
        var imgPath = './bin//img';

        _data.armorParts.forEach(function (armorPart) {

            // /torsos/
            var folder = '/' + armorPart + '/';

            // torso_3.format
            var randomNumber = generator.randomIntFromInterval(1, 3); //set max number to num of files
            var partId = armorPart + "_" + randomNumber + ".png"; //set FORMAT !!

            // /img/torsos/torso_3.format
            var source = imgPath + folder + partId;

            //test
            var newArmorPart = {
                id: armorPart,
                source: source
            };

            armor.push(newArmorPart);
        });

        return armor;
    },
    getBiography: function getBiography() {

        var newBiography = "";
        var used = [];
        for (var i = 0; i < 4; i++) {

            var sentenceIndex = this.randomIntFromInterval(0, _data.biographies.length - 1);

            if (used.indexOf(sentenceIndex) === -1) {
                newBiography += _data.biographies[sentenceIndex];
            }

            used.push(sentenceIndex);
        }

        return newBiography;
    },
    getAwareness: function getAwareness() {

        var awareness = this.randomIntFromInterval(1, 6);
        return awareness;
    },
    getConsciousness: function getConsciousness() {

        var consc = this.randomIntFromInterval(1, 6);
        return consc;
    }
};

function isValid(data, array) {

    if (typeof data === 'undefined') {

        return false;
    }
    if (array.indexOf(data) === -1) {
        return true;
    }
    /*
    else {
        return false
    }*/
}

},{"../data/data":4}]},{},[1]);

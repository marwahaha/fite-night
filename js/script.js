/*========================
GLOBAL VARIABLE DECLARATIONS
=========================*/
var heroStore;
var buttonFightTrigger = document.querySelector("#start-fite-night");
var heroNameInput = document.querySelector('#hero-name');
var heroProfessionInput = document.querySelector('#hero-profession');
var attackButtonTrigger = document.querySelector("#heroAttack");
var compAttackButtonTrigger = document.querySelector("#compAttack");
var blockButtonTrigger = document.querySelector("#heroBlock");
var compBlockButtonTrigger = document.querySelector('#compBlock');
var specialAbilitiesButtonTrigger = document.querySelector("#heroSpecialAbilities");
var getDivButton = document.querySelector('#special-abilities');

var attackSpread = 15;
var firstBattle = true;
var combatants = null;

class Fighter {
  constructor(name, slogan, profession){
    // properties shared by all professions
    this.name = name;
    this.slogan = slogan;
    this.profession = profession;
    this.baseHealth = 200;
    this.baseArmor = 10;
    this.physArmor = 50;
    this.magicalArmor = 10;
    this.physHealthModifier = 20;
    this.magicalHealthModifier = 20;

    // calculates main stats based on profession
    if (profession === 'Berserker' || profession === 'berserker') {
      this.basePower = 30;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier;
      this.superPowers = ['berserkerRage'];
    } else if (profession === 'Brawler' || profession === 'brawler') {
      this.basePower = 10;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier;
      this.superPowers = ['armorUp', 'powerUp'];
    } else if (profession === 'Fighter' || profession === 'fighter') {
      this.basePower = 20;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier + 10;
      this.superPowers = ['powerUp'];
    } else if (profession === 'Warrior' || profession === 'warrior') {
      this.basePower = 20;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier;
      this.superPowers = ['armorUp', 'hiltBash'];
    } else if (profession === 'Assassin' || profession === 'assassin') {
      this.basePower = 30;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = ['backstab'];
    } else if (profession === 'Blast Mage' || profession === 'blast mage') {
      this.basePower = 0;
      this.baseMagicPower = 50;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = ['fireball', 'fireblast', 'magicShield'];
    } else if (profession === 'Cleric' || profession === 'cleric') {
      this.basePower = 0;
      this.baseMagicPower = 20;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier + 10;
      this.superPowers = ['fireball', 'heal', 'magicShield'];
    } else if (profession === 'Battle Mage' || profession === 'battle mage') {
      this.basePower = 0;
      this.baseMagicPower = 30;
      this.armorModifier = this.magicalArmor + 10;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = ['fireball', 'fireblast'];
    } else if (profession === 'Illusionist' || profession === 'illusionist') {
      this.basePower = 0;
      this.baseMagicPower = 30;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = ['fireball', 'magicShield'];
    } else if (profession === 'Warlock' || profession === 'warlock') {
      this.basePower = 0;
      this.baseMagicPower = 50;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = ['fireball', 'sacrifice', 'curse', 'drain'];
    }

    //recalculates health stats based on profession
    this.health = this.baseHealth + this.healthModifier;
    this.armor = this.baseArmor + this.armorModifier;
    this.life = this.health + this.armor;

    var physicalProfessions = ['Berserker', 'berserker', 'Brawler', 'brawler', 'Fighter', 'fighter', 'Warrior', 'warrior', 'Assassin', 'assassin'];

    var magicalProfessions = ['Blast Mage', 'blast mage', 'Cleric', 'cleric', 'Battle Mage', 'battle mage', 'Illusionist', 'illusionist', 'Warlock', 'warlock']

    //determines fighter weapon type, used in battle calculations
    if (physicalProfessions.indexOf(this.profession) >= 0) {
      this.type = 'physical';
    } else if (magicalProfessions.indexOf(this.profession) >= 0) {
      this.type = 'magical';
    } else {
      this.type = 'civilian';
    }
  }


  //method called to give each fighter a random weapon at battle-start
  getWeapon() {
   var weaponNumber = Math.floor(Math.random() * (Math.floor(5)-Math.ceil(0)) + Math.ceil(0));

   if (weaponNumber === 0) {
    this.weapon = 'bare knuckles';
    this.weaponPower = 0;
    this.weaponMagicPower = 0;
  } else if (weaponNumber === 1) {
    this.weapon = 'wand';
    this.weaponPower = 10;
    this.weaponMagicPower = 30;
  } else if (weaponNumber === 2) {
    this.weapon = 'dagger';
    this.weaponPower = 30;
    this.weaponMagicPower = 0;
  } else if (weaponNumber === 3) {
    this.weapon = 'sword';
    this.weaponPower = 40;
    this.weaponMagicPower = 0;
  } else if (weaponNumber === 4) {
    this.weapon = 'greatsword';
    this.weaponPower = 50;
    this.weaponMagicPower = 0;
  }

  //call weapon based inate powers here
  if (((this.profession === 'Berserker') || (this.profession === 'berserker')) && (this.weapon === 'greatsword')) {
    this.weaponPower += 20;
    console.log('Imma tear you up!');
  } else if ((this.profession === 'Brawler' || this.profession === 'brawler') && (this.weapon === 'bare knuckles')) {
    this.weaponPower += 50;
    console.log("It's bare knuckle time!");
  } else if (((this.profession === 'Warrior') || (this.profession === 'warrior')) && (this.weapon === 'sword')) {
    this.armor += 10;
    console.log("Every sword needs a shield!");
  } else if (((this.profession === 'Assassin') || (this.profession === 'assassin')) && (this.weapon === 'dagger')) {
    this.weaponPower += 50;
    console.log("A sword is made for battle. A dagger for killing");
  } else if (((this.profession === 'Blast Mage') || (this.profession === 'blast mage')) && (this.weapon === 'wand')) {
    this.weaponPower += 50;
    console.log("The wand is mightier than the sword!");
  } else if (((this.profession === 'Battle Mage') || (this.profession === 'battle mage')) && (this.weapon === 'wand')) {
    this.superPowers.push('magicShield');
    console.log('If my wand is my sword, my mind is my shield.');
  }

  //recalculates weapon and magic power taking into account after weapons are received
  this.attackPower = this.basePower + this.weaponPower;
  this.magicPower = this.baseMagicPower + this.weaponMagicPower;
}

attackUp() {
  this.attackPower += 10;
}

armorUp() {
  this.life += 10;
}

}

/*=============================
PRE-DEFINED FIGHTERS
==============================*/
var kurt = new Fighter('Kurt', 'hello', "berserker");
var dawn = new Fighter('Dawn', 'goodbye', 'brawler');
var jesse = new Fighter('Jesse', 'goodday', 'assassin');
var jay = new Fighter('Jay', 'and a goodday to you', 'assassin');
var john = new Fighter('John', 'hi', 'warlock');
var amy = new Fighter('Amy', 'argh matey', 'illusionist');
var abigail = new Fighter('Abigail', 'God is good', 'warrior');

//function used to initiate battle between the fighters passed in as arguments
function battle(fighter1, fighter2) {
  //fighter's state their slogans
  console.log(fighter1.slogan);
  console.log(fighter2.slogan);

  //gives each fighter a random weapon to fight with
  fighter1.getWeapon();
  fighter2.getWeapon();

  //resets health at battle start
  resetHealth(fighter1, fighter2);
  console.log('Let the battle begin!');

  //main fight code, runs until one fighter is defeated
  //prevents duplicate event listeners
  if (firstBattle === true) {
    attackButtonTrigger.addEventListener("click", fighterAttacks(fighter1, fighter2));
    compAttackButtonTrigger.addEventListener("click", fighterAttacks(fighter2, fighter1));
    blockButtonTrigger.addEventListener("click", blockAttack(fighter1));
    compBlockButtonTrigger.addEventListener("click", blockAttack(fighter2));
    //open up special abilities list
    specialAbilitiesButtonTrigger.addEventListener("click", function(){
      attackButtonTrigger.classList.toggle('remove');
      getDivButton.classList.toggle('remove');
    });
    getSpecialAbilities(fighter1, fighter2);
    getSpecialAbilities(fighter2, fighter1);
  }

  firstBattle = false;

}

/*=========================================
ABILITIES
===========================================*/

/*=========================
Innate Abilities
===========================*/

function dodgeMe(attacker, dodger) {
  var dodgeProfessions = ['Assassin', 'assassin', 'Illusionist', 'illusionist'];

  if (dodgeProfessions.indexOf(dodger.profession) >= 0) {
    var dodgePercentModifier = 4;
    var dodge = Math.floor(Math.random() * (Math.floor(dodgePercentModifier)-Math.ceil((0))) + Math.ceil((0)));
    if (dodge === 0) {
      attacker.attack = 0;
      attacker.magicAttack = 0;
      if (dodgeProfessions.indexOf(dodger.profession) >= 2) {
        dodger.magicPower += 10;
        console.log('Now time for my magic counter!')
      }
    }
  }
}

function spellBreak(attacker, breaker) {
    if ((breaker.type === 'physical') && ((breaker.profession !== 'Assassin') || (breaker.profession !== 'assassin'))) {
      var spellBreakPercentageModifier = 5;
      var spellBreak = Math.floor(Math.random() * (Math.floor(spellBreakPercentageModifier)-Math.ceil((0))) + Math.ceil((0)));
      if (spellBreak === 0) {
        attacker.magicAttack = 0;
      }
    }
}

function warlockInnate(warlock) {
  if ((warlock.life <= 0) || (warlock.health <= 0)) {
    var warlockRevivePercentModifier = 10;
    var warlockReviveChance = Math.floor(Math.random() * (Math.floor(warlockRevivePercentModifier)-Math.ceil((0))) + Math.ceil((0)));
    if (warlockReviveChance === 0) {
      if (warlock.health <= 0) {
        warlock.health = (warlock.baseHealth + warlock.healthModifier)*.10;
        console.log("DEATH WILL NOT TAKE ME!!! I AM IT'S MASTER!!!");
      } else if (warlock.life <= 0) {
        warlock.life = ((warlock.baseHealth + warlock.healthModifier)+(warlock.baseArmor + warlock.armorModifier))*.10;
        console.log("DEATH WILL NOT TAKE ME!!! I AM IT'S MASTER!!!");
      }
    }

  }
}

/*=================================
special abilities
===================================*/

//creates special abilities button
function getSpecialAbilities(fighter, opponent){
  var listOfSuperPowerFunctions = [berserkerRage, armorUp, powerUp, hiltBash, backstab, fireball, fireblast, magicShield, heal, drain, curse, sacrifice];
  for (var i = 0; i < fighter.superPowers.length; i++) {
    var specialAbility = document.createElement('button');
    specialAbility.textContent = fighter.superPowers[i];
    specialAbility.className += " "+fighter.superPowers[i];
    getDivButton.appendChild(specialAbility);
    for (var j = 0; j < listOfSuperPowerFunctions.length; j++) {
      if (specialAbility.classList.contains(listOfSuperPowerFunctions[j].name)) {
        specialAbility.addEventListener('click', listOfSuperPowerFunctions[j](fighter, opponent));
      }
    }

  }
}

function berserkerRage(attacker, opponent) {
  return function () {
    if ((attacker.profession === 'Berserker') || (attacker.profession === 'berserker')) {
      console.log('this ability is berserker rage');
      attacker.attackPower += 20;
      opponent.attackPower += 20;
      if (opponent.type === 'magical') {
        opponent.magicPower += 10;
      }
    }
  }
}

function armorUp(attacker, defender) {
  return function () {
    console.log('this ability is armorUp');
    attacker.life += 10;
  }
}

function powerUp(attacker, defender) {
  return function () {
    console.log('this ability is powerUp');
    attacker.attackPower += 10;
  }
}

function hiltBash(attacker, defender) {
  return function () {
    console.log('this ability is hiltBash');
    attacker.attackPower += 10;
  }
}


function backstab(attacker, defender) {
  return function () {
    console.log('this ability is backstab');
    attacker.attackPower += 10;
  }
}

function fireball(attacker, defender) {
  return function () {
    console.log('this ability is fireball');
  }
}

function fireblast(attacker, defender) {
  return function () {
    console.log('this ability is fireblast');
  }
}

function magicShield(attacker, defender) {
  return function () {
    console.log('this ability is magic shield');
  }
}

function heal(attacker, defender) {
  return function () {
    console.log('this ability is heal');
  }
}

function drain(attacker, defender) {
  return function(){
    console.log('this ability is drain');
    if (attacker.profession === 'Warlock' || attacker.profession === 'warlock') {
      attacker.life += 10;
      attacker.health += 10;
      defender.life -= 10;
      defender.health -= 10;
    } else {
      console.log("YOU CAN'T USE THAT ABILITY")
    }
  }

}

function curse(attacker, defender) {
  return function(){
    console.log('this ability is curse');
  }
}

function sacrifice(attacker, defender) {
  return function(){
    console.log('this ability is sacrifice');
  }
}

/*===============================
Battle Mechanics
================================*/

//if (fighter2 === magical) //attacks
function battleResolution(attacker, opponent) {
  if (attacker.type === 'magical') {
    if (!(attacker.magicAttack === 0)) {
    opponent.health -= attacker.magicAttack;
    console.log(attacker.name + ' burns ' + opponent.name + ' for ' + attacker.magicAttack);
    } else {
      var dodgeProfessions = ['Assassin', 'assassin', 'Illusionist', 'illusionist'];
      if (dodgeProfessions.indexOf(opponent.profession) >= 0) {
        console.log(opponent.name + " dodged " + attacker.name + "'s attack!");
      }else{
        console.log(opponent.name + " broke " + attacker.name + "'s spell!");
      }
    }

  } else if (attacker.type === 'physical') {
    if (!(attacker.attack === 0)) {
    opponent.life -= attacker.attack;
    console.log(attacker.name + ' damages ' + opponent.name + ' for ' + attacker.attack);
    } else {
      var dodgeProfessions = ['Assassin', 'assassin', 'Illusionist', 'illusionist'];
      if (dodgeProfessions.indexOf(opponent.profession) >= 0) {
        console.log(opponent.name + " dodged " + attacker.name + "'s attack!");
      }
    }

  }
}

function battleEnd(fighter1, fighter2) {
  //determines who the winner is after one player's life or health has been depleted
  if (((fighter1.life <= 0) || (fighter1.health <= 0)) && ((fighter2.life > 0) && (fighter2.health > 0))) {
    console.log(fighter2.name + " wins!!!");
    resetHealth(fighter1, fighter2);
  } else if (((fighter2.life <= 0) || (fighter2.health <= 0)) && ((fighter1.life > 0) && (fighter1.health > 0))) {
    console.log(fighter1.name + " wins!!!");
    resetHealth(fighter1, fighter2);
  } else if (((fighter1.life <= 0) || (fighter1.health <= 0)) && ((fighter2.life <= 0) || (fighter2.health <= 0))) {
    console.log("Both fighters have passed out!!! It's a draw!!!");
    resetHealth(fighter1, fighter2);
  }
}

function resetHealth(fighter1, fighter2) {
  //resets player's lives and defensive stats after battle
  fighter1.health = fighter1.baseHealth + fighter1.healthModifier;
  fighter2.health = fighter2.baseHealth + fighter2.healthModifier;
  fighter1.armor = fighter1.baseArmor + fighter1.armorModifier;
  fighter2.armor = fighter2.baseArmor + fighter2.armorModifier;
  fighter1.life = fighter1.health + fighter1.armor;
  fighter2.life = fighter2.health + fighter2.armor;
}

function opponentHealthCheck(opponent) {
  console.log("Opponent's current health is: " + opponent.health);
  console.log("Opponent's current life is: " + opponent.life);
}

function fighterAttacks(attacker, defender) { //
  return function(){
    //attackButtonTrigger.removeEventListener("click", arguments.callee);
    if (((attacker.life > 0) && (attacker.health > 0)) && ((defender.life > 0) && (defender.health > 0))) {
      attacker.attack = Math.floor(Math.random() * (Math.floor(attacker.attackPower)-Math.ceil((attacker.attackPower - attackSpread))) + Math.ceil((attacker.attackPower - attackSpread)));
      attacker.magicAttack = Math.floor(Math.random() * (Math.floor(attacker.magicPower)-Math.ceil((attacker.magicPower - attackSpread))) + Math.ceil((attacker.magicPower - attackSpread)));
      if (attacker.type === 'physical') {
          dodgeMe(attacker, defender);
          battleResolution(attacker, defender);
          battleEnd(attacker, defender);
      } if (attacker.type === 'magical') {
          spellBreak(attacker, defender);
          dodgeMe(attacker, defender);
          battleResolution(attacker, defender);
          battleEnd(attacker, defender);
        }
    }
  }


}

function blockAttack(defender) {
  return function () {
    if (defender.type === 'physical') {
      defender.life += 30;
      console.log(defender.life);
    }
  }

}

/* ========================
INTERACTION PORTION
===========================*/
if (buttonFightTrigger && heroNameInput && heroProfessionInput) {

  buttonFightTrigger.addEventListener("click", function() {
    // var heroName = heroNameInput.value;
    // var heroProfession = heroProfessionInput.value;
    var heroName = 'hero';
    var heroProfession = 'battle mage';
    var heroSlogan = 'foo';
    var hero = new Fighter(heroName, heroSlogan, heroProfession);
    heroStore = hero;
    var opponents = [kurt, dawn, jesse, jay, amy, john];
    var opponent = opponents[0];
    // console.log(heroName + heroProfession);
    battle(hero, opponent);
    console.log(hero.weapon);
  });
}


// function deleteEventListener(){
//   attackButtonTrigger.removeEventListener("click", combatants);
// }

class Fighter {
  constructor(name, slogan, profession){
    //properties shared by all professions
    this.name = name;
    this.slogan = slogan;
    this.profession = profession;
    this.baseHealth = 200;
    this.baseArmor = 10;
    this.physArmor = 50;
    this.magicalArmor = 10;
    this.physHealthModifier = 20;
    this.magicalHealthModifier = 20;

    //calculates main stats based on profession
    if (profession === 'Berserker' || profession === 'berserker') {
      this.basePower = 30;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier;
      this.superPowers = 'Berserker Mode';
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
      this.superPowers = 'armorUp';
    } else if (profession === 'Assassin' || profession === 'assassin') {
      this.basePower = 30;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = 'backstab';
    } else if (profession === 'Blast Mage' || profession === 'blast mage') {
      this.basePower = 0;
      this.baseMagicPower = 50;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier;
      this.superPowers = ['fireball', 'fireblast', 'magic shield'];
    } else if (profession === 'Cleric' || profession === 'cleric') {
      this.basePower = 0;
      this.baseMagicPower = 20;
      this.armorModifier = this.magicalArmor;
      this.healthModifier = this.magicalHealthModifier + 10;
      this.superPowers = ['fireball', 'heal', 'magic shield'];
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
      this.superPowers = ['fireball', 'magic shield'];
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


  //function called to give each fighter a random weapon at battle-start
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
    console.log("Every sword needs a shield!")
  } else if (((this.profession === 'Assassin') || (this.profession === 'assassin')) && (this.weapon === 'dagger')) {
    this.weaponPower += 50;
    console.log("A sword is made for battle. A dagger for killing")
  } else if (((this.profession === 'Blast Mage') || (this.profession === 'blast mage')) && (this.weapon === 'wand')) {
    this.weaponPower += 50;
    console.log("The wand is mightier than the sword!")
  } else if (((this.profession === 'Battle Mage') || (this.profession === 'battle mage')) && (this.weapon === 'wand')) {
    //include magic shield in superPowers
    console.log('If my wand is my sword, my mind is my shield.')
  }

  //recalculates weapon and magic power taking into account after weapons are received
  this.attackPower = this.basePower + this.weaponPower;
  this.magicPower = this.baseMagicPower + this.weaponMagicPower;
}
}

//creates the different fighters
var kurt = new Fighter('Kurt', 'hello', "berserker");
var dawn = new Fighter('Dawn', 'goodbye', 'brawler');
var jesse = new Fighter('Jesse', 'goodday', 'assassin');
var jay = new Fighter('Jay', 'and a goodday to you', 'assassin');
var john = new Fighter('John', 'hi', 'warlock');
var amy = new Fighter('Amy', 'argh matey', 'illusionist');



//function used to initiate battle between the fighters passed in as arguments
function battle(fighter1, fighter2) {
  console.log(fighter1.slogan);
  console.log(fighter2.slogan);

  //gives each fighter a random weapon to fight with
  fighter1.getWeapon();
  fighter2.getWeapon();

  //main fight code, runs until one fighter is defeated
  while (((fighter1.life > 0) && (fighter1.health > 0)) && ((fighter2.life > 0) && (fighter2.health > 0))) {
    var attackSpread = 15;
    fighter1.attack = Math.floor(Math.random() * (Math.floor(fighter1.attackPower)-Math.ceil((fighter1.attackPower - attackSpread))) + Math.ceil((fighter1.attackPower - attackSpread)));
    fighter2.attack = Math.floor(Math.random() * (Math.floor(fighter2.attackPower)-Math.ceil((fighter2.attackPower - attackSpread))) + Math.ceil((fighter2.attackPower - attackSpread)));
    fighter1.magicAttack = Math.floor(Math.random() * (Math.floor(fighter1.magicPower)-Math.ceil((fighter1.magicPower - attackSpread))) + Math.ceil((fighter1.magicPower - attackSpread)));
    fighter2.magicAttack = Math.floor(Math.random() * (Math.floor(fighter2.magicPower)-Math.ceil((fighter2.magicPower - attackSpread))) + Math.ceil((fighter2.magicPower - attackSpread)));
    if (fighter2.type === 'physical') {
      dodgeMe(fighter1, fighter2);
      battleResolution(fighter2, fighter1);
  } if (fighter1.type === 'physical') {
      dodgeMe(fighter2, fighter1);
      battleResolution(fighter1, fighter2);
      opponentHealthCheck(fighter2);
      warlockInnate(fighter2);
      opponentHealthCheck(fighter2);
  } if (fighter2.type === 'magical') {
      spellBreak(fighter1, fighter2);
      dodgeMe(fighter1, fighter2);
      battleResolution(fighter2, fighter1);
  } if (fighter1.type === 'magical') {
      spellBreak(fighter2, fighter1);
      dodgeMe(fighter2, fighter1);
      battleResolution(fighter1, fighter2);
  }
}

  //determines who the winner is after one player's life or health has been depleted
  if (((fighter1.life <= 0) || (fighter1.health <= 0)) && ((fighter2.life > 0) && (fighter2.health > 0))) {
    console.log(fighter2.name + " wins!!!");
  } else if (((fighter2.life <= 0) || (fighter2.health <= 0)) && ((fighter1.life > 0) && (fighter1.health > 0))) {
    console.log(fighter1.name + " wins!!!");
  } else {
    console.log("Both fighters have passed out!!! It's a draw!!!");
  }

  //resets player's lives and defensive stats after battle
  fighter1.health = fighter1.baseHealth + fighter1.healthModifier;
  fighter2.health = fighter2.baseHealth + fighter2.healthModifier;
  fighter1.armor = fighter1.baseArmor + fighter1.armorModifier;
  fighter2.armor = fighter2.baseArmor + fighter2.armorModifier;
  fighter1.life = fighter1.health + fighter1.armor;
  fighter2.life = fighter2.health + fighter2.armor;
}

function dodgeMe(dodger, opponent) {
  var dodgeProfessions = ['Assassin', 'assassin', 'Illusionist', 'illusionist'];

  if (dodgeProfessions.indexOf(dodger.profession) >= 0) {
    var dodgePercentModifier = 4;
    var dodge = Math.floor(Math.random() * (Math.floor(dodgePercentModifier)-Math.ceil((0))) + Math.ceil((0)));
    if (dodge === 0) {
      opponent.attack = 0;
      opponent.magicAttack = 0;
      if (dodgeProfessions.indexOf(dodger.profession) >= 2) {
        dodger.magicPower += 10;
        console.log('Now time for my magic counter!')
      }
    }
  }
}

function spellBreak(breaker, opponent) {
    if ((breaker.type === 'physical') && ((breaker.profession !== 'Assassin') || (breaker.profession !== 'assassin'))) {
      var spellBreakPercentageModifier = 5;
      var spellBreak = Math.floor(Math.random() * (Math.floor(spellBreakPercentageModifier)-Math.ceil((0))) + Math.ceil((0)));
      if (spellBreak === 0) {
        opponent.magicAttack = 0;
      }
    }
}

//if (fighter2 === magical) //attacks
function battleResolution(attacker, opponent) {
  if (attacker.type === 'magical') {
    if (!(attacker.magicAttack === 0)) {
    opponent.health -= attacker.magicAttack;
    console.log(attacker.name + ' burns ' + opponent.name + ' for ' + attacker.magicAttack);
    } else {
      var dodgeProfessions = ['Assassins', 'assassins', 'Illusionist', 'illusionist'];
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

function opponentHealthCheck(opponent) {
  console.log("Opponent's current health is: " + opponent.health);
  console.log("Opponent's current life is: " + opponent.life);
}

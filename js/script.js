class Fighter {
  constructor(name, slogan, profession){
    this.name = name;
    this.slogan = slogan;
    this.profession = profession;
    this.baseHealth = 50;
    this.baseArmor = 10;
    this.physArmor = 20;
    this.magicalArmor = 10;
    this.physHealthModifier = 20;
    this.magicalHealthModifier = 20;

    if (profession === 'Berserker' || profession === 'berserker') {
      this.basePower = 30;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier;
      this.superPowers = 'Berserker Mode'
    } else if (profession === 'Brawler' || profession === 'brawler') {
      this.basePower = 10;
      this.armorModifier = this.physArmor;
      this.healthModifier = this.physHealthModifier
      this.superPowers = ['armorUp', 'powerUp']
    } else if (profession === 'Fighter' || profession === 'fighter') {

    } else if (profession === 'Warrior' || profession === 'warrior') {

    } else if (profession === 'Assassin' || profession === 'assassin') {

    } else if (profession === 'Blast Mage' || profession === 'blast mage') {

    } else if (profession === 'Cleric' || profession === 'cleric') {

    } else if (profession === 'Battle Mage' || profession === 'battle mage') {

    } else if (profession === 'Illusionist' || profession === 'illusionist') {

    } else if (profession === 'Warlock' || profession === 'warlock') {

    }
    this.health = this.baseHealth + this.healthModifier;
    this.armor = this.baseArmor + this.armorModifier;
    this.life = this.health + this.armor;
  }

  getWeapon() {
   var weaponNumber = Math.floor(Math.random() * (Math.floor(5)-Math.ceil(0)) + Math.ceil(0));

   if (weaponNumber === 0) {
    this.weapon = 'bare knuckles';
    this.weaponPower = 0;
    this.magicPower = 0;
  } else if (weaponNumber === 1) {
    this.weapon = 'wand';
    this.weaponPower = 10;
    this.magicPower = 30;
  } else if (weaponNumber === 2) {
    this.weapon = 'dagger';
    this.weaponPower = 30;
    this.magicPower = 0;
  } else if (weaponNumber === 3) {
    this.weapon = 'sword';
    this.weaponPower = 40;
    this.magicPower = 0;
  } else if (weaponNumber === 4) {
    this.weapon = 'greatsword';
    this.weaponPower = 50;
    this.magicPower = 0;
  }

  //call weapon based inate powers here
  if (((this.profession === 'Berserker') || (this.profession === 'berserker')) && (this.weapon === 'greatsword')) {
    this.weaponPower += 20;
    console.log('Imma tear you up!');
  } else if ((this.profession === 'Brawler' || this.profession === 'Brawler') && (this.weapon === 'bare knuckles')) {
    this.weaponPower += 50;
    console.log("It's bare knuckle time!");
  } else if (((this.profession === 'Warrior') || (this.profession === 'warrior')) && (this.weapon === 'sword')) {
    this.armor += 10;
  }

  }
}



var kurt = new Fighter('Kurt', 'hello', "berserker");
var dawn = new Fighter('Dawn', 'goodbye', 'brawler');

function battle(fighter1, fighter2) {
  console.log(fighter1.slogan);
  console.log(fighter2.slogan);
  fighter1.getWeapon();
  fighter2.getWeapon();
  while ((fighter1.life > 0) && (fighter2.life > 0)) {
    fighter1.life -= fighter2.weaponPower;
    fighter2.life -= fighter1.weaponPower;
  }

  if ((fighter1.life <= 0) && (fighter2.life > 0)) {
    console.log(fighter2.name + " wins!!!");
  } else if ((fighter2.life <= 0) && (fighter1.life > 0)) {
    console.log(fighter1.name + " wins!!!");
  } else {
    console.log("Both fighters have passed out!!! It's a draw!!!");
  }

  fighter1.life = 50 + fighter1.armor;
  fighter2.life = 50 + fighter2.armor;
}

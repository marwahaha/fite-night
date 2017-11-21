class Fighter {
  constructor(name, slogan, armorModifier, superPower1, superPower2, superPower3){
    this.name = name;
    this.slogan = slogan;
    this.superPowers = [superPower1, superPower2, superPower3];
    this.baseLife = 50;
    this.armorModifier = armorModifier;
    this.armor = 10 + this.armorModifier;
    this.life = this.baseLife + this.armor;
  }

  getWeapon() {
   var weaponNumber = Math.floor(Math.random() * (Math.floor(4)-Math.ceil(1)) + Math.ceil(1));

   if (weaponNumber === 1) {
    this.weapon = 'mop';
    this.weaponPower = 10;
  } else if (weaponNumber === 2) {
    this.weapon = 'chair';
    this.weaponPower = 20;
   } else {
    this.weapon = 'ladder';
    this.weaponPower = 30;
   }
  }

}

var kurt = new Fighter('Kurt', 'hello', 5);
var dawn = new Fighter('Dawn', 'goodbye', 5);

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

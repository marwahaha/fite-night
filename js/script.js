class Fighter {
  constructor(name, slogan, superPowers, armorModifier){
    this.name = name;
    this.slogan = slogan;
    this.superPowers = [ ];
    this.life = 100;
    this.armor = 100;
  }

  getWeapon() {
   var weaponNumber = Math.floor(Math.random() * (Math.floor(4)-Math.ceil(1)) + Math.ceil)

   if (weaponNumber === 1) {
    this.weapon = 'mop';
  } else if (weaponNumber === 2) {
    this.weapon = 'chair';
   } else {
    this.weapon = 'ladder';
   }
  }
}

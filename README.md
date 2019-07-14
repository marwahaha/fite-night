# WELCOME TO FITE NIGHT!!!

## This project is a work in progress

This program was intended to be a rpg fighting simulator, with 10 different professions (classes) users can choose from.

The different professions can be broken down into physical and magical classes, with physical professions utilizing attack power and having higher starting health and armor than magical professions, which use magic power. Each profession has a set of abilities, some unique to the profession type and some unique to the specific profession, that they can utilize in battle, ranging from an increase in attack/magic power, an increase in armor, healing and so forth.

### Note: special abilities have not been implemented yet.

The goal of the battle is to decrease your opponents life points by either attacking directly or by using special abilities. Physical professions have to decrease their opponents health and armor down to 0, while magic profession's abilities ignore armor and just have to decrease an opponents health down to 0.

Below are the current professions.

### All abilities in italics are yet to be implemented

### Physical Professions:

- Berserker: high attack, medium armor, medium health
          1 special ability: increase your own weaponPower x2, increase enemy weaponPower x2 (or increase magicPower x1.5)
          innate ability: If given a greatsword, weaponPower is increased

- Brawler: low attack, medium armor, medium health
        2 special abilities: increase weaponPower; increase armor
        innate ability: If given no weapon, weaponPower is increased x2

- Fighter: medium attack, medium armor, high health                            
        1 special ability: increase weaponPower

- Warrior: medium attack, medium armor, medium health
        1 special ability: increase armor
        innate ability: If given a sword, armor is increased x1.5

- Assassin: high attack, low armor, low health
        1 special ability: backstab (deals X damage, damage determined by RNG)
        2 innate abilities: If given a dagger, weaponPower is increased; has a 20% chance to dodge any attack

### Magical Professions:

*All mages have a finite amount of mana and all magic special abilities will have a mana cost.* In addition, although magic attacks and special abilities ignore armor, as long as a physical profession type has armor, they have a 20% chance to spellbreak, negating any damage done.

- Blast Mage: high magic attack, low armor, low health
        2 special abilities: fireblast (high damage, high cost); magic shield (increases armor, medium cost)
        innate abilities: If given wand, fireblast mana cost /2

- Cleric: low magic attack, low armor, medium health
        2 special abilities: heal (restores health, medium cost), magic shield (increases armor, medium cost)

- Battle Mage: medium magic attack, low attack, medium armor, low health
        (1 special ability: fireblast (high damage, high cost)
        2 innate abilities: If given wand, can use magic shield (increases armor, medium cost) as a special ability; *half of magic attack is done to armor*

- Illusionist: medium magic attack, low armor, low health
        1 special ability: magic shield (increases armor, medium cost)
        innate ability: 20$ chance to "evade"(dodge) any attack. If an attack is evaded, magicPower is increased

- Warlock: medium magic attack, low armor, medium health
        3 special abilities: sacrifice (converts own health to magicPower); curse (constantly damage enemies health by a small amount); drain (damages enemies health by a small amount, restores own health by a small amount)
        innate ability: 10% chance of surviving a killing blow and restoring 10% of total health afterwards.

  As you can see, there is still a lot yet to be implemented, and this project is still a work in progress.

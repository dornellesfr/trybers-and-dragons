import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this._dexterity = Math.ceil(Math.random() * 9);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.ceil(Math.random() * 9);
    this._defense = Math.ceil(Math.random() * 9);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.ceil(Math.random() * 9),
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }
  
  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this.defense;

    if (damage <= 0) { damage = 1; }

    if ((this._lifePoints - damage) <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }

    this._lifePoints -= damage;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    const newMaxCharLife = this._maxLifePoints + Math.ceil(Math.random() * 9);
    const raceMaxLife = this._race.maxLifePoints;

    if (newMaxCharLife > raceMaxLife) {
      this._maxLifePoints = raceMaxLife;
    } else {
      this._maxLifePoints += Math.ceil(Math.random() * 9);
    }
    
    this._strength += Math.ceil(Math.random() * 9);
    this._dexterity += Math.ceil(Math.random() * 9);
    this._defense += Math.ceil(Math.random() * 9);
    this._energy.amount = 10;

    this._lifePoints = this._maxLifePoints;
  }
}
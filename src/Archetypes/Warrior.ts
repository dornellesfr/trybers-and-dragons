import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetypes {
  public static coutingInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Warrior.coutingInstances += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return this.coutingInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
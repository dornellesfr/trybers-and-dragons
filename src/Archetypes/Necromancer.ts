import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  public static coutingInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Necromancer.coutingInstances += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return this.coutingInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
import Race from './Race';

export default class Dwarf extends Race {
  public healthPoints: number;
  public static coutingInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.healthPoints = 80;
    Dwarf.coutingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this.healthPoints;
  }

  public static createdRacesInstances(): number {
    return this.coutingInstances;
  }
}
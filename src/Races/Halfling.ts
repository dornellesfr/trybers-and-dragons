import Race from './Race';

export default class Halfling extends Race {
  public healthPoints: number;
  public static coutingInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.healthPoints = 60;
    Halfling.coutingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this.healthPoints;
  }

  public static createdRacesInstances(): number {
    return this.coutingInstances;
  }
}
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType = 'mana';
  constructor(name: string) {
    super(name);
    Necromancer._count += 1;
  }
  
  static createdArchetypeInstances():number {
    return Necromancer._count;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}

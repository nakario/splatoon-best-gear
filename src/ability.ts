export interface Ability {
  primaryAbilities: number;
  secondaryAbilities: number;
};

export function power(a: Ability): number {
  return a.primaryAbilities * 10 + a.secondaryAbilities * 3;
};

export class Powers {
  main: number;
  sub: number;
  constructor(main: Ability, sub: Ability) {
    this.main = power(main);
    this.sub = power(sub);
  }
};

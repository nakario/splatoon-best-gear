import { Ability, Powers } from "@/ability";

export function combinations(): Powers[] {
  interface Abilities {
    main: number;
    sub: number;
  }
  const primaryAbilities: Abilities[] = [];
  for (let sum = 0; sum <= 3; sum++) {
    for (let main = 0; main <= sum; main++) {
      const sub = sum - main;
      primaryAbilities.push({ main: main, sub: sub });
    }
  }
  const secondaryAbilities: Abilities[] = [];
  for (let sum = 0; sum <= 9; sum++) {
    for (let main = 0; main <= sum; main++) {
      const sub = sum - main;
      secondaryAbilities.push({ main: main, sub: sub });
    }
  }
  const powersArr: Powers[] = [];
  for (const p of primaryAbilities) {
    for (const s of secondaryAbilities) {
      const main: Ability = {
        primaryAbilities: p.main,
        secondaryAbilities: s.main
      };
      const sub: Ability = {
        primaryAbilities: p.sub,
        secondaryAbilities: s.sub
      };
      powersArr.push(new Powers(main, sub));
    }
  }
  return powersArr;
}

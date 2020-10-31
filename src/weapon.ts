import { Action, MainAction, SubAction } from "@/action";

export interface Weapon {
  text: string;
  actions(): Action[];
}

class WeaponImpl implements Weapon {
  text: string;
  main: () => Action[];
  sub: () => Action;
  constructor(text: string, main: () => Action[], sub: () => Action) {
    this.text = text;
    this.main = main;
    this.sub = sub;
  }
  actions(): Action[] {
    return [...this.main(), this.sub()];
  }
}

// main weapons

function variable(): Action[] {
  return [new MainAction("横振り", 8, 2), new MainAction("縦振り", 12, 2)];
}

function kelvin(): Action[] {
  return [new MainAction("メイン", 1.5, 2), new MainAction("スライド", 8, 2)];
}

// sub weapons

function kyuban(): Action {
  return new SubAction("キューバンボム", 70, 1);
}

function tansan(): Action {
  return new SubAction("タンサンボム", 60, 3);
}

// all weapons

export function allWeapons(): Weapon[] {
  return [
    new WeaponImpl("ヴァリアブルローラーフォイル", variable, kyuban),
    new WeaponImpl("ケルビン525ベッチュー", kelvin, tansan)
  ];
}

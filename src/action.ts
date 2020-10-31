import { Powers } from "@/ability";
import {
  mainInkGroup,
  mainInkUsePercentage,
  subInkGroup,
  subInkUsePercentage
} from "@/system";

export interface Action {
  readonly text: string;
  count: number;
  inkUsePercentage(p: Powers, additional: number): number;
}

class BaseAction<G> {
  readonly text: string;
  readonly base: number;
  readonly group: G;
  count = 0;
  constructor(text: string, base: number, group: G) {
    this.text = text;
    this.base = base;
    this.group = group;
  }
  increment() {
    this.count += 1;
  }
  decrement() {
    this.count = Math.max(0, this.count - 1);
  }
}

export class MainAction extends BaseAction<mainInkGroup> implements Action {
  inkUsePercentage(p: Powers, additional: number): number {
    return mainInkUsePercentage(this.base, p.main + additional, this.group);
  }
}

export class SubAction extends BaseAction<subInkGroup> implements Action {
  inkUsePercentage(p: Powers, additional: number): number {
    return subInkUsePercentage(this.base, p.sub + additional, this.group);
  }
}

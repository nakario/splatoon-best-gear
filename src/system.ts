export type mainInkGroup = 1 | 2 | 3

export function mainInkUsePercentage(
  base: number,
  abilityPoint: number,
  group: mainInkGroup
): number {
  const ap = abilityPoint;
  const g = [0.5, 0.45, 0.4][group-1];
  const m = group == 1 ? Math.log(0.6) / Math.log(0.5) : 1
  const x = 1 - g * Math.pow(0.033 * ap - 0.00027 * ap * ap, m);
  return base * x;
}

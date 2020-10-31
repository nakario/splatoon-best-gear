import { mainInkUsePercentage, subInkUsePercentage } from "@/system";

describe("system.ts", () => {
  it("calculates main ink usage", () => {
    const a: number = mainInkUsePercentage(10, 0, 1);
    expect(a).toBeCloseTo(10, 0);
    const b = mainInkUsePercentage(20, 3, 1);
    expect(b).toBeCloseTo(18.22, 0);
    expect(mainInkUsePercentage(10, 20, 1)).toBeCloseTo(6.78, 0);
    expect(mainInkUsePercentage(10, 57, 1)).toBeCloseTo(5, 0);
    expect(mainInkUsePercentage(10, 0, 2)).toBeCloseTo(10, 0);
    expect(mainInkUsePercentage(10, 3, 2)).toBeCloseTo(9.57, 0);
    expect(mainInkUsePercentage(10, 20, 2)).toBeCloseTo(7.52, 0);
    expect(mainInkUsePercentage(10, 57, 2)).toBeCloseTo(5.5, 0);
  });
  it("calculates sub ink usage", () => {
    const a: number = subInkUsePercentage(10, 0, 1);
    expect(a).toBeCloseTo(10, 0);
    expect(subInkUsePercentage(75, 3, 1)).toBeCloseTo(72.1, 0);
    expect(subInkUsePercentage(60, 20, 1)).toBeCloseTo(46.8, 0);
    expect(subInkUsePercentage(75, 57, 1)).toBeCloseTo(45, 0);
    expect(subInkUsePercentage(70, 6, 2)).toBeCloseTo(65.3, 0);
    expect(subInkUsePercentage(55, 30, 3)).toBeCloseTo(42.6, 0);
    expect(subInkUsePercentage(40, 9, 4)).toBeCloseTo(37.7, 0);
  });
});

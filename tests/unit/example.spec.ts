import { shallowMount } from "@vue/test-utils";
//import HelloWorld from "@/components/HelloWorld.vue";
import { mainInkUsePercentage } from "@/system";

/*describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});*/

describe("system.ts", () => {
  it("calculates ink usages", () => {
    const a: number = mainInkUsePercentage(10, 0, 1);
    expect(a).toBeCloseTo(10);
    const b = mainInkUsePercentage(20, 3, 1);
    expect(b).toBeCloseTo(18.22, 1);
    expect(mainInkUsePercentage(10, 20, 1)).toBeCloseTo(6.78, 1);
    expect(mainInkUsePercentage(10, 57, 1)).toBeCloseTo(5, 1);
    expect(mainInkUsePercentage(10, 0, 2)).toBeCloseTo(10);
    expect(mainInkUsePercentage(10, 3, 2)).toBeCloseTo(9.57, 1);
    expect(mainInkUsePercentage(10, 20, 2)).toBeCloseTo(7.52, 1);
    expect(mainInkUsePercentage(10, 57, 2)).toBeCloseTo(5.5, 1);
  });
})

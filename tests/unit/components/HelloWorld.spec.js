import HelloWorld from "../../../src/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";
describe("HelloWorld", () => {
  test("it does something", () => {
    const wrapper = mount(HelloWorld, {
      propsData: { msg: "helloworld" }
    });
    expect(wrapper.find("h1").text()).toEqual("helloworld");
  });
});

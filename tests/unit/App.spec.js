import App from "../../src/App.vue";
import { mount } from "@vue/test-utils";
describe("App", () => {
  test("it does something", () => {
    const wrapper = mount(App);
    expect(wrapper.find("h1").text()).toEqual("Hello Vue 3.0 + Vite");
  });
});

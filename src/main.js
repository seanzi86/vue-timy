import formatConfig from "./formatConfig";
import timy from "./timy.vue";

var timyConfig = {};

export default {
  install(Vue, options) {
    timyConfig = { ...formatConfig, ...options };
    Vue.component(timy.name, timy);
  }
};

export { timyConfig };

// Use automatically when global Vue instance detected
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(timy);
}

import Vue from "vue";
import App from "./App.vue";
import ResponsiveContainer from "./components/ResponsiveContainer";

Vue.config.productionTip = false;

Vue.component("demo", ResponsiveContainer);

new Vue({
  render: h => h(App)
}).$mount("#app");

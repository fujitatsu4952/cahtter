import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// -------↓追加↓-------
import awsconfig from "./aws-exports";
import aws_exports from "./aws-exports";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";

Amplify.configure(awsconfig);
Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);
// ------↑ここまで↑-----

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

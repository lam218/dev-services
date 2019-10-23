import Vue from "vue";
import VueRouter from "vue-router";
import DowTriagePoc from "./components/DowTriagePoc.vue";
import DowTriagePocNext from "./components/DowTriagePocNext.vue";
import Cases from "./components/Cases.vue";
import CaseOverview from "./components/CaseOverview.vue";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/dow-triage-poc', component: DowTriagePoc},
  { path: '/dow-triage-poc-next', name: 'dow-triage-poc-next', component: DowTriagePocNext},
  { path: '/cases', name: 'cases', component: Cases},
  { 
    path: '/case-overview', 
    name: 'case-overview', 
    component: CaseOverview,
    props: true,
  }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

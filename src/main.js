import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./containers/HelloWorld.vue";
import Arrows from "./containers/Arrows.vue";
import Animations from "./containers/MoreAnimations.vue";
import MeterInputV2 from "./containers/MeterInputV2.vue";
import KeyActions from "./components/KeyActions.vue";
import ContentScroll from "./containers/ContentScroll.vue";
import ContentScrollScss from "./containers/ContentScrollScss.vue";
import GetLocation from './containers/GetLocation.vue';
import DowTriagePoc from "./components/DowTriagePoc.vue";
import DowTriagePocNext from "./components/DowTriagePocNext.vue";
import Cases from "./components/Cases.vue";
import CaseOverview from "./components/CaseOverview.vue";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/arrows",
    component: Arrows
  },
  {
    path: "/animations",
    component: Animations
  },
  { path: "/meter-reading", component: HelloWorld },
  { path: "/meter-reading-v2", component: MeterInputV2 },
  { path: "/content-scroll", component: ContentScroll },
  { path: "/key-actions", component: KeyActions },
  { path: "/content-scroll-scss", component: ContentScrollScss },
  { path: '/get-location', component: GetLocation},
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

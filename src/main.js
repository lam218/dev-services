import Vue from "vue";
import VueRouter from "vue-router";
import DowTriagePoc from "./components/DowTriagePoc.vue";
import DowTriagePocNext from "./components/DowTriagePocNext.vue";
import Cases from "./components/Cases.vue";
import CaseOverview from "./components/CaseOverview.vue";
import GuestStep1 from "./components/payments/guest/GuestStep1.vue";
import GuestStep2 from "./components/payments/guest/GuestStep2.vue";
import GuestStep3 from "./components/payments/guest/GuestStep3.vue";
import RegisteredAppFee from "./components/payments/registered/RegisteredAppFee.vue";
import RegisteredAppQuote from "./components/payments/registered/RegisteredAppQuote.vue";
import PaymentStatusError from "./components/payments/_global/PaymentStatusError.vue";
import PaymentStatusSuccess from "./components/payments/_global/PaymentStatusSuccess.vue";


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
  },
  { path: '/payments-guest-s1', component: GuestStep1 },
  { path: '/payments-guest-s2', component: GuestStep2 },
  { path: '/payments-guest-s3', component: GuestStep3 },
  { path: '/payments-registered-fee', component: RegisteredAppFee },
  { path: '/payments-registered-quote', component: RegisteredAppQuote },
  { path: '/payments-payment-status-error', component: PaymentStatusError },
  { path: '/payments-payment-status-success', component: PaymentStatusSuccess }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

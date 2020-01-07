<template>
  <div id="app">
    <p>
      <router-link to="/dow-triage-poc" class="link">DOW triage POC</router-link>
      <router-link to="/cases" class="link">Cases</router-link>
      <router-link to="/payments-guest-s1" class="link">Payment Guest S1</router-link>
      <router-link to="/payments-guest-s2" class="link">Payment Guest S2</router-link>
      <router-link to="/payments-guest-s3" class="link">Payment Guest S3</router-link>
      <router-link to="/payments-registered-fee" class="link">Payment Registered Fee</router-link>
      <router-link to="/payments-registered-quote" class="link">Payment Registered Quote</router-link>
      <router-link to="/payments-payment-status-error" class="link">Payment Status (Error)</router-link>
      <router-link to="/payments-payment-status-success" class="link">Payment Status (Success)</router-link>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.link {
  padding: 0 20px;
}
</style>

<template>
  <div id="app">
    <p>
      <router-link to="/dow-triage-poc" class="link">DOW triage POC</router-link>
      <router-link to="/cases" class="link">Cases</router-link>
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

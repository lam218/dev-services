<template>
  <div id="app">
    <p>
      <router-link to="/arrows" class="link">Arrows</router-link>
      <router-link to="/animations" class="link">SVG animations</router-link>
      <router-link to="/meter-reading" class="link">Meter reading</router-link>
      <router-link to="/meter-reading-v2" class="link">Meter reading v2</router-link>
      <router-link to="/content-scroll" class="link">Content scroll</router-link>
      <router-link to="/content-scroll-scss" class="link">Content scroll v2</router-link>
      <router-link to="/key-actions" class="link">Key Actions CTA</router-link>
      <router-link to="/get-location" class="link">Get location</router-link>
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

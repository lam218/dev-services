<template>
  <div class="page">
    <div class="page__container">
      <h1 class="page__heading">DOW Triage POC Next Steps</h1>
      <div class="page__content">
        <div v-if="$route.params.stopApplication">
          <p>Your application cannot proceed due to:</p>
          <p></p>
          <p><b>{{this.$route.params.message}}</b></p>

          <div class="page__action" >
            <input type="button" value="Contact us"  class="button--next primary-button" />
          </div>
        </div>

        <div v-if="$route.params.directToBos">
          <p>Due to the answers you provided you are required to complete the "BOS" form...</p>
          <p></p>
          <p><b>{{this.$route.params.message}}</b></p>

          <div class="page__action" >
            <input type="button" value="Contact us"  class="button--next primary-button" />
          </div>
        </div>

        <div v-if="!$route.params.directToBos && !$route.params.stopApplication">
          <p>The next part of the form (successful progression)...</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import '../../public/main.css';

export default {
  name: "dow-triage-poc-next",
};
</script>
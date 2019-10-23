<template>
  <div class="action">
    <div class="action__content">
      <h4 class="action__title">{{ title }}</h4>
      <div class="action__description">
        {{ description }}
      </div>
    </div>
    <div class="action__actions">
      <a 
        class="button primary-button"
        href="to-do"
        v-text="status == 0 ? 'Accept and pay' : 'Pay now'"
      />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    title: String,
    description: String,
    status: String,
  }
}
</script>

<style scoped lang="scss">
.action {
  display: flex;
  flex-flow: row;
  border: 1px solid #b2c2c7;
  padding: 1.25rem;

  & + & {
    margin-top: 1.25rem;
  }

  &__content {
    flex: 2;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
  }

  &__title {
    margin: 0;
    color: #09333f;
  }

  &__description {
    margin-top: 1rem;
    font-weight: 200;
  }
}
</style>

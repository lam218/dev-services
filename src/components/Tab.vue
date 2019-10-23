<template>
  <div class="tab" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    title: {
      required: true,
      type: String,
    },
    selected: {
      default: false,
      type: Boolean,
    },
    icon: String,
    notifications: String,
    tabId: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
}
</script>

<style scoped lang="scss">
.tab {
  display: block;
  width: 100%;
}
</style>

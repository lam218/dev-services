<template>
  <div class="pagination">
    <button tabindex="0" @click="previousPage"  v-on:keyup.enter="previousPage" class="pagination__previous">
      <svg class="pagination__icon pagination__icon--previous" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z" fill="currentColor"></path>
      </svg>
    </button>
    <span class="pagination__page">Page {{ pageNumber + 1 }} of {{ pageCount }}</span>
    <button  tabindex="0" @click="nextPage" v-on:keyup.enter="nextPage"  class="pagination__next">
      <svg class="pagination__icon" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" >
        <path d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z" fill="currentColor"></path>
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    previousPage: Function,
    nextPage: Function,
    pageNumber: Number,
    pageCount: Number,
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  width: 100%;
  margin-top: 5rem;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  &__next,
  &__previous {
    width: 3.125rem;
    height: 3.125rem;
    border: 1px solid #65858f;
    border-radius: 50%;
    background-color: transparent;
    color: #0072bc;

    &:hover {
      border-color: #0072bc;
      cursor: pointer;
    }
  }

  &__page {
    display: block;
    margin: 0 3.25rem;
    font-weight: 800;
    color: #09333f;
  }

  &__icon {
    width: 1rem;
    height: 1rem;

    &--previous {
      transform: rotate(-180deg);
    }
  }
}
</style>

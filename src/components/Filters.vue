<template>
  <div class="filters">
    <button @click="toggleFilters" class="filters__toggle"> 
      <div class="cases_toggleShowing">
        Showing: <b> {{ statusMessage }}</b>
        <span v-if="searchTerm"> matching <b>{{ searchTerm }}</b></span>
      </div>
      <div class="filters__toggleLabel">
        <span class="filters__toggleLabelText">Search cases </span>
        <svg class="filters__toggleIcon" :class="{ active: showFilters }"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z" fill="currentColor"></path>
        </svg>
        </div>
    </button>
    <div class="filters__filtersBody" :class="{ active: showFilters }">
      <div class="filters__filtersContainer">
        <div class="filters__filtersCol">
          <label class="filters__label" for="searchTermInput">
            Search by name or ID:
          </label>
          <input id="searchTermInput" v-model="searchTermValue" class="input" />
        </div>
        <div class="filters__filtersCol">
          <label class="filters__label" for="searchTermInput">
            Filter by status:
          </label>
          <div class="dropdown">
            <select v-model.number="statusValue" class="dropdown__select" id="searchTermInput">
              <option value="0" selected>All cases</option>
              <option value="1">Action required</option>
              <option value="2">Pending</option>
              <option value="3">Completed</option>
              <option value="4">Cancelled</option>
              <option value="5">Rejected</option>
            </select>   
          </div>
        </div>
        <div class="filters__filtersCol">
          <button class="filters__filtersClear" v-on:click="clearFilters" v-if="showClearFilters">Clear filters</button>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    clearFilters: Function,
    toggleFilters: Function,
    searchTerm: String,
    showClearFilters: Boolean,
    showFilters: Boolean,
    status: Number,
    statusMessage: String,
  },
  data() {
    return {
      statusValue: this.status,
      searchTermValue: this.searchTerm,
    }
  },
  watch: {
    statusValue(value) {
      this.$emit('change', value, 'status');
    },
    searchTermValue(value) {
      this.$emit('change', value, 'searchTerm');
    }
  },
}
</script>

<style scoped lang="scss">
.filters {
  background-color: #ebeff1;
  overflow: hidden;

  &__filtersBody {
    position: relative;
    height: 0;
    max-height: 500px;
 
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: calc(100% - 2.5rem);
      height: 1px;
      left: 1.25rem;
      top: 0;
      background-color: #b2c2c7;
    }

    &.active {
      height: auto;
    }
  }

  &__filtersContainer {
    display: flex;
    flex-flow: row wrap;
    padding: 1.25rem;
    margin: 0 -0.5rem;
  }

  &__filtersCol {
    display: flex;
    flex-flow: column;
    width: 100%;
    padding: 0 0.5rem;

    @media(max-width: 767px) {
      & + & {
        margin-top: 0.5rem;
      }
    }

    @media (min-width: 768px) {
      width: 33.3333%;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }

  &__label {
    flex: 0 0 auto;
    width: 100%;

    & + * {
      margin-top: 0.5rem;
    }
  }

  &__filtersClear {
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    overflow: visible;
    font-weight: 600;
    color: #09333f;
    background: transparent;
  }

  &__toggle {
    position: relative;
    display: flex;
    flex-flow: column;
    border: none;
    margin: 0;
    padding: 1rem;
    width: 100%;
    cursor: pointer;
    overflow: visible;
    background: transparent;

    @media (max-width: 767px) {
      padding-right: 2.5rem;
    }

    @media (min-width: 768px) {
      justify-content: space-between;
      align-items: center;
      flex-flow: row;
    }

    &:focus {
      outline-color: transparent;
    }
  }

  &__toggleLabel {
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__toggleLabelText {
    font-weight: 800;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__toggleIcon {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0;
    margin-left: 0.25rem;
    transform: rotate(90deg);

    &.active {
      transform: rotate(270deg);
    }
  }
}
</style>

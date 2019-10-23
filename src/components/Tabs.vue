<template>
  <div class="tabs">
    <ul class="tabs__navigation">
      <li
        class="tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: tab.isActive }"
      >
        <a
          class="tabs__link"
          @click="selectTab(tab)"
        >
          <div class="tabs__linkPre">
            <span v-if="tab.icon"  v-html="tab.icon" />
            <span class="tabs__notifications" v-if="tab.notifications" v-text="tab.notifications" />
          </div>
          {{ tab.title }}
        </a>
      </li>
    </ul>
    <div class="tabs__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.tabId === selectedTab.tabId);
      });
    }
  }
}
</script>

<style lang="scss">
.tabs {
  display: flex;
  flex-flow: column;

  &__navigation {
    display: flex;
    flex-flow: row;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #b2c2c7;
  }

  &__item {
    position: relative;
    display: block;
    margin: 0;
    flex: 0 0 auto;
    border: 1px solid #ffffff;
    border-bottom: none;
    font-weight: 800;
    background-color: #f5f7f8;
    color: #09333f;
    transition: ease-in-out background-color 0.25s;

    &::before {
      display: none;
    }

    &:hover {
      background-color: darken(#f5f7f8, 5%);

      .tabs__link {
        color: #09333f;
      }
    }

    &.active {
      background-color: #ffffff;
      color: #0072bc;
      border-left-color: #b2c2c7;
      border-right-color: #b2c2c7;
      border-top-color: #b2c2c7;
      box-shadow: 0 1px 0px 0px #ffffff;
    }
  }

  &__link {
    display: flex;
    flex-flow: row;
    height: 100%;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }

  &__linkPre {
    position: relative;
    margin-right: 0.75rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__notifications {
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: 800;
    font-size: 0.75rem;
    background-color: #f15f56;
    color: #ffffff;
    transform: translate(25%, -25%);
  }

  &__body {
    width: 100%;
    min-height: 10rem;
    margin: 3.125rem auto 0 auto;

    @media (min-width: 768px) {
      max-width: 80%;
    }
  }
}
</style>

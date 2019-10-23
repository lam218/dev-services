<template>
  <div class="progress" tabindex="0" :class="`progress--${stepState}`" v-on:keyup.left="handleChangeStep('previous')"  v-on:keyup.right="handleChangeStep('next')">
    <ul class="progress__bar">
      <li
        v-for="(step, index) in mockData" 
        class="progress__item" 
        v-bind:key="index"
        v-bind:class="{ 
          active: index === currentIndex, 
          completed: index < progressIndex,
          current: index === progressIndex,
          'current--1': index === progressIndex && currentClass === 1,
          'current--2': index === progressIndex && currentClass === 2,
          'current--3': index === progressIndex && currentClass === 3,
          }"
      >
        <button class="progress__button" @click="handleStepClick(index)">
          <div class="progress__label">{{ step.name }}</div>
          <div class="progress__container">
            <div class="progress__pseduo"></div>
            <div class="progress__indicator" >
              <!-- Action required -->
              <svg class="progress__icon" v-if="index === progressIndex && status === 1"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M19,22.1874638 C19,22.9608994 18.7062502,23.6230071 18.11875,24.1737872 C17.5312498,24.7245673 16.825,24.9999571 16,24.9999571 C15.175,24.9999571 14.4687502,24.7245673 13.88125,24.1737872 C13.2937498,23.6230071 13,22.9608994 13,22.1874638 C13,21.4140281 13.2937498,20.7519205 13.88125,20.2011404 C14.4687502,19.6503603 15.175,19.3749705 16,19.3749705 C16.825,19.3749705 17.5312498,19.6503603 18.11875,20.2011404 C18.7062502,20.7519205 19,21.4140281 19,22.1874638 Z M13.3375,7.87890415 C13.3375,7.64452953 13.4249998,7.43945208 13.6,7.26367125 C13.7750002,7.08789042 13.9874998,7 14.2375,7 L17.7625,7 C18.0125002,7 18.2249998,7.08789042 18.4,7.26367125 C18.5750002,7.43945208 18.6625,7.64452953 18.6625,7.87890415 L18.1375,17.4413814 C18.1375,17.675756 18.0500002,17.8691149 17.875,18.0214581 C17.6999998,18.1738013 17.4875002,18.2499732 17.2375,18.2499732 L14.7625,18.2499732 C14.5124998,18.2499732 14.3000002,18.1738013 14.125,18.0214581 C13.9499998,17.8691149 13.8625,17.675756 13.8625,17.4413814 L13.3375,7.87890415 Z" fill="currentColor"></path>   
              </svg>
              <!-- Error -->
              <svg  class="progress__icon" v-if="index === progressIndex && (status === 4 || status === 5)" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4895924,8.5753788 L16.500272,14.586272 L22.5104076,8.5753788 C22.8708916,8.21489484 23.4381227,8.1871653 23.8304139,8.49219019 L23.9246212,8.5753788 C24.3151455,8.96590309 24.3151455,9.59906807 23.9246212,9.98959236 L23.9246212,9.98959236 L17.914272,16.000272 L23.9246212,22.0104076 C24.3151455,22.4009319 24.3151455,23.0340969 23.9246212,23.4246212 C23.5340969,23.8151455 22.9009319,23.8151455 22.5104076,23.4246212 L16.500272,17.414272 L10.4895924,23.4246212 C10.1291084,23.7851052 9.56187734,23.8128347 9.16958614,23.5078098 L9.0753788,23.4246212 C8.68485451,23.0340969 8.68485451,22.4009319 9.0753788,22.0104076 L9.0753788,22.0104076 L15.086272,16.000272 L9.0753788,9.98959236 C8.68485451,9.59906807 8.68485451,8.96590309 9.0753788,8.5753788 C9.46590309,8.18485451 10.0990681,8.18485451 10.4895924,8.5753788 Z" fill="currentColor"></path>
              </svg>
              <!-- Completed -->
              <svg class="progress__icon" v-if="index < progressIndex || (index === progressIndex && status === 2 || index === progressIndex && status === 3)"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4557352,2.40610638 C12.7837693,1.96179563 13.4098786,1.86753482 13.8541893,2.19556897 C14.2985001,2.52360312 14.3927609,3.14971237 14.0647267,3.59402312 L6.82972843,13.3935745 L2.2873556,8.77920407 C1.8999139,8.38562133 1.9048922,7.75247592 2.29847494,7.36503422 C2.69205768,6.97759252 3.32520308,6.98257082 3.71264479,7.37615356 L6.6119057,10.3213684 L12.4557352,2.40610638 Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </button>
      </li>  
    </ul>
    <div class="progress__content">
      <div class="progress__carousel">
        <transition :name="transition" mode="out-in">
          <div class="progress__slide" :key="currentIndex" v-if="mockData[currentIndex].description">
            <h4 class="progress__title">{{ mockData[currentIndex].title }}</h4>
            <div class="progress__description">
              {{ mockData[currentIndex].description }}
            </div>
          </div>
        </transition>
        <button 
          class="progress__nav progress__nav--prev" 
          @click="handleChangeStep('prev')"
          :disabled="currentIndex === 0"
        >
          <svg class="progress__navIcon" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" >
            <path d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          class="progress__nav progress__nav--next" 
          @click="handleChangeStep('next')"
          :disabled="currentIndex === (mockData.length - 1)"
        >
          <svg class="progress__navIcon" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg" >
            <path d="M12.4536518,8.69541757 C11.8487827,8.07880352 11.8487827,7.0790746 12.4536518,6.46246054 C13.0585208,5.84584649 14.0392073,5.84584649 14.6440763,6.46246054 L24,16.0000526 L14.6441796,25.5375395 C14.0393105,26.1541535 13.0586241,26.1541535 12.453755,25.5375395 C11.848886,24.9209254 11.848886,23.9211965 12.453755,23.3045824 L19.619151,16.0000526 L12.4536518,8.69541757 Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// stepState
// 0 future
// 1 current
// 2 complete

const mockData = [
  {
    name: 'Step 1',
    title: 'Title for step one',
    description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.',
    stepState: 2,
  },
  {
    name: 'Step 2',
    title: 'Title for step two',
    description: 'Donec nec justo eget felilentesque felis.',
    stepState: 2,
  },
  {
    name: 'Step 3',
    title: 'Title for step three',
    description: 'Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    stepState: 1,
  },
  {
    name: 'Step 4',
    title: 'Title for step four',
    description: 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.',
    stepState: 0,
  },
  {
    name: 'Step 5',
    title: 'Title for step five',
    description: 'Quisque a lectus. Donec consectetuer ligula vulputate sem tristique',
    stepState: 0,
  }
];

export default {
  name: 'Progress',
  props: {
    status: {
      type: Number,
    },
  },
  data() {
    return {
      mockData,
      currentIndex: this.getCurrentIndex(),
      progressIndex: this.getCurrentIndex(),
      transition: 'slide-in',
    }
  },
  computed: {
    stepState() {
      // Completed
      let stepState = 0;
      if (this.currentIndex < this.progressIndex) stepState = 2
      // Current action required
      else if (this.currentIndex === this.progressIndex && this.status === 1) stepState = 1
      // Current error / cancelled
      else if (this.currentIndex === this.progressIndex && (this.status === 4 || this.status === 5)) stepState = 3
      // Current Complete
      else if (this.currentIndex === this.progressIndex && (this.status === 2 || this.status === 3)) stepState = 2
      // Future
      else if (this.currentIndex > this.progressIndex) stepState = 0
      return stepState;
    },
    currentClass() {
      // Action required
      let currentClass = 1;
      if (this.status === 1) currentClass = 1;
      // Complete
      else if (this.status === 2 || this.status === 3) currentClass = 2
      // Error
      else if (this.status === 4 || this.status === 5) currentClass = 3
      return currentClass;
    }
  },
  methods: {
    handleChangeStep(direction) {
      if (this.currentIndex === 0 && direction === 'previous') return;
      if (this.currentIndex === (mockData.length - 1) && direction === 'next') return;

      this.currentIndex = direction === 'next' 
      ? this.currentIndex + 1
      : this.currentIndex - 1;

      this.transition = direction === 'next' ? 'slide-in' : 'slide-out';
    },
    getCurrentIndex() {
      // TODO Change when the data is dynamic
      return mockData.findIndex(item => item.stepState === 1);
    },
    handleStepClick(index) {
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped lang="scss">
.progress {
  padding: 3.625rem 1.25rem;
  background-color: #ebeff1;

  &:focus {
    outline-color: transparent;
  }

  &--0 {
    background-color: #ebeff1;
    color: #09333f;
  }

  &--1 {
    background-color: #fef3e8;
    color: #f68b1f;
  }
  
  &--2 {
    background-color: #e8f3ec;
    color: #1a8c44;
  }

  &--3 {
    background-color: #fdefee;
    color: #f15f56;
  }

  &__bar {
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin: 0;
    width: 100%;

    &::before {
      display: none;
    }

    &:first-of-type {
      .progress__pseduo {
        &::before {
          display: none;
        }
      }
    }

    &:last-of-type {
      .progress__pseduo {
        &::after {
          display: none;
        }
      }
    }

    // Preview step 
    &.active {
      .progress__label {
        font-weight: 800;
      }

      .progress__indicator {
        transform: scale(1.5);
        transition: transform ease-in-out 0.25s;
      }
    }

    // Step complete
    &.completed {
      .progress__indicator {
        background-color: #1a8c44;
        color: #ffffff;
      }

      .progress__pseduo {
        &::before,
        &::after {
          background-color: #1a8c44;
        }
      }
    }

    // Current step
    &.current {
      // Action required
      &--1 {
        .progress__indicator {
          background-color: #f68b1f;
          color: #ffffff;
        }
        .progress__pseduo {
          &::before {
            background-color: #f68b1f;
          }
        }
      }
      // Complete
      &--2 {
        .progress__indicator {
          color: #ffffff;
          background-color: #1a8c44;

        }
        .progress__pseduo {
          &::before {
            background-color: #1a8c44;
          }
        }
      }
      // Error 
      &--3 {
        .progress__indicator {
          background-color: #f15f56;;
          color: #ffffff;
        }
        .progress__pseduo {
          &::before {
            background-color: #f15f56;
          }
        }
      }
    }
  }

  &__button {
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 0;
    cursor: pointer;

    &:focus {
      outline-color: transparent;
    }
  }

  &__label {
    font-weight: 200;
    font-size: 0.875rem;
    color: #09333f;
    text-align: center;
  }

  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.75rem;
  }

  &__pseduo {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      left: auto;
      display: block;
      height: 4px;
      width: 50%;
      background-color: #b2c2c7;
      transform: translateY(-50%);
    }

    &::after {
      right: auto;
      left: 0;
    }
  }

  &__indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #b2c2c7;
    transition: transform ease-in-out 0.3s;
    z-index: 1;
  }

  &__icon {
    display: block;
    width: 1rem;
    height: 1rem;
  }

  &__content {
    margin-top: 3.625rem;
    border-top: currentColor solid 1px;
  }

  &__carousel {
    position: relative;
    padding: 3.125rem 4rem 0 4rem;
  }

  &__slide {
    width: 100%;
    transform: translate(0);
    opacity: 1;
    text-align: center;
  }

  &__title {
    margin: 0;
    font-weight: 200;
    font-size: 1.875rem;
    color: currentColor;
  }

  &__description {
    margin-top: 1.25rem;
    color: #09333f;
  }

  &__nav {
    position: absolute;
    top: 3.125rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #09333f;

    &:focus {
      outline-color: transparent;
    }

    &--next {
      right: 1rem;
    }

    &--prev {
      left: 1rem;

      svg {
        transform: rotate(-180deg);
      }
    }
  }

  &__navIcon {
    width: 2rem;
    height: 2rem;
  }
}

// Transitions
.slide-in-enter, .slide-out-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}
.slide-in-leave-to, .slide-out-enter {
  opacity: 0;
  transform: translateX(2rem);
}
.slide-in-enter-active, .slide-in-leave-active, .slide-out-enter-active, .slide-out-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
</style>

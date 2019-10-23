<template>
  <div class="page">
    <div class="page__container">
      <h1 class="page__heading">DOW Triage POC</h1>
      <div class="page__content">

        <form id="dowForm">
          <div class="fieldset">
            <div class="fieldset__row">
              <div class="field">
                <label for="q1" class="field__label">Are you building over a pitch fiber pipe, asbestos, cement, brick?</label>
                <div class="field__content field__content--row">
                  <div class="radio">
                    <input class="radio__input" type="radio" name="q1" v-bind:value="true" id="q1-yes" v-model="vq1" required >
                    <label for="q1-yes" class="radio__label">Yes</label>
                  </div>
                  <div class="radio">
                    <input class="radio__input" type="radio" name="q1" v-bind:value="false" id="q1-no"  v-model="vq1" required >
                    <label for="q1-no" class="radio__label">No</label>
                  </div>
                  <div class="field__valid" v-show="vq1 !== null">
                    <svg focusable="false"><path xmlns="http://www.w3.org/2000/svg" d="M13.7113607,20.5120722 L23.1251761,7.63707926 C23.6055346,6.9801074 24.5795456,6.8022814 25.3006907,7.23989376 C26.0218357,7.67750613 26.2170318,8.56484196 25.7366733,9.22181382 L14.2001286,25 L6.45952251,17.9482143 C5.84682583,17.3900402 5.84682583,16.4850612 6.45952251,15.9268871 C7.07221919,15.368713 8.06559678,15.368713 8.67829346,15.9268871 L13.7113607,20.5120722 Z" fill="#1A8C44"></path></svg>
                  </div>
                </div>
                <span class="field__validation" id="val-q1">Please select one of the answers above</span>
              </div>
            </div>
            <div class="fieldset__row" v-if="vq1===false">
              <transition name="fade">
                <div class="field">
                  <label for="q2-answer" class="field__label">Please confirm the internal diameter of the public sewer or lateral drain.</label>
                  <div class="field__content">
                    <div class="dropdown">
                      <select class="dropdown__select" id="q2" name="q2" v-on:change="handleQ2" v-on:blur="handleOnBlur" required>
                        <option value="" selected disabled>Please select...</option>
                        <option value="100">100 - 150mm</option>
                        <option value="225">225mm</option>
                        <option value="300">300mm or larger</option>
                      </select>    
                    </div>
                    <div class="field__valid" v-show="vq2 !== null">
                      <svg focusable="false"><path xmlns="http://www.w3.org/2000/svg" d="M13.7113607,20.5120722 L23.1251761,7.63707926 C23.6055346,6.9801074 24.5795456,6.8022814 25.3006907,7.23989376 C26.0218357,7.67750613 26.2170318,8.56484196 25.7366733,9.22181382 L14.2001286,25 L6.45952251,17.9482143 C5.84682583,17.3900402 5.84682583,16.4850612 6.45952251,15.9268871 C7.07221919,15.368713 8.06559678,15.368713 8.67829346,15.9268871 L13.7113607,20.5120722 Z" fill="#1A8C44"></path></svg>
                    </div>
                  </div>
                  <span class="field__validation" id="val-q2">Please select an option from the dropdown</span> 
                </div>
              </transition>
            </div>
            <div class="fieldset__row" v-if="showQ3">
              <transition name="fade">
                <div class="field">
                  <label class="field__label" for="q3">Is the public sewer or lateral drain gravity based foul, storm water or combined flow from domestic properties (i.e. not pumped)?</label>
                  <div class="field__content field__content--row">
                    <div class="radio">
                      <input class="radio__input" type="radio" name="q3" v-bind:value="true" id="q3-yes" v-model="vq3" required>
                      <label for="q3-yes" class="radio__label">Yes</label>
                    </div>
                    <div class="radio">
                      <input class="radio__input" type="radio" name="q3" v-bind:value="false" id="q3-no"  v-model="vq3" required>
                      <label class="radio__label" for="q3-no">No</label>
                    </div>
                    <div class="field__valid" v-show="vq3 !== null">
                      <svg focusable="false"><path xmlns="http://www.w3.org/2000/svg" d="M13.7113607,20.5120722 L23.1251761,7.63707926 C23.6055346,6.9801074 24.5795456,6.8022814 25.3006907,7.23989376 C26.0218357,7.67750613 26.2170318,8.56484196 25.7366733,9.22181382 L14.2001286,25 L6.45952251,17.9482143 C5.84682583,17.3900402 5.84682583,16.4850612 6.45952251,15.9268871 C7.07221919,15.368713 8.06559678,15.368713 8.67829346,15.9268871 L13.7113607,20.5120722 Z" fill="#1A8C44"></path></svg>
                    </div>
                  </div>
                  <span class="field__validation" id="val-q3">Please select an answer</span> 
                </div>
              </transition>
            </div>
            <div class="fieldset__row" v-if="showQ4">
              <transition name="fade">
                <div class="field">
                  <label class="field__label" for="q4">Is the sewer or lateral drain deeper than 2m?</label>
                  <div class="field__content field__content--row">
                    <div class="radio">
                      <input class="radio__input" type="radio" name="q4" v-bind:value="true" id="q4-yes" v-model="vq4"  required>
                      <label class="radio__label" for="q4-yes">Yes</label>
                    </div>
                    <div class="radio">
                      <input class="radio__input" type="radio" name="q4" v-bind:value="false" id="q4-no"  v-model="vq4" required>
                      <label class="radio__label" for="q4-no">No</label>
                    </div>
                    <div class="field__valid" v-show="vq4 !== null">
                      <svg focusable="false"><path xmlns="http://www.w3.org/2000/svg" d="M13.7113607,20.5120722 L23.1251761,7.63707926 C23.6055346,6.9801074 24.5795456,6.8022814 25.3006907,7.23989376 C26.0218357,7.67750613 26.2170318,8.56484196 25.7366733,9.22181382 L14.2001286,25 L6.45952251,17.9482143 C5.84682583,17.3900402 5.84682583,16.4850612 6.45952251,15.9268871 C7.07221919,15.368713 8.06559678,15.368713 8.67829346,15.9268871 L13.7113607,20.5120722 Z" fill="#1A8C44"></path></svg>
                    </div>
                  </div>
                  <span class="field__validation" id="val-q4">Please select an answer</span> 
                </div>
              </transition>
            </div>
            <div class="fieldset__row" v-if="showQ5">
              <transition name="fade">
                <div class="field">
                  <label class="field__label" for="q5">Will the development utilise strip/trench fill foundations?</label>
                  <div class="field__content field__content--row">
                    <div class="radio">
                      <input class="radio__input" type="radio" name="q5" v-bind:value="true" id="q5-yes" v-model="vq5" required>
                      <label class="radio__label" for="q5-yes">Yes</label>
                    </div>
                    <div class="radio">
                      <input class="radio__input" type="radio" name="q5" v-bind:value="false" id="q5-no"  v-model="vq5" required>
                      <label class="radio__label" for="q5-no">No</label>
                    </div>
                    <div class="field__valid" v-show="vq5 !== null">
                      <svg focusable="false"><path xmlns="http://www.w3.org/2000/svg" d="M13.7113607,20.5120722 L23.1251761,7.63707926 C23.6055346,6.9801074 24.5795456,6.8022814 25.3006907,7.23989376 C26.0218357,7.67750613 26.2170318,8.56484196 25.7366733,9.22181382 L14.2001286,25 L6.45952251,17.9482143 C5.84682583,17.3900402 5.84682583,16.4850612 6.45952251,15.9268871 C7.07221919,15.368713 8.06559678,15.368713 8.67829346,15.9268871 L13.7113607,20.5120722 Z" fill="#1A8C44"></path></svg>
                    </div>
                  </div>
                  <span class="field__validation" id="val-q5">Please select an answer</span> 
                </div>
              </transition>
            </div>
            <div class="fieldset__actions">
              <input type="button" value="Next"  class=" button button--next primary-button fieldset__button" v-on:click="handleNext()" />
            </div>
          </div>
        </form>
      </div> <!-- page__content -->
    </div> <!-- page__container -->
  </div> <!-- page -->
</template>

<script>

import '../../public/main.css';

export default {
  name: "dow-triage-poc",
  props: {
  },
  mounted() {
  },
  data: function() {
    return {
      isValid: false,
      vq1: null,
      vq2: null,
      vq3: null,
      vq4: null,
      vq5: null,
      showQ2: false,
      showQ3: false,
      showQ4: false,
      showQ5: false,
      stopApplication: false,
      directToBos: false,
      nextMessage: null,
    }
  },
  computed: {
      enableNext: function () {
        return this.stopApplication || this.directToBos || this.allQuestionsComplete;
      },
      allQuestionsComplete: function () {
        return this.vq1 !== null && this.vq2 !== null && this.vq3 !== null && this.vq4 !== null && this.vq5 !== null;
      }
  },
  watch: {
      vq1() {
        this.stopApplication = this.vq1;
        this.directToBos = false;
        this.nextMessage = (this.vq1) ?  "STOP due to question 1" : null;
        this.showQ2 = true;
        this.vq2 = this.vq3 = this.vq4 = this.vq5 = null;
        this.validateForm();
      },
      vq2() {
          this.vq3 = this.vq4 = this.vq5 = null;
          switch(this.vq2) {
            case "100": // continue
              this.stopApplication = false;
              this.directToBos = false;
              this.showQ3 = true;
              this.showNext = true;
              this.nextMessage = null;
              break;
            case "225": // BOS app
              this.stopApplication = false;
              this.directToBos = true;
              this.showQ3 = false;
              this.nextMessage = "BOS due to question 2";
              break;
            case "300": // stop app
              this.stopApplication = true;
              this.directToBos = false;
              this.nextMessage = "STOP due to question 2";
              this.showQ3 = false;
              break;
            default:
              this.stopApplication = false;
              this.directToBos = false;
              this.showQ3 = false;
              this.nextMessage = null;
              break;
          }
          this.validateForm();
      },
      vq3() {
        this.vq4 = this.vq5 = null;
        this.stopApplication = !this.vq3;
        this.directToBos = false;
        this.nextMessage = (this.vq3) ? "" : "STOP due to question 3";
        this.showQ4 = this.vq3;
        this.validateForm();
      },
      vq4() {
        this.vq5 = null;
        this.stopApplication = false;
        this.directToBos = this.vq4;
        this.nextMessage = (this.vq4) ? "BOS due to question 4" : "";
        this.showQ5 = !this.vq4;
        this.validateForm();
      },
      vq5() {
        this.stopApplication = false;
        this.directToBos = !this.vq5;
        this.nextMessage = (this.vq5) ? "" : "BOS due to question 5";
        this.validateForm();
      }
  },
  methods: {
    handleQ2(event) {
      this.vq2 = event.target.value;
    },
    handleNext() {
      this.validateForm();
      if(!this.enableNext) return;

      this.$router.push( { 
        name: 'dow-triage-poc-next', 
        params: { 
          stopApplication: this.stopApplication,
          directToBos: this.directToBos,
          message: this.nextMessage
        } 
      });
    },
    handleOnBlur() {
      if (!this.vq2) this.validateForm();
    },
    validateForm() {
      const elements = document.getElementById('dowForm').querySelectorAll("[required]");

      elements.forEach(element => {
        const { name } = element;
        const validationElement = `val-${[name]}`;
        const isValid = element.checkValidity();

        if (isValid) {
          this.removeClass(document.getElementById([validationElement]), 'visible');
        } else {
          this.addClass(document.getElementById([validationElement]), 'visible');
        }
      })
    },
    addClass(element, className = 'active') {
      element.classList.add(className);
    },
    removeClass(element, className = 'active') {
      element.classList.remove(className);
    }
   }
};
</script>

<style lang="scss">
$colors: (
  "black": #09333f,
  "blue": #0072bc,
  "blue-light": #ebeff1,
  "grey": #65858f,
  "grey-light": #b2c2c7,
  "red": #f15f56,
  "white": #fff,
);

$page: (
  "background-color": map-get($colors, "grey"),
  "color": map-get($colors, "black"),
  "container": 980px,
);

$breakpoints: (
  "mobile-large": 425px,
  "tablet": 768px,
  "laptop": 1024px,
  "desktop": 1200px,
);

// Atoms
$radio: (
  "border-radius": 3px,
  "border-width": 2px,
  "line-height": 3,
  "min-width": 7.5rem,
);

$dropdown: (
  "border-radius": 3px,
  "border-width": 2px,
  "line-height": 3,
  "height":  3.75rem,
  "width": 23.75rem,
);

// Page 
.page {
  background-color: map-get($page, "background-color");
  color: map-get($page, "color");
  padding: 2rem 0;
  margin-top: 2rem;

  &__container {
    max-width: map-get($page, "container");
    margin: 0 auto;
    padding: 2rem 2rem;
    background-color: map-get($colors, "white");

    @media (min-width: map-get($breakpoints, "mobile-large")) {
      padding: 2.5rem 4.125rem;
    }

    @media (min-width: map-get($breakpoints, "laptop")) {
      padding: 5rem 8.125rem;
    }
  }

  &__heading {
    margin: 0;
    color: map-get($colors, "blue");

    &:after {
      content: '';
      display: block;
      margin-top: 2rem;
      border-top: 1px solid map-get($colors, "grey-light");

      @media (min-width: map-get($breakpoints, "mobile-large")) {
        margin-top: 3.125rem;;
      }
    }
  }

  &__content {
    margin-top: 2rem;

    @media (min-width: map-get($breakpoints, "mobile-large")) {
      margin-top: 3rem;
    }
  }

  &__actions {
    margin-top: 2rem;
  }
}

// Fieldset
.fieldset {
  display: flex;
  flex-flow: column;

  &__row {
    & + & {
      margin-top: 3rem;
    }
  }

  &__actions {
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    border-top: 1px solid map-get($colors, "grey-light");
    margin-top: 2.125rem;
    padding-top: 1.5rem;

    @media (min-width: map-get($breakpoints, "mobile-large")) {
      margin-top: 3.125rem;
      padding-top: 2.5rem;
    }
  }

  &__button {
    margin: 0;
  }
}

// Field / Question
.field {
  display: flex;
  flex-flow: column;

  &__label {
    font-weight: bold;
  }

  &__validation {
    margin: 0.65rem 0 0;
    color: map-get($colors, "red");

    &.visible {
      display: block;
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-flow: column;
    margin-top: 1.25rem;

    &--row {
      flex-flow: row;
    }
  }

  &__valid {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    svg {
      height: 32px;
      width: 32px;
    }
  }
}

// Atoms
.radio {
  display: block;

  & + & {
    margin-left: 1rem;
  }

  &__label {
    display: block;
    min-width: map-get($radio, "min-width");
    border: solid map-get($radio, "border-width") map-get($colors, "grey-light");
    border-radius: map-get($radio, "border-radius");
    line-height: map-get($radio, "line-height");
    padding: 0 3rem;
    background-color: map-get($colors, "blue-light");
    color: map-get($colors, "blue");
    overflow: hidden;
    cursor: pointer;
    transition: ease-in-out 0.2s all;

    &:hover {
      border-color: darken(map-get($colors, "grey-light"), 30%);
    }
  }

  &__input {
    display: block;
  }

  &__input:checked + &__label {
    background-color: map-get($colors, "blue");
    color: map-get($colors, "white");
    border-color: map-get($colors, "blue");
  }
}

.dropdown {
  position: relative;
  display: flex;
  padding: 0;
  max-width: map-get($dropdown, "width");
  // Offset tick icon
  width: calc(100% - 34px);

  @media (min-width: map-get($breakpoints, "mobile-large")) {
    width: 100%;
  }
  
  &__select {
    height: map-get($dropdown, "height");
    width: 100%;
    border-radius: map-get($dropdown, "border-radius");
    border: solid map-get($dropdown, "border-width") map-get($colors, "grey-light");
    padding: 0 1rem;
     -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    background-image: url(https://contact.urmycrwd.com/dist/images/down-black.svg);
    background-position: 98% center;
    background-repeat: no-repeat;

    &::-ms-expand {
      display: none;
    }
  }
}


// Transitions
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


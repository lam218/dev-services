<template>
  <div class="outer-container">
    <transition name="input" mode="out-in">
      <div class="value-container" v-if="!showInput">
        <div
          class="value"
          v-bind:class="{'value--red': i > 4}"
          v-for="(item, i) in meterValue"
          v-bind:key="item.key"
          v-on:click="toggleInput(true)"
        >
          {{item.value}}
          <span v-if="i === 4">.</span>
        </div>
      </div>
    </transition>
    <transition name="input" mode="out-in">
      <div v-if="showInput">
        <div class="input-container">
          <span
            class="input-container__input"
            v-html="displayValue"
            v-bind:class="{'input-container__input--focus': showInput}"
          ></span>
          <input
            class="input-container__hidden-input"
            type="number"
            v-bind:value="inputValue"
            v-on:input="onChange"
            max="99999999"
            ref="input"
            autofocus
          />
        </div>
        <button class="input-container__button" v-on:click="toggleInput(false)">Done</button>
        <p v-if="showError">Have you remembered the leading zeros, you should have 8 numbers</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "one-input",
  data: function() {
    return {
      inputValue: "",
      displayValue: "",
      meterValue: [
        {
          key: 0,
          value: 0
        },
        {
          key: 1,
          value: 0
        },
        {
          key: 2,
          value: 0
        },
        {
          key: 3,
          value: 0
        },
        {
          key: 4,
          value: 0
        },
        {
          key: 5,
          value: 0
        },
        {
          key: 6,
          value: 0
        },
        {
          key: 7,
          value: 0
        }
      ],
      showInput: false,
      showError: false
    };
  },
  methods: {
    onChange: function(e) {
      const value = e.target.value;
      this.inputValue = value;
      if (value.length === 5) {
        this.displayValue = `${value}<span style="color: red">.</span>`;
      } else if (value.length > 5 && e.data !== null) {
        this.displayValue = `${this.displayValue}<span style="color: red">${e.data}</span>`;
      } else if (value.length > 5 && e.data === null) {
        this.displayValue = this.displayValue.slice(0, -33);
      } else {
        this.displayValue = value;
      }
    },
    toggleInput: function(shouldShowInput) {
      if (!shouldShowInput && this.inputValue.length === 8) {
        this.showError = false;
        this.meterValue = this.inputValue
          .split("")
          .map((item, i) => ({ key: i, value: item }));
        this.showInput = shouldShowInput;
      } else if (shouldShowInput) {
        this.showInput = shouldShowInput;
        setTimeout(this.setFocus, 200);
      } else {
        this.showError = true;
      }
    },
    setFocus: function() {
      this.$refs.input.focus();
    }
  }
};
</script>

<style scoped>
.outer-container {
  position: relative;
}
.input-container__input--focus {
  border: 1px solid blue;
}
.input-container__input {
  background: white;
  width: 50%;
  height: 60px;
}
.input-container__button {
  font-size: 25px;
  background: blue;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  color: white;
  font-family: Open Sans, sans-serif;
  position: absolute;
  top: 30%;
  z-index: 2;
  right: 40px;
  cursor: pointer;
}
.input-container__hidden-input {
  padding: 10px;
  line-height: 25px;
  font-size: 16px;
  width: 100%;
  position: absolute;
  opacity: 0;
  z-index: 1;
}

.input-container__input--red {
  color: red;
}
.value--red {
  color: red;
}
.red {
  color: red;
}
.input-enter-active,
.input-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.input-enter, .input-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
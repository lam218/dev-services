<template>
  <div>
    <div class="value-container">
      <div
        class="value"
        v-bind:class="{'value--red': i > 4}"
        v-on:click="findFocus(i > 4 ? 'Red' : 'Black')"
        v-for="(item, i) in meterValue"
        v-bind:key="item.key"
      >{{item.value}}
      <span v-if="i === 4">.</span>
      </div>
    </div>
    <div class="input-container">
      <input
        class="input-container__input input-container__input--black"
        type="number"
        v-bind:value="inputValue[0]"
        v-on:click="findFocus('Black')"
        data-id-number="0"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        type="number"
        v-bind:value="inputValue[1]"
        v-on:click="findFocus('Black')"
        data-id-number="1"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        type="number"
        v-bind:value="inputValue[2]"
        v-on:click="findFocus('Black')"
        data-id-number="2"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        type="number"
        v-bind:value="inputValue[3]"
        v-on:click="findFocus('Black')"
        data-id-number="3"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        type="number"
        v-bind:value="inputValue[4]"
        ref="lastBlackInput"
        v-on:input="keydown"
        data-id-number="4"
      />
      <span class="input-container__full-stop">.</span>
      <input
        class="input-container__input input-container__input--red"
        type="number"
        v-bind:value="inputValue[5]"
        v-on:click="findFocus('Red')"
        v-on:input="keydown"
        data-id-number="5"
      />
      <input
        class="input-container__input input-container__input--red"
        type="number"
        v-bind:value="inputValue[6]"
        v-on:click="findFocus('Red')"
        v-on:input="keydown"
        data-id-number="6"
      />
      <input
        class="input-container__input input-container__input--red"
        type="number"
        v-bind:value="inputValue[7]"
        v-on:input="keydown"
        ref="lastRedInput"
        data-id-number="7"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "seperate-inputs",
  data: function() {
    return {
      inputValue: [0, 0, 0, 0, 0, 0, 0, 0],
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
      ]
    };
  },
  methods: {
    findFocus(type) {
      this.$refs[`last${type}Input`].focus();
    },
    keydown(e) {
      if (!isNaN(parseInt(e.data))) {
        this.setValue(e);
        setTimeout(this.nextElement, 100, e);
      }
    },
    setValue(e) {
      const number = e.target.dataset.idNumber;
      this.inputValue[number] = "";
      e.target.value = "";
      this.inputValue[number] = e.data;
    },
    nextElement(e) {
      const number = e.target.dataset.idNumber;
      e.target.previousElementSibling.focus();
      this.meterValue[number].value = e.data;
    }
  }
};
</script>

<style scoped>
.value--red {
  color: red;
}
</style>
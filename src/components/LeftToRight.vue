<template>
  <div>
    <div class="input-container">
      <input
        class="input-container__input input-container__input--black"
        v-bind:value="inputValue[0]"
        v-on:click="findFocus('Black')"
        data-id-number="0"
        v-on:input="keydown"
        maxlength="1"
      />
      <input
        class="input-container__input input-container__input--black"
        maxlength="1"
        v-bind:value="inputValue[1]"
        v-on:click="findFocus('Black')"
        data-id-number="1"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        maxlength="1"
        v-bind:value="inputValue[2]"
        v-on:click="findFocus('Black')"
        data-id-number="2"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        maxlength="1"
        v-bind:value="inputValue[3]"
        v-on:click="findFocus('Black')"
        data-id-number="3"
        v-on:input="keydown"
      />
      <input
        class="input-container__input input-container__input--black"
        maxlength="1"
        v-bind:value="inputValue[4]"
        ref="lastBlackInput"
        v-on:keydown="keydown"
        data-id-number="4"
      />
      <span class="input-container__full-stop">.</span>
      <input
        class="input-container__input input-container__input--red"
        disabled
        value="0"
        v-on:click="findFocus('Black')"
      />
      <input
        class="input-container__input input-container__input--red"
        disabled
        value="0"
        v-on:click="findFocus('Black')"
      />
      <input
        class="input-container__input input-container__input--red"
        disabled
        value="0"
        v-on:click="findFocus('Black')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "left-to-right",
  data: function() {
    return {
      inputValue: [0, 0, 0, 0, 0, 0, 0, 0],
      isEditing: false
    };
  },
  methods: {
    findFocus(type) {
      this.$refs[`last${type}Input`].focus();
    },
    keydown(e) {
      if (!isNaN(parseInt(e.key)) && this.inputValue[0] === 0) {
        this.setValue(e);
      } else {
        return;
      }
    },
    setValue(e) {
      const number = e.target.dataset.idNumber;
      if (this.isEditing) {
        e.target.value = "";
        this.inputValue.shift();
        this.inputValue.splice(number, 0, e.key);
      } else {
        this.inputValue[number] = "";
        e.target.value = "";
        this.isEditing = true;
        this.inputValue[number] = e.key;
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,Open+Sans:600&display=swap");

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background: #ebeff1;
}
.input-container__input {
  padding: 5px;
  line-height: 50px;
  font-size: 50px;
  width: 50px;
  border-radius: 4px;
  margin: 1px;
  border: none;
  font-weight: 300;
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
.input-container__full-stop{
    font-size: 50px;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
}
.input-container__input--red {
  color: red;
}
.value-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background: #ebeff1;
}
.value {
        display: flex;
    background: white;
  padding: 5px;
  line-height: 50px;
  font-size: 50px;
  width: 50px;
  border-radius: 4px;
  margin: 1px;
  border: none;
  font-weight: 300;
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
.value--red {
  color: red;
}
</style>
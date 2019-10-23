<template>
  <div class="meter-reading">
    <div class="meter-reading__inner">
      <div class="input-container">
        <label class="input-container__label">Meter reading</label>
        <input type="number" v-on:input="keydown" class="input" />
      </div>
      <p
        class="meter-reading__explainer"
      >Inputting above will update what your meter should look like below</p>
      <div class="value-container">
        <div
          class="value"
          v-bind:class="[{'value--empty': i=== 5}, {'value--red': i > 5}]"
          v-for="(item, i) in inputValue"
          v-bind:key="i"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "visual-rep",
  data: function() {
    return {
      inputValue: [0, 0, 0, 0, 0, ".", 0, 0],
      isEditing: false
    };
  },
  methods: {
    keydown(e) {
      if (!isNaN(parseInt(e.data)) && this.inputValue[0] === 0) {
        this.setValue(e);
      } else if (e.data === null) {
        this.removeValue(e);
      } else {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
        return;
      }
    },
    setValue(e) {
      if (this.isEditing) {
        this.inputValue.shift();
        this.inputValue.splice(4, 0, e.data);
      } else {
        this.inputValue[4] = e.data;
        this.isEditing = true;
      }
    },
    removeValue() {
      if (this.isEditing) {
        this.inputValue.unshift(0);
        this.inputValue.splice(5, 1);
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,Open+Sans:600&display=swap");

.meter-reading {
  background: #ebeff1;
  padding: 20px;
  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 980px;
    margin: auto;
  }
  &__explainer {
    display: flex;
    margin-bottom: 0;
  }
}

.value-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 30px 0;
  background: #ebeff1;
}
.value {
  display: flex;
  justify-content: center;
  background: white;
  padding: 5px;
  line-height: 50px;
  font-size: 50px;
  width: 50px;
  border-radius: 4px;
  margin: 1px;
  border: none;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
}
.value--red {
  color: #f15f56;
  background: #F5F7F8;
}
.value--empty {
  background: #ebeff1;
  font-size: 50px;
  font-weight: 300;
  width: 20px;
  font-family: "Open Sans", sans-serif;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  &__label {
    color: #09333f;
    font-weight: 700;
    font-size: 16px;
    padding-bottom: 10px;
  }
}
.input {
  border-radius: 4px;
  font-size: 16px;
  padding: 18px;
  box-shadow: 0 0 0 1px #65858f;
  border: 0;
  -webkit-appearance: none;
  line-height: initial;
  font-family: "Open Sans", sans-serif;

  &:focus {
    box-shadow: 0 0 0 2px #009edb;
  }
}
</style>
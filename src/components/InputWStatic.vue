<template>
  <div class="meter-reading">
    <div class="meter-reading__inner">
      <p class="meter-reading__explainer">Your meter should look a something like this</p>
      <div class="input-container">
        <label class="input-container__label">Meter reading</label>
        <div class="input-container__inner">
          <input type="number" v-model="value" class="input" />
          <div class="value value--empty">.</div>
          <div class="value value--red">0</div>
          <div class="value value--red">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-with-static",
  data: function() {
    return {
      value: "",
      isEditing: false
    };
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
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
.value--red {
  color: #f15f56;
  background: #f5f7f8;
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
  &__inner {
    display: flex;
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
<template>
  <div class="app">
   <h1>Update to input</h1>
   <p>In this one the input is above the visual representaion</p>
   <p>Small fix to be made</p>
   <visual-rep></visual-rep>
   <h1>Just input with static after</h1>
   <input-with-static></input-with-static>
  </div>
</template>

<script>
import VisualRep from '../components/VisualRepresentation';
import InputWithStatic from '../components/InputWStatic';

export default {
  name: 'MeterInputV2',
  components: {
    VisualRep,
    InputWithStatic
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

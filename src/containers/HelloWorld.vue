<template>
  <div class="app">
   <h1>Seperate inputs</h1>
   <p>Seperate inputs, so that when you click in the first field it fills up from the right and then hops accross</p>
   <p>I think it is unnecessary to have a display and input option, also inputting the 'wrong' way</p>
   <seperate-inputs></seperate-inputs>
   <h1>One input</h1>
   <p>Clicking on the 'meter reading' gives you an input to type into, 'submitting' updates 'meter reading'</p>
   <p>A lot more faff than its worth, to get the input to colour the characters after the point, need to hide an input and put span on top</p>
   <one-input></one-input>
   <h1>Left to Right</h1>
   <p>Fills in like a calculator</p>
   <p>Feels best to use, when chatting to Justin, the red numbers aren't required. So no need to include them</p>
   <p>Only question is, is it self explanatory to use?</p>
   <left-to-right></left-to-right>
  </div>
</template>

<script>
import SeperateInputs from '../components/SeperateInputs';
import OneInput from '../components/OneInput';
import LeftToRight from '../components/LeftToRight';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    SeperateInputs,
    OneInput,
    LeftToRight
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

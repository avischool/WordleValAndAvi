<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="griddiv">
    <Grid :rowLetters="wordList"/>

  </div>
  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Grid from '@/components/grid/Grid.vue'

/*
Component
data -> raw variable/information
Computed -> processed information
Array.from -> array builder
Truthy variable
Ternary operater -> boolean ? true_value : false_value
Map Function -> (_, idx) => ternary operator

*/

export default {
  name: 'App',
  data() {
    return {
      message: "Welcome to our Wordle!",
      letters:"HELLO",
      words:["hello","daily"],
    }
  },
  computed: {
    wordList() {
      return Array.from({ length:6 }, (_,idx) => this.words[idx] ? this.words[idx] : "     ");
    },
  },
  components: {
    HelloWorld,
    Grid
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="griddiv">
    <Grid :rowLetters="sample"/>

  </div>
  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Grid from '@/components/grid/Grid.vue'

export default {
  name: 'App',
  data() {
    return {
      message: "Welcome to our Wordle!",
      letters:"HELLO",
      sample:["hello","hello"],
    }
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

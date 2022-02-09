<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <Cell v-for="(letter,i) in letters" :key="i" :letter="letter"/>

  </div>
  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cell from '@/components/grid/Cell.vue'

export default {
  name: 'App',
  data() {
    return {
      message: "Welcome to our Wordle!",
      letters:"HELLO"
    }
  },
  components: {
    HelloWorld,
    Cell
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

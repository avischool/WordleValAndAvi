<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div id="griddiv">
    <Grid :rowLetters="wordList" :currentWord="currentword"/>

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
      words:[],
      currentword:"",
    }
  },
  computed: {
    wordList() {
      let gridList = Array.from({ length:6 }, (_,idx) => this.words[idx] ? this.words[idx] : "     ")
      gridList[(this.words).length] = this.currentword
      return gridList

    },
  },
  components: {
    HelloWorld,
    Grid,
  },
  created() {
    document.addEventListener("keydown",
    this.handleKeyboard)
  },
  // This doesn't work currently
  methods: {
    handleKeyboard(event) {
      if(event.repeat) return;
      if (/^[a-z()]$/i.test(event.key)){
        this.currentword += event.key;
      }



      if(event.key === "Backspace"){
        this.currentword = this.currentword.slice(0,-1);
      } 
      else if (event.key === "Enter" && this.currentword.length >= 5 && this.words.length<=4){
        this.words = [...this.words,this.currentword]
        this.currentword = ""
        // this.wordList.append(this.currentword);
        // currentword = ""
      }
      

    }
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

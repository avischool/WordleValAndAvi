<template>
  <div>
      <KeyRow v-for="(cellLetters, i) in rowLetters" :key="i" :cellLetters="cellLetters"/>
  </div>
</template>

<script>
import KeyRow from '@/components/keyboard/keyRow.vue'
export default {
name: "KeyFull",
    props:{
        rowLetters: Object
    },
    data(){
    return{
    
    }
  },
  
  components: {
    KeyRow
  }
}
</script>

<style>

</style>
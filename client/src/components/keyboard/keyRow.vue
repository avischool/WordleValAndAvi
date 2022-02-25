<template>
  <div>
      <Key v-for="(letter, i) in cellLetters" :key="i" :letter="letter"/>
  </div>
</template>

<script>
import Key from '@/components/keyboard/key.vue'
export default {
name: "KeyRow",
    props:{
        cellLetters: String
    },
    data(){
    return{
      
    }},
    components:{
        Key
    }
}

</script>

<style>

</style>
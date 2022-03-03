<template>
  <div class="keyRow">
      <Key v-for="(letter, i) in cellLetters" :key="i" :letter="letter" @click="() => onClick({ key:letter })"/>
  </div>
</template>

<script>
import Key from '@/components/keyboard/key.vue'
export default {
name: "KeyRow",
    props:["cellLetters","onClick"],
    data(){
    return{
      
    }},
    components:{
        Key
    }
}

</script>

<style lang="scss">

.keyRow {
  display: flex;
  justify-content: center;

  &:not(:last-child) {
  margin-bottom: 5px;
  }
}

</style>
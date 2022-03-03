<template>
  <div class="keyFull">
      <KeyRow v-for="(cellLetters, i) in rowLetters" :key="i" :cellLetters="cellLetters" :onClick="onClick"/>
  </div>
</template>

<script>
import KeyRow from '@/components/keyboard/keyRow.vue'
export default {
name: "KeyFull",
    props:["rowLetters","onClick"],
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

.keyFull {
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-top:10px;
}



</style>
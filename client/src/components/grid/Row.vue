<template>
  <div>
      <Cell v-for="(letter, i) in cellLetters" :key="i" :letter="letter"/>
  </div>
</template>

<script>
import Cell from '@/components/grid/Cell.vue'
export default {
    name: "Row",
    props: ["cellLetters"],
    data(){
    return{
      
    }
  },
  components: {
    Cell
  }

}
</script>

<style>

</style>
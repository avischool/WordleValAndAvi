<template>
  <div class="Row">
      <Cell v-for="(letter, i) in wordRow" :key="i" :letter="letter"/>
  </div>
</template>

<script>
import Cell from '@/components/grid/Cell.vue'
export default {
    name: "Row",
    props:{
        cellLetters: String,
    },
    data(){
    return{
      
    }
  },
  computed: {
    wordRow(){
      return Array.from({length: 5}, 
      (_,idx) => this.cellLetters[idx] ? this.cellLetters[idx] : " ")
    }     
    
  },
  components: {
    Cell
  }

}
</script>

<style lang="scss">
.Row {
  display: flex;

  &:not(:last-child) {
  margin-bottom: 5px;
  }
}

</style>
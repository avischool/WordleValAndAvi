<template>
  <div class="Grid">
      <Row v-for="(cellLetters, i) in rowLetters" :key="i" :cellLetters="cellLetters"/>
  </div>
</template>

<script>
import Row from '@/components/grid/Row.vue'
export default {
    name: "Grid",
    props:{
        rowLetters: Object
    },
    data(){
    return{
    
    }
  },
  components: {
    Row
  }

}
</script>

<style>

.Grid {
  display: flex;
  flex-flow: column;
  width: 300px;
  margin: 0 auto;
}

</style>
<template>

  <div class = "cell">
      {{letter}}
  </div>
</template>

<script>
export default {
    name: "Cell",
    props:{
        letter: String
    }

}
</script>

<style lang='scss'>
 .cell{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightseagreen;

    width: 50px;
    height: 50px;
    text-transform: uppercase;
    font-weight: 800;
    border: 1px solid #888;

    &:not(:last-child){
    margin-right: 5px;
    }
 }
</style>
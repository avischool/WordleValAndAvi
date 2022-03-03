<template>
  <div class = "keybutton">
      {{letter}}
  </div>
</template>

<script>
export default {
    name: "Key",
    props:{
        letter: String
    }
}
</script>

<style lang="scss">

.keybutton {
    min-width:2em;
    padding:0 5px;
    height:3em;
    border-radius:5px;
    background-color:#d3d6da;
    color:black;
    font-weight:bold;
    cursor:pointer;
    &:not(:last-child){
    margin-right: 5px;
    }

    display:flex;
    align-items:center;
    justify-content: center;
}



</style>
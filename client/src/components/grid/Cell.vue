<template>
  <div id = cell>
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

<style>
 #cell{
     display: inline-block;
     border: 5px solid black;
     width: 50px;
     height: 50px;
     margin:5px;
 }
</style>
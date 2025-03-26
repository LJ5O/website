<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<script setup>

    defineProps({
        title:{
            type:String,
            required:true
        },
        colour:{
            type:String,
            required:false,
            default:"#17a717"
        }
    })
</script>

<style scoped>
    div{
        background-color: v-bind(colour);
        width: fit-content;
        height: fit-content;
        padding: 2px 8px;
        border-radius: 8px;
    }
    p{
        font-size: 1em;
        margin:0;
    }
</style>
<template>
  <div class="line">
    <p>
        <span><img class="diploma_svg" :src="diplomaSvg"/></span>
        {{ text }}</p>
  </div>
</template>

<script setup>
    defineProps({
        text:{
            type:String,
            required:true
        }
    });

    import diplomaSvg from "@/assets/svg/education/diploma.svg";
</script>

<style scoped>
    .line{
        border-bottom: 2px solid white;
    }
    .diploma_svg{
        width: 64px;
    }
    p{
        color: white;
        position: relative;
        text-align: center;
        justify-content: center;
        font-size: 1.4em;
        margin-bottom: 10px;
    }
</style>
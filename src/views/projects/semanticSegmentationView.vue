<template>
    <Header/>
    <div id="title_div">
      <h1>{{ $t("projects.semantic_segmentation.title") }}</h1>
      <p>{{ $t("projects.semantic_segmentation.subtitle") }}</p>
      <img :src="semanticSegmentationCover"/> 
    </div>
    <article>
      <h2>{{ $t("projects.semantic_segmentation.content.context.title") }}</h2>
      <doubleRowHolder class="doubleRowHolder">
        <p>{{ $t("projects.semantic_segmentation.content.context.text") }}</p>
        <img :src="hachinoheKosenImg"/>
      </doubleRowHolder>
    </article>
  </template>

<script setup>
    import Header from '@/components/header.vue';
    import doubleRowHolder from '@/components/doubleRowHolder.vue';

    import semanticSegmentationCover from "@/assets/img/semantic_segmentation.png";
    import hachinoheKosenImg from "@/assets/img/projects/hachinohe_kosen.png";
</script>

<style scoped>
  #title_div img{
    width:100%;
    max-width: 800px;
    margin-top: 15px;
  }

  article, #title_div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    margin: auto;
    margin-top: 20px;
  }

  p,h1{
    margin: 0;
  }
  .doubleRowHolder p{
    min-width: 200px;
  }
  .doubleRowHolder img{
    min-width: 200px;
    max-width: 400px;
  }
</style>
  
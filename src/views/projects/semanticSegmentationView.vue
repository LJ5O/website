<template>
    <Header/>
    <div id="title_div">
      <h1>{{ $t("projects.semantic_segmentation.title") }}</h1>
      <p>{{ $t("projects.semantic_segmentation.subtitle") }}</p>
    </div>
    <article>
      
    </article>
  </template>

<script setup>
    import Header from '@/components/header.vue';
</script>

<style scoped>
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
</style>
  
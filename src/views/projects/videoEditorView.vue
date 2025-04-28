<template>
    <Header/>
    <div id="title_div">
      <h1>{{ $t("projects.video_editor.title") }}</h1>
      <p>{{ $t("projects.video_editor.subtitle") }}</p>
    </div>
    <article>
      <h2>{{ $t("projects.video_editor.fukushima_kosen.title") }}</h2>
      <doubleRowHolder>
        <p>{{ $t("projects.video_editor.fukushima_kosen.text") }}</p>
        <img :src="fukushimaKosenImg"/>
      </doubleRowHolder>

      <h2>{{ $t("projects.video_editor.perception.title") }}</h2>
      <p>{{ $t("projects.video_editor.perception.text") }}</p>
    </article>
  </template>

<script setup>
    import Header from '@/components/header.vue';
    import doubleRowHolder from '@/components/doubleRowHolder.vue';

    import videoEditorImg from '@/assets/img/video_editor.png';
    import fukushimaKosenImg from '@/assets/img/projects/fukushima_kosen.jpg';
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
  .doubleRowHolder p{
    min-width: 200px;
  }
  .doubleRowHolder img{
    min-width: 200px;
    max-width: 400px;
  }
</style>
  
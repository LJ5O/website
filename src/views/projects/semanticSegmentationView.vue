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
      <h2>{{ $t("projects.semantic_segmentation.content.semantic.title") }}</h2>
      <p>{{ $t("projects.semantic_segmentation.content.semantic.text") }}</p>

      <div id="table_wrapper">
        <table>
          <thead>
            <tr>
              <th>{{ $t("projects.semantic_segmentation.content.semantic.table.model") }}</th>
              <th>{{ $t("projects.semantic_segmentation.content.semantic.table.accuracy") }}</th>
              <th>{{ $t("projects.semantic_segmentation.content.semantic.table.loss") }}</th>
              <th>{{ $t("projects.semantic_segmentation.content.semantic.table.process_time") }}</th>
              <th>{{ $t("projects.semantic_segmentation.content.semantic.table.year") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unet</td>
              <td>0.9233</td>
              <td>0.1898</td>
              <td>10 ms</td>
              <td>2015</td>
            </tr>
            <tr>
              <td>Segnet</td>
              <td>0.9681</td>
              <td>0.07575</td>
              <td>100 ms</td>
              <td>2016</td>
            </tr>
            <tr>
              <td>DeeplabV3</td>
              <td>0.9708</td>
              <td>0.06759</td>
              <td>15 ms</td>
              <td>2017</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>{{ $t("projects.semantic_segmentation.content.semantic.result") }}</p>

      <h2>{{ $t("projects.semantic_segmentation.content.human_recognition.title") }}</h2>
      <p>{{ $t("projects.semantic_segmentation.content.human_recognition.text") }}</p>
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

  #table_wrapper{
    margin-top: 20px;
    margin-bottom: 15px;
    width: 80%;
    min-width: 250px;
    overflow-x: auto !important;
  }
  th{
    font-size:1.3em;
    padding-left: 5px;
    padding-right: 5px;
  }
  table,th,td{
    border: solid 1px white;
    border-collapse: collapse;
  }
  table{
    margin: auto;
  }
</style>
  
<template>
    <Header/>
    <h1 class="center">{{ $t("skills.title") }}</h1>
    <p class="center content">{{ $t("skills.subtitle") }}</p>

    <FactList v-for="(e,i) in skills" :key="i" :text="e.text" :buttonText="e.buttonText" :link="e.link" :picture="e.picture" class="factList"/>
  </template>

<script setup>
  import { useI18n } from 'vue-i18n';

  import Header from '@/components/header.vue';
  import FactList from '@/components/skills/factList.vue';

  import aIsvg from '@/assets/svg/skills/AI.svg';
  import analysisSvg from '@/assets/svg/skills/analysis.svg';
  import devopsSvg from '@/assets/svg/skills/devops.svg';
  import lowlevelSvg from '@/assets/svg/skills/lowlevel.svg';
  import webSvg from '@/assets/svg/skills/web.svg';

  const i18n = useI18n();

  const skills = [{
    text: i18n.t("skills.skills.ai.desc"),
    picture: aIsvg
  },{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante turpis, mattis vel tellus nec, porttitor condimentum libero. Fusce ut neque magna. ",
    buttonText: "Click me",
    picture: webSvg,
    link: "google.com"
  },{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante turpis, mattis vel tellus nec, porttitor condimentum libero. Fusce ut neque magna. ",
    buttonText: "Click me",
    picture: lowlevelSvg,
    link: "google.com"
  },{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante turpis, mattis vel tellus nec, porttitor condimentum libero. Fusce ut neque magna. ",
    buttonText: "Click me",
    picture: devopsSvg,
    link: "google.com"
  },{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante turpis, mattis vel tellus nec, porttitor condimentum libero. Fusce ut neque magna. ",
    buttonText: "Click me",
    picture: analysisSvg,
    link: "google.com"
  }]
</script>
  
<style scoped>
  .center{
    text-align: center;
  }

  .content{
    width:80%;
    margin: auto;
    margin-bottom: 20px;
  }

  .factList{
    width: 60%;
    margin: auto;
    margin-top: 20px;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
</style>
  
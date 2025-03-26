<template>
    <Header/>
    <h1 class="center">{{ $t("skills.title") }}</h1>
    <p class="center content">{{ $t("skills.subtitle") }}</p>

    <SkillsList v-for="(e,i) in skills" :key="i" :title="e.title" :desc="e.desc" :buttonText="e.buttonText" :link="e.link" :picture="e.picture" class="factList"/>
  </template>

<script setup>
  import { useI18n } from 'vue-i18n';

  import Header from '@/components/header.vue';
  import SkillsList from '@/components/skills/skillsList.vue';

  import aIsvg from '@/assets/svg/skills/AI.svg';
  import analysisSvg from '@/assets/svg/skills/analysis.svg';
  import devopsSvg from '@/assets/svg/skills/devops.svg';
  import lowlevelSvg from '@/assets/svg/skills/lowlevel.svg';
  import webSvg from '@/assets/svg/skills/web.svg';

  const i18n = useI18n();

  const skills = [{
    title: i18n.t("skills.skills.ai.title"),
    desc: i18n.t("skills.skills.ai.desc"),
    picture: aIsvg
  },{
    title: i18n.t("skills.skills.web.title"),
    desc: i18n.t("skills.skills.web.desc"),
    buttonText: "Click me",
    picture: webSvg,
    link: "google.com"
  },{
    title: i18n.t("skills.skills.low_level.title"),
    desc: i18n.t("skills.skills.low_level.desc"),
    buttonText: "Click me",
    picture: lowlevelSvg,
    link: "google.com"
  },{
    title: i18n.t("skills.skills.devops.title"),
    desc: i18n.t("skills.skills.devops.desc"),
    buttonText: "Click me",
    picture: devopsSvg,
    link: "google.com"
  },{
    title: i18n.t("skills.skills.data.title"),
    desc: i18n.t("skills.skills.data.desc"),
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
  
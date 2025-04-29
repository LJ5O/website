<template>
    <Header/>
    <h1 class="center">{{ $t("education.title") }}</h1>
    <p class="center content subtitle">{{ $t("education.subtitle") }}</p>

    <article>
      <p>{{ $t("education.introduction") }}</p> 

        <schoolDisplay :name="schools[0].name" :desc="schools[0].desc" :img="schools[0].img" :link="schools[0].link"/>
        <diploma text="Brevet des collèges"/>
    </article>

  </template>

<script setup>
  import { useI18n } from 'vue-i18n';

  import Header from '@/components/header.vue';
  import schoolDisplay from '@/components/education/schoolDisplay.vue';
  import diploma from '@/components/education/diploma.vue';
  import SkillsList from '@/components/skills/skillsList.vue';

  const i18n = useI18n();

  const schools = [{
    name: "Ensemble Scolaire",
    desc: "Yes",
    img: "https://picsum.photos/600/400",
    link: "A.com"
  }];

  /*const skills = [{
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
  }]*/
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

  article{
    width: 80%;
    margin: auto;
  }
  
</style>
  
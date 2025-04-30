<template>
    <Header/>
    <h1 class="center">{{ $t("education.title") }}</h1>
    <p class="center content subtitle">{{ $t("education.subtitle") }}</p>

    <article>
      <p>{{ $t("education.introduction") }}</p> 

        <schoolDisplay :name="schools[0].name" :desc="schools[0].desc" :img="schools[0].img" :link="schools[0].link"/>
        <diploma :text='i18n.t("education.diplomas.junior_high_school")' class="diploma_display"/>

        <schoolDisplay :name="schools[1].name" :desc="schools[1].desc" :img="schools[1].img" :link="schools[1].link"/>
        <diploma :text='i18n.t("education.diplomas.high_school")' class="diploma_display"/>

        <schoolDisplay :name="schools[2].name" :desc="schools[2].desc" :img="schools[2].img" :link="schools[2].link"/>
        <diploma :text='i18n.t("education.diplomas.bachelor")' class="diploma_display"/>

        <schoolDisplay :name="schools[3].name" :desc="schools[3].desc" :img="schools[3].img" :link="schools[3].link"/>
        <diploma :text='i18n.t("education.diplomas.master")' class="diploma_display"/>

    </article>

  </template>

<script setup>
  import { useI18n } from 'vue-i18n';

  import Header from '@/components/header.vue';
  import schoolDisplay from '@/components/education/schoolDisplay.vue';
  import diploma from '@/components/education/diploma.vue';
  import SkillsList from '@/components/skills/skillsList.vue';

  import iutImg from '@/assets/img/schools/iut.png';
  import middleImg from '@/assets/img/schools/middle.png';
  import highImg from '@/assets/img/schools/high.png';
  import ulcoImg from '@/assets/img/schools/ulco.png';

  const i18n = useI18n();

  const schools = [{
    name: i18n.t("education.schools.middle.name"),
    desc: i18n.t("education.schools.middle.desc"),
    img: middleImg,
    link: "https://lasallecoudekerque.com/"
  },{
    name: i18n.t("education.schools.high.name"),
    desc: i18n.t("education.schools.high.desc"),
    img: highImg,
    link: "https://www.epid-vauban.fr/"
  },{
    name: i18n.t("education.schools.bachelor.name"),
    desc: i18n.t("education.schools.bachelor.desc"),
    img: iutImg,
    link: "https://www.iut-littoral.fr/"
  },{
    name: i18n.t("education.schools.master.name"),
    desc: i18n.t("education.schools.master.desc"),
    img: ulcoImg,
    link: "https://www.univ-littoral.fr/"
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
  .diploma_display{
    margin-bottom: 30px;
  }
  
</style>
  
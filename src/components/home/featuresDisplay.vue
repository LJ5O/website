<template>
  <feature v-for="(e,i) in features" 
      :key="i"
      :title="e.title"
      :desc="e.desc"
      :button-text="e.buttonText"
      :link="e.link"
      :picture="e.picture"
      :side="i%2==1"
    />
</template>

<script setup>
    import feature from './libs/feature.vue';

    import {useI18n} from 'vue-i18n';
    const i18n = useI18n();

    import projectsSvg from '@/assets/svg/projets.svg';
    import skillsSvg from '@/assets/svg/skills.svg'
    import educationSvg from '@/assets/svg/education.svg'

    const features = [{
        title: i18n.t("home.features.projects.title"),
        desc: i18n.t("home.features.projects.desc"),
        buttonText: i18n.t("home.features.projects.buttonText"),
        picture: projectsSvg,
        link: "#"
    },{
        title: i18n.t("home.features.skills.title"),
        desc: i18n.t("home.features.skills.desc"),
        buttonText: i18n.t("home.features.skills.buttonText"),
        picture: skillsSvg,
        link: "skills"
    },{
        title: i18n.t("home.features.education.title"),
        desc: i18n.t("home.features.education.desc"),
        buttonText: i18n.t("home.features.education.buttonText"),
        picture: educationSvg,
        link: "education"
    }];
</script>

<style scoped>

</style>
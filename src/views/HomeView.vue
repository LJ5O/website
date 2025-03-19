<script setup>
  import welcome from '@/components/home/welcome.vue';
  import intersection from '@/components/home/intersection.vue';
  import presentation from '@/components/home/presentation.vue';
  import feature from '@/components/home/feature.vue';
  import projects from '@/components/home/projects.vue';

  import {useI18n} from 'vue-i18n';
  const i18n = useI18n();

  import projectsSvg from '@/assets/svg/projets.svg';

  const features = [{
    title: i18n.t("home.features.projects.title"),
    desc: i18n.t("home.features.projects.desc"),
    buttonText: i18n.t("home.features.projects.buttonText"),
    picture: projectsSvg,
    link: "#"
  },{
    title:"Hello World !",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis \
            lectus, feugiat in eros sit amet, venenatis euismod urna. Aliquam id \
            porttitor erat, vitae dapibus velit. Praesent id felis tincidunt, \
            efficitur tortor eget, volutpat orci. Vestibulum ac lectus tincidunt, \
            suscipit justo at, fringilla nisl. Aliquam tincidunt congue faucibus. Duis in nisi tortor. \
            Nulla sit amet turpis nec turpis rhoncus venenatis. Sed nec malesuada quam. \
            Aenean faucibus neque id nibh facilisis auctor. ",
    buttonText: "Click me !",
    picture: "https://picsum.photos/600/400",
    link: "#"
  }];

  const projects_info = [{
    picture:"https://picsum.photos/400/300",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis lectus, feugiat in eros sit amet, \
      venenatis euismod urna. Aliquam id porttitor erat, vitae dapibus velit. Praesent id felis tincidunt,",
    buttonText:"Oui !",
    buttonLink:"#"
  }]
</script>

<template>

    <welcome/>

    <intersection :text="i18n.t('home.contactMe')" :button-text="i18n.t('home.contactButton')" button-link="#"/>

    <presentation/>

    <feature v-for="(e,i) in features" 
      :key="i"
      :title="e.title"
      :desc="e.desc"
      :button-text="e.buttonText"
      :link="e.link"
      :picture="e.picture"
      :side="i%2==0"
    />

    <intersection style="margin-top: 20px;" text="Lorem ipsum dolor sit amet" button-text="En savoir plus" button-link="#" />

    <projects :projects="projects_info"/>

</template>

<style scoped>


</style>

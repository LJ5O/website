<script setup>
  import welcome from '@/components/home/welcome.vue';
  import intersection from '@/components/home/intersection.vue';
  import presentation from '@/components/home/presentation.vue';
  import projects from '@/components/home/projects.vue';
  import featuresDisplay from '@/components/home/featuresDisplay.vue';

  import {useI18n} from 'vue-i18n';
  const i18n = useI18n();

  const projects_info = [{
    picture:"https://picsum.photos/400/300",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis lectus, feugiat in eros sit amet, \
      venenatis euismod urna. Aliquam id porttitor erat, vitae dapibus velit. Praesent id felis tincidunt,",
    buttonText:"Oui !",
    buttonLink:"#"
  }]
</script>
<!-- Want to config displayed text ? Have a look inside components !
 You may also want to check assets/localization files -->
<template>

    <welcome/>

    <intersection :text="i18n.t('home.contactMe')" :button-text="i18n.t('home.contactButton')" button-link="#"/>

    <presentation/>

    <featuresDisplay/>

    <intersection style="margin-top: 20px;" text="Lorem ipsum dolor sit amet" button-text="En savoir plus" button-link="#" />

    <projects :projects="projects_info"/>

</template>

<style scoped>


</style>

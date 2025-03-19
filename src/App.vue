<script setup>
import { RouterLink, RouterView } from 'vue-router'
import app_footer from './components/footer.vue';
import GOLbackground from '@/components/GOLbackground.vue';
</script>

<template>
  <GOLbackground />
  
  <RouterView/>

  <app_footer />

</template>

<style scoped>

</style>

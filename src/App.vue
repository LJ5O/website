<script setup>
import { RouterLink, RouterView } from 'vue-router'
import app_footer from './components/footer.vue';
import GOLbackground from '@/components/GOLbackground.vue';
</script>

<template>
  <GOLbackground />
  
  <main>
    <RouterView/>
  </main>

  <app_footer />

</template>

<style scoped>
  main{
    flex:1;
  }
</style>

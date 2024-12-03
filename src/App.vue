<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <header>
    <Header :links="[['google', 'a'], ['yahoo', 'a'], ['Yandex', 'a']]"></Header>
  </header>

  <div id="view_content">
    <RouterView />
  </div>

</template>

<style scoped>

  #view_content{
    width: 80%;
    margin: auto;
  }

@media (min-width: 1024px) {

}
</style>

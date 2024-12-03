<script setup lang="ts">
  import TypewriterWelcome from '@/components/Home/TypewriterWelcome.vue';
  import Projects from '@/components/Home/Projects.vue';
</script>

<template>
  <main>
    <TypewriterWelcome />
    <Projects />
  </main>
</template>

<style scoped>

  main{
    margin-top: 5vh;
    width: 100%;
    border: 2px red dotted;
  }

</style>

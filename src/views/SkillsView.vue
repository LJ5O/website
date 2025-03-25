<template>
    <Header/>
    <h1 class="center">Skills</h1>
    <p class="center">
      As I have worked on various topics, I learned a lot about different technologies. As years and tasks are going by, I always strive to learn more and make a good use of my capacities.
    </p>

    <FactList v-for="(e,i) in skills" :key="i" :text="e.text" :buttonText="e.buttonText" :link="e.link" :picture="e.picture" class="factList"/>
  </template>

<script setup>
  import Header from '@/components/header.vue';
  import FactList from '@/components/skills/factList.vue';

  const skills = [{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante turpis, mattis vel tellus nec, porttitor condimentum libero. Fusce ut neque magna.",
    buttonText: "Click",
    picture: "https://picsum.photos/400/200"
  },{
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante turpis, mattis vel tellus nec, porttitor condimentum libero. Fusce ut neque magna. ",
    buttonText: "Click me",
    picture: "https://picsum.photos/50",
    link: "google.com"
  }]
</script>
  
<style scoped>
  .center{
    text-align: center;
  }

  .factList{
    width: 60%;
    margin: auto;
    margin-top: 20px;
  }
  
</style>
  
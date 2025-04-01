<template>
    <Header/>
    <div id="contact_content">
      <h1>{{ $t("contact.title") }}</h1>
      <p>{{ $t("contact.subtitle") }}</p>
      <h2>{{ $t("contact.emails.research.title") }}</h2>
      <p>{{ $t("contact.emails.research.desc", {user:"a", domain:"b"}) }}</p>
      <h2>{{ $t("contact.emails.work.title") }}</h2>
      <p>{{ $t("contact.emails.work.desc", {user:"a", domain:"b"}) }}</p>
      <img :src="ContactSvg"/>
    </div>
  </template>

<script setup>
    import Header from '@/components/header.vue';

    import ContactSvg from '@/assets/svg/contact.svg';
</script>
  
<style scoped>
  #contact_content{
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }
  #contact_content img{
    width: 100%;
    max-width: 600px;
  }
</style>
  
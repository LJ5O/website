<template>
    <Header/>
    <div id="contact_page">
      <div id="contact_content">
        <img :src="ContactSvg"/>
        
        <div id="contact_content_text">
          <h1>{{ $t("contact.title") }}</h1>
          <p class="subtitle">{{ $t("contact.subtitle") }}</p>
          <h2>{{ $t("contact.emails.research.title") }}</h2>
          <p>{{ $t("contact.emails.research.desc", {user:"k.sailly", domain:"etu.univ-littoral.fr"}) }}</p>
          <h2>{{ $t("contact.emails.work.title") }}</h2>
          <p>{{ $t("contact.emails.work.desc", {user:"kevin", domain:"taccoen.fr"}) }}</p>
        </div>
      </div>
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
    flex-direction: row-reverse;
    justify-content: center;
    /*align-items: center;
    text-align: center;*/
    flex-wrap: wrap;
  }
  #contact_content img{
    width: 30%;
    min-width: 200px;
    margin-left: 30px;
  }
  #contact_content_text{
    width: 60%;
    min-width: 300px;
  }
</style>
  
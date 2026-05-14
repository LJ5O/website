<template>
    <Header/>
    <div id="contact_page">
      <div id="contact_content">
        <img :src="ContactSvg"/>
        
        <div id="contact_content_text">
          <h1>{{ $t("contact.title") }}</h1>
          <p class="subtitle">{{ $t("contact.subtitle") }}</p>
          <h2>{{ $t("contact.emails.sending.title") }}</h2>
          <p>{{ $t("contact.emails.sending.desc", {user:"kevin", domain:"taccoen.fr"}) }}</p>
          <h2>{{ $t("contact.emails.pgp.title") }}</h2>
          <p>{{ $t("contact.emails.pgp.desc") }}</p>
          <p style="white-space: pre-line;">{{ $t("contact.emails.pgp.key") }}</p>
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
  
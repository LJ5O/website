<template>
  <div id="presentation_div" class="">
      <div id="presentation_text">
        <h1>{{ $t("home.presentationTitle") }}</h1>
        <article>
          <p v-html="$t('home.presentationText')"></p>
        </article>
      </div>
      <div id="presentation_img"><img :src="welcomeImg"></div>
    </div> <!-- Presentation div -->
</template>

<script setup>
  import welcomeImg from "@/assets/svg/welcome.svg";
</script>

<style>
#presentation_div{
    width: 80vw;
    margin: auto;
    margin-top: 40px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 25px;
    border-bottom: 2px solid #EAEAEA;
}
#presentation_text{
    width: calc( 55% - 30px );
    min-width: 250px;
    flex:1;
    margin-left: 30px;
}
#presentation_text h1{
    width: fit-content;
    margin:auto;
    margin-top: 5px;
    font-size: 2.6em;
}
#presentation_text article p{
    width: fit-content;
    margin:auto;
    margin-top: 20px;
    font-size: 1.4em;
}
#presentation_img{
    width: 40%;
    min-width: 400px;
    margin-left: auto;
    margin-top: 20px;
    flex:1;
}
#presentation_img img{
    width: 100%;
    height: 100%;
}

@media (max-width: 599px) {
    #presentation_img {
      min-width: 200px !important;
    }
}
</style>
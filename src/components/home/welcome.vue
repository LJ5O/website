<template>
    <div class="" id="welcome_div">
      <!--<p id="random_citation">Random Sentence</p>-->

        <div class="test" id="name_div">
            <div id="profile_picture"><img src="https://picsum.photos/200" height="100%" width="100%"></div>
           
            <div id="name_div_right_container">
              <div class="test" id="welcome_text_div">
                <h1> {{ $t('home.greeting') }} </h1>
                <dynamicOccupation id="dynamic_occupation" :sentences="occupations" />
              </div>
              <div id="social_networks" class="test">
                <social v-for="(e,i) in networks" :key="i" :img="e.img" :routerLink="e.routerLink" :link="e.link" />
              </div>
            </div>
        </div> <!-- Name div -->
    </div> <!-- Welcome Div -->
</template>

<script setup>
  import dynamicOccupation from './dynamicOccupation.vue';
  import social from './libs/social.vue';
  import {useI18n} from 'vue-i18n';

  import mailSvg from '@/assets/img/mail.svg';
  import lineImg from '@/assets/img/line.png';
  import githubSvg from '@/assets/img/github.svg';

  const i18n = useI18n();

  const occupations = [
  i18n.t('home.occupation.ai'), i18n.t('home.occupation.fullstack'),
  i18n.t('home.occupation.student')
  ]

  const networks = [{
      img:githubSvg,
      routerLink:false,
      link:"#"
    },{
      img:lineImg,
      routerLink:false,
      link:"#"
  },{
      img:mailSvg,
      routerLink:true,
      link:"#"
    }];
</script>

<style scoped>

#welcome_div{
    width: 100vw;
    height: 100vh;
    margin: 0;
    min-height: 650px;
}

#random_citation{
    position: absolute;
    top: 180px;
    left: 65%;
    font-size: 2em;
    transform:rotate(15deg);
}

#name_div{
    margin-top: 10%;
    margin-left: 15%;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#profile_picture{
    width: 300px;
    height: 300px;
}
#profile_picture img{
    border-radius: 50%;
}

#name_div_right_container{
    display: flex;
    flex-direction: column;
    height: fit-content;
    flex-wrap: wrap;
}
#welcome_text_div{
    height: 100%;
    width: fit-content;
}
#welcome_text_div h1{
    margin-top: 100px;
    margin-bottom: 10px;
    font-size: 2em;
}

#social_networks{
    height: fit-content;
    display: flex;
    flex-direction: row;
}

</style>
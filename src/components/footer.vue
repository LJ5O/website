<template>
  <footer>
    <div id="footer_content">

      <div id="footer_social_networks">
        <h1>{{$t("footer.social")}}</h1>

        <social v-for="(e,i) in networks" :key="i" :img="e.img" 
          :routerLink="e.routerLink" :link="e.link" class="footer_social_network_item" />

      </div>
      
      <!--<nav id="footer_content_links">
        <h1>{{$t("footer.sitemap")}}</h1>

        <div class="footer_links_box">
          <h2 class="footer_links_box_title">Projects</h2>
          <ul>
            <li><p><a href="#">Project 1</a></p></li>
            <li><p><a href="#">Project 2</a></p></li>
            <li><p><a href="#">Project 3</a></p></li>
          </ul>
        </div>

      </nav>--> <!-- Footer content links -->

      <div id="footer_contact_div">
        <h1>{{$t("footer.contact")}}</h1>
        <p>{{$t("footer.contact_text")}}</p>
        <router-link :to="{ name: 'contact'}" id="footer_contact_button_link">
          <div id="footer_contact_button" class="button">{{$t("footer.contact_button")}}</div>
        </router-link>
      </div>

      <div id="footer_right_div">
        <div id="footer_picture">
          <img :src="meImg">
        </div>
        <div id="language_selection_div">
          <img :src="frFlagSvg" @click="changeLanguage('fr')"/>
          <img :src="ukFlagSvg" @click="changeLanguage('en')"/>
          <!--<img :src="usFlagSvg" @click="changeLanguage('en')"/>
          <img :src="jpFlagSvg" @click="changeLanguage('ja')"/>-->
        </div>
      </div>

    </div> <!-- Footer content -->
    <div id="footer_bottom"><!-- Footer bottom -->
      <p id="footer_little_text">&lt;/&gt; with &lt;3 myself.<br>© 2025 Kévin Taccoen. All rights reserved.</p>
      <music id="music_button"/>
    </div>
  </footer>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

  import social from './home/libs/social.vue';
  import music from './footer/music.vue';

  import meImg from '@/assets/img/me/full.png'

  import mailSvg from '@/assets/img/mail.svg';
  import lineImg from '@/assets/img/line.png';
  import githubSvg from '@/assets/img/github.svg';

  import frFlagSvg from '@/assets/svg/language/FR_flag.svg';
  import jpFlagSvg from '@/assets/svg/language/JP_flag.svg';
  import ukFlagSvg from '@/assets/svg/language/UK_flag.svg';
  import usFlagSvg from '@/assets/svg/language/US_flag.svg';

  import {useI18n} from 'vue-i18n';
  const i18n = useI18n();

  const networks = [{
    img:githubSvg,
    routerLink:false,
    link:"https://github.com/LJ5O"
  },/*{
    img:lineImg,
    routerLink:false,
    link:"#"
  },*/{
    img:mailSvg,
    routerLink:true,
    link:"contact"
  }];

  const changeLanguage = (lang)=>{
    document.cookie = "localeCookie="+lang;
    location.reload(); // So everything can reload with the new cookie, and a new display language
  }
</script>

<style scoped>
    footer{
        background-color: #2c2b2b;
        margin-top: 50px;
        border-top: #EAEAEA 2px solid;
        height: fit-content;
        position: relative; /* So img can be absolute */
    }
    #footer_content{
        width: 80%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
        gap: 30px;
    }

    #footer_content h1{
        font-size: 1.8em;
        width: 100%;
        margin: 0;
        margin-bottom: 4px;
        height: fit-content;   
    }

    #footer_social_networks{
        width: 15%;
        min-width: 200px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .footer_social_network_item{
        width: 50px;
        height: 50px;
        margin: 0 !important;
        margin-right: 20px !important;
        margin-top: 10px !important;
    }

    #footer_content_links{
        display: flex;
        flex-direction: row;
        width: 25%;
        min-width: 250px;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .footer_links_box{
        width: fit-content;
        margin-right: 20px;
        margin-bottom: 15px;
    }
    .footer_links_box_title{
        font-size: 1.4em;
        border-bottom: rgb(179, 72, 122) 2px solid;
        margin: 0;
        margin-bottom: 2px;
        margin-top: 2px;
    }
    .footer_links_box ul{
        text-decoration: none;
        padding: 0;
        margin: 0;
        margin-top: 4px;
    }
    .footer_links_box li p{
        margin: 0;
        font-size: 1.2em;
        text-decoration: none;
        margin-bottom: 2px;
    }

    #footer_contact_div{
        width: 16%;
        min-width: 160px;
    }
    #footer_contact_div h1{
        width: fit-content !important;
        margin: auto;
        margin-bottom: 0;
    }
    #footer_contact_div p{
        margin-top: 10px;
        margin-bottom: 12px;
        text-align: center;
    }
    #footer_contact_button_link{
      display: block;
      width: 50%;
      margin: auto;
    }
    #footer_contact_button{
        background-color: rgb(65, 185, 61);
        font-size: 1.1em;
        width: 100%;
        color:black;
    }
    #footer_right_div{
        width: fit-content;
        min-width: 100px;
        min-height: 100px;
        margin-left: auto;
        display: flex;
        flex-direction: row; /* Change here to restore row of flags under the picture */
        justify-content: center;
        gap: 20px;
    }
    #footer_picture{
      text-align: center;
    }
    #footer_picture > img{
        /*height: 100px;*/
        width: 100px;
    }
    #language_selection_div{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /*min-width: fit-content;*/
      width: 120px;/* Change here to restore row of flags under the picture */
      gap: 7px;
      max-height: 100px;/* Change here to restore row of flags under the picture */
      align-items: center;
    }
    #language_selection_div img{
      width: 50px;
      cursor: pointer;
    }

    #footer_bottom{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      align-items: flex-end;
    }
    #footer_little_text{
        font-size: 0.8em;
        margin: 0;
        margin-left: 20px;
    }
    #music_button{
      margin-right: 15px;
      margin-bottom: 5px;
    }
</style>
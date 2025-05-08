import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Localization

import fr from "./assets/localization/fr/localization.json";
import en from "./assets/localization/en/localization.json";
import ja from "./assets/localization/ja/localization.json";

function getCookie(cname) {
  // Thanks https://www.w3schools.com/js/js_cookies.asp
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let userLanguage = getCookie("localeCookie") || navigator.language || navigator.userLanguage;

if(userLanguage.split("-")[0] == "fr") userLanguage = "fr";
else if(userLanguage.split("-")[0] == "jp" || userLanguage.split("-")[0] == "ja") userLanguage = "ja";
else userLanguage = "en";

const i18n = createI18n({
    legacy:false,
    locale: userLanguage,//'en',
    fallbackLocale: 'en',
    messages: {
      en: en,
      ja: ja,
      fr: fr
    }
});

document.body.classList.add(userLanguage);

// Creating App

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

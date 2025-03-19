import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Localization

import fr from "./assets/localization/fr/localization.json";
import en from "./assets/localization/en/localization.json";
import ja from "./assets/localization/ja/localization.json";

let userLanguage = navigator.language || navigator.userLanguage;

if(userLanguage.split("-")[0] == "fr") userLanguage = "fr";
else if(userLanguage.split("-")[0] == "jp" || userLanguage.split("-")[0] == "ja") userLanguage = "ja";
else userLanguage = "en";

console.warn("Locale forced to english !");

const i18n = createI18n({
    legacy:false,
    locale: 'en',//userLanguage,
    fallbackLocale: 'en',
    messages: {
      en: en,
      ja: ja,
      fr: fr
    }
})

// Creating App

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')

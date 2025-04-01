<template>
  <div v-if="isHuman">
    <h2>{{ $t("contact.emails.work.title") }}</h2>
    <p>{{ $t("contact.emails.work.desc", {email:mail1}) }}</p>
    <h2>{{ $t("contact.emails.school.title") }}</h2>
    <p>{{ $t("contact.emails.school.desc", {email:mail2}) }}</p>
    <h2>{{ $t("contact.emails.others.title") }}</h2>
    <p>{{ $t("contact.emails.others.desc", {email:mail3}) }}</p>
  </div>
  <div v-else>
    <h2>{{ $t("contact.captcha.title") }}</h2>
    <p>{{ $t("contact.captcha.desc") }}</p>
    <p v-if="isFalse">{{ $t("contact.captcha.false") }}</p>
    <label for="captcha">{{ $t("contact.captcha.question", {x:x, y:y, z:z}) }}</label>
    <input type="number" id="captcha" v-model="captchaValue"/>
    <button class="button" @click="captchaSubmit">{{ $t("contact.captcha.submit") }}</button>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';

    const validationChar = "&"; // Used to check that provided number is valid
    const x = 7;
    const y =20;
    const z = 1;

    let mail1 = ref("");
    let mail2 = ref("");
    let mail3 = ref("");

    let captchaValue = ref(0);
    let isHuman = ref(false);
    let isFalse = ref(false);

    onBeforeMount(()=>{

    });

    const captchaSubmit = ()=>{
        if(ceasarEncryption(validationChar, captchaValue.value) == "@"){
            //OK
            isFalse.value = false;
            isHuman;value = true;
            readEmails();
        }else{
            isFalse.value = true;
        }
    };

    const readEmails = ()=>{
        for(let i=0; i<encryptedEmails.length; i++){
            const letter = ceasarEncryption(encryptedEmails[i], 26);
            if(letter == "*") continue;
            if(i%3==0){
                //mail1.value= mail1.value+letter;
            }else if(i%3==1){
                //mail2.value = mail2.value+letter;
            }else{
                //mail3.value = mail3.value+letter;
            }
            if(i%3==1)console.log(letter);
        }
    }
    
    const ceasarEncryption = (input, gap)=>{
        return String.fromCharCode(input.charCodeAt(0) + gap);
    }
    const encodeEmails = (emails, key)=>{
        let output = "";
        let i=0;
        let j=0;
        let letterIndex=0;
        while(true){
            const mail = emails[i%emails.length];
            let end = true;

            if(j<mail.length){
                //still letters to add
                output+=ceasarEncryption(mail[j], key);
                end=false;
            }else{
                output+=ceasarEncryption('*', key);
            }

            i++;
            if(end)break;
            if(i%emails.length == emails.length-1)j++; // Looped through all emails, next letter
        }
        return output;
    }
</script>

<style scoped>
    label{
        color: #EAEAEA;
    }
</style>
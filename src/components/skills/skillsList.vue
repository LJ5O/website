<template>
  <div class="fact">
    <img :src="picture">
    <article>
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
    </article>
    <RouterLink v-if="link!='#'" class="router" :to="link"><button class="button">{{ buttonText }}</button></RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
        title:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        buttonText:{
            type:String,
            required:false,
            default:undefined
        },
        link:{
            type:String,
            required:false,
            default: "#"
        },
        picture:{
            type:String,
            required:true
        }
    });
</script>

<style scoped>
    .fact{
        background-color: #302c2c;
        border: 2px solid #EAEAEA;
        border-radius: 16px;
        display: flex;
        flex-direction: row;
        flex-basis: content;
        height: 200px;
        /*justify-content: space-between;*/
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }

    img{
        height: 150px;
        width: 30%;
        min-width: 100px;
        margin-left: 20px;
    }

    article{
        color: white;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /*align-items: center;*/
        max-width: 50%;
        gap: 10px;
    }

    article p, article h2{
        margin: 0;
        text-align: left;
    }

    .router{
        margin-right: 20px;
        min-width: 50px;
    }

    .router button{
        background-color: aqua;
        font-size: 1.3em;
        width: fit-content;
    }

</style>
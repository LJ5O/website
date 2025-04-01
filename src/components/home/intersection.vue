<template>
  <div class="intersection_div">
      <div class="intersection_content test">
        <h2 class="test">{{ props.text }}</h2>
        <RouterLink :to="buttonLink"><div class="button intersection_button_div test">
            <p>{{buttonText}}</p>
        </div></RouterLink>
      </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
        text:{
            type: String,
            required: true
        },
        buttonText:{
            type: String,
            required: true
        },
        buttonLink:{
            type: String,
            required: true
        }
    });
</script>

<style scoped>
    .intersection_div{
        width: 100vw;
        height: 150px;
        background-color: #D9D9D9;
    }
    .intersection_content{
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: row;
        height: 100%;
    }
    .intersection_content h2{
        color: #1E1E1E !important;
    }
    .intersection_button_div{
        margin-left: 30px;
        background-color: #A58181;
        height: 2.5em;
    }
    .intersection_button_div p{
        margin: 0;
        margin-top: 0.75em; /* Half of parent height - Half of font size : 1.25 - 0.75*/
        transform: translateY(-50%);
        font-size: 1.5em;
        text-decoration: none;
        color: black;
    }
</style>
<template>
    <div class="school_display">
        <div class="school_picture">
            <img :src="img"/>
        </div>

        <div class="school_info">
            <p class="school_name">{{ name }}</p>
            <p class="school_about">{{ desc }}</p>
            <a :href="link" v-if="link!=undefined" target="__blank"><button class="button">Website</button></a>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        name:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:false
        }
    })
</script>

<style scoped>
    .school_display{
        width: 100%; /*Should be in a <article> covering 80% of vw*/
        max-width: 1000px;
        background-color: rgb(61, 61, 61);
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /*align-items: center;*/
        justify-content: center;
        border-radius: 8px;
    }

    .school_picture{
        width: fit-content;
        height: fit-content;
        flex: 1 1 30%;
        margin: 15px;
        overflow: hidden;
    }
    .school_picture img{
        width: 100%;
    }

    .school_info{
        height: 80%;
        width: 60%;
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
    }
    .school_name{
        font-size: 1.5em;
        margin-top: 15px;
        margin-bottom: 5px;
    }
    .school_about{
        margin: 0;
    }
    .school_info a{
        width: 150px;
    }
    .school_info button{
        margin-top: 15px;
        margin-block: 15px;
        background-color: rgb(51, 143, 230);
        font-size: 1.1em;
        width: 100%;
        color:black;
    }
</style>
<template>
    <div class="network">
        <RouterLink v-if="routerLink" :to="link">
            <img :src="img">
        </RouterLink>
        <a v-else :href="link" target="_blank">
            <img :src="img">
        </a>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        img: {
            type:String,
            required:true
        },
        link:{
            type:String,
            required: true
        },
        routerLink:{
            required:false,
            type:Boolean,
            default:false
        }
    })
</script>

<style scoped>
.network{
    height: 50px;
    width: 50px;
    margin-left: 15px;
}
.network img{
    border-radius: 50%;
    height: 100%;
    width: 100%;
}
</style>
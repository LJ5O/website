<template>
  <img :src="musicSvg" @click="open_music"/>
</template>

<script setup>
    import musicSvg from "@/assets/svg/music.svg";

    const musics = [ // This is just a list of nice musics I listened at least once while working
        "https://gensokyoradio.net/", // Will updated from times to times to remove deleted songs or add some new ones
        "https://musicforprogramming.net/",
        "https://youtu.be/KPTALvwccME",
        "https://www.youtube.com/watch?v=I-FqKYGK5_M",
        "https://www.youtube.com/watch?v=YUUFtUjiblk",
        //"https://www.youtube.com/watch?v=wEwnEeq23SY",
        "https://youtu.be/s28KGdOVaZ0",
        "https://youtu.be/esofirhSD-o",
        "https://youtu.be/5lrseDtxX_E",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Never gonna give you up :]
        "https://youtu.be/5-sfG8BV8wU",
        "https://youtu.be/rarpN863WlE",
        "https://youtu.be/VA7rto4XuV0",
        "https://youtu.be/d1d6vPTwoKU",
        "https://www.youtube.com/watch?v=ibvGROS0LwY",
        "https://www.youtube.com/playlist?list=PL8DD873BF6A3E56E5",
        "https://www.youtube.com/watch?v=8yISocSYXvc"

    ];

    const open_music = ()=>{
        const link = musics[Math.floor(Math.random() * musics.length)];
        window.open(link, '_blank').focus();
    }
</script>

<style scoped>
    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
</style>
<template>
  <header>
    <div id="header_content">
        <RouterLink to="/">
            <div id="header_picture">
                <img src="https://picsum.photos/50/50"/>
            </div>
        </RouterLink>
    </div>
  </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    header{
        height: 60px;
        background-color: #252525;
        display: flex;
    }
    #header_content{
        height: 100%;
        width: 95%;
        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #header_picture{
        width: 50px;
        height: 50px
    }
    #header_picture img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
</style>
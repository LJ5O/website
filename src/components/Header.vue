<script setup lang="ts">
    defineProps({
        links: {
            type: Array<[string, string]>,
            required: true
        }
    })
</script>

<template>
    <nav class="head_div">
        <ul>
            <a v-for="link in links" :href="link[1]"><li ><p>{{ link[0] }}</p></li></a>
        </ul>
    </nav>
</template>

<style scoped>

    .head_div{
        min-height: 5vh;
        max-height: 20vh;
        margin: 0;
        width: 100vw;
        /*background-color: #022B3A;*/
    }

    ul{
        display: flex;
        flex-flow: row;
        flex-direction: row;
        justify-content: flex-start;
    }

    a{
        list-style: none;
        padding: 10px;
        margin: 15px;
        border-radius: 8px;
        width: fit-content;
        font-size: 1.4em;
        text-decoration: none;
    }

    a:visited {
        color: inherit;
    }

    a:hover{
        background-color: rgb(53, 53, 53);
    }

</style>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));


    const jobTitles = ["Computer Science student", "AI enthousiast", "Full-stack web developer"];
    let currentJob = ref('');
    let currentChar = 0;
    let currentTitle = 0;
    
    async function startTypewriter(){
        let recursive = async ()=>{
            if(currentChar > jobTitles[currentTitle].length-1){
                //We finished to write this title
                //Let's wait a little, so user can read it
                await delay(1500);

                currentChar = 0;
                currentTitle = (currentTitle+1) % jobTitles.length;
                currentJob.value = ''; // Clear of wrote value
            }
            currentJob.value = currentJob.value + jobTitles[currentTitle][currentChar];
            currentChar++;
            await delay(400);
            recursive();
        }
        recursive();
    }

    onMounted(() => {
        startTypewriter();
    });
</script>

<template>
    <div class="typewriter_welcome">

        <div class="typewriter">
            <h1>Hi ! It's Kévin Sailly</h1>
            <br><h2 class="job_title">{{currentJob}}</h2>
        </div>

        <div class="picture">
            <img src="@/assets/welcome_picture.jpg" width="100%" height="100%"/>
        </div>

    </div>
</template>

<style scoped>
    .typewriter_welcome{
        width: 100%;
        border: 2px green dotted;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap-reverse;
    }

    .typewriter{
        border: 2px yellow dotted;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 5vw;
        width: 20vw;
        min-width: 350px;
        overflow:visible;
    }
    .typewriter h1{
        font-size: 2.8em;
    }
    .job_title{
        width: fit-content;
        font-size: 1.8em;
        animation: blink-caret .75s step-end infinite;
        border-right: .15em solid orange;
    }

    .picture{
        border: 2px greenyellow dotted;
        width: 25vw;
        margin-right: 10vw;
        min-width: 300px;
    }
    .picture img{
        border-radius: 50%;
        border: 3px #976391 solid;
    }

    /* Animation */
    /* The typewriter cursor effect */
    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
    }

</style>
<template>
  <h2>{{ displayedWorld }}<span id="cursor"/></h2>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const props = defineProps({
        sentences:{
            type:Array,
            required:true
        },
        speed:{
            type:Number,
            required:false,
            default: 250
        },
        pauseOnWordEnd:{
            type:Number,
            required:false,
            default:1000
        }
    });

    let active = ref(true);
    let chosenWord = ref(0);
    let currentLetter = ref(0);
    let displayedWorld = ref("");

    const tick = ()=>{
        const word = props.sentences[chosenWord.value];
        if(currentLetter.value < word.length){
            //We still have letters to display
            displayedWorld.value = displayedWorld.value + word.at(currentLetter.value);
            currentLetter.value++;
        }else{
            //Next word, reset
            displayedWorld.value = "";
            currentLetter.value = 0;
            chosenWord.value = (chosenWord.value+1) % props.sentences.length;
        }

        if(active.value && currentLetter.value == word.length)
            setTimeout(tick, props.pauseOnWordEnd); //Word complete, longer pause
        else if(active.value) setTimeout(tick, props.speed);
    }

    onMounted(tick);

    onUnmounted(()=>{active.value=false;})
</script>

<style scoped>

    h2{
        height: fit-content;
        font-size: 1.5em;
        margin-top: 10px;
        margin-bottom: 5px;
        width: fit-content;
        /*min-height: 3em;*/
    }
    #cursor{
        border-right: 2px solid #EAEAEA;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
    50%{opacity: 0;}
    }

</style>
<template>
  <h2>{{ displayedWorld }}</h2>
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

        if(active.value) setTimeout(tick, props.speed);
    }

    onMounted(tick);

    onUnmounted(()=>{active.value=false;})
</script>

<style scoped>

    h2{
        height: 1.5em;
        font-size: 1.5em;
        margin-top: 10px;
        margin-bottom: 5px;
        width: fit-content;
        border-right: 2px solid #EAEAEA;
    }

</style>
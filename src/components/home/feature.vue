<template>
  <div class="feature_div" :class="{'reversed':props.side}">
      <div class="feature_img_div">
        <img :src="props.picture">
      </div>
      <div class="feature_text_div">
        <h2>{{ props.title }}</h2>
        <article>
          <p>{{ props.desc }}</p>
        </article>
        <button class="button feature_button">{{ props.buttonText }}</button>
      </div>
    </div> <!-- Feature div -->
</template>

<script setup>
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
            required:true
        },
        link:{
            type:String,
            required:true
        },
        picture:{
            type:String,
            required:true
        },
        side:{
            type:Boolean,
            required:true
        }
    });
</script>

<style scoped>
.feature_div{
    width: 75%;
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 6%;
}
.feature_img_div{
    width: 40%;
    flex: 1;
    max-height: 600px;
    min-width: 150px;
}
.feature_img_div img{
    height: 100%;
    width: 100%;
}
.feature_text_div{
    width: 40%;
    flex: 1;
    min-width: 300px;
}
.feature_text_div h2{
    margin-bottom: 5px;
}
.feature_text_div article p{
    margin-top: 20px;
}
.feature_button{
    background-color: aqua;
    font-size: 1.3em;
}
.reversed{
    flex-direction: row-reverse !important;
}
</style>
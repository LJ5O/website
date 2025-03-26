<template>
  <div id="projects_summary">
      <div id="projects_summary_text">
        <h1>Les projets que j'ai déjà fait</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis 
          lectus, feugiat in eros sit amet, venenatis euismod urna. Aliquam id 
          porttitor erat, vitae dapibus velit. Praesent id felis tincidunt.</p>
      </div>

      <div id="projects_holder">

        <div v-for="(e,i) in props.projects" :key="i" class="project">
          <div class="project_picture">
            <img :src="e.picture">
          </div>
          <div class="project_tags">
            <projectTag v-for="(tag,indexTag) in e.tags" :key="indexTag" :title="tag.title" :colour="tag.colour"></projectTag>
          </div>
          <div class="project_description">
            <article>
              <p>{{ e.desc }}</p>
            </article>
            <a :href="e.buttonLink"><button class="button project_button">{{ e.buttonText }}</button></a>
          </div>
        </div>

      </div>
    </div> <!-- Projects summary -->
</template>

<script setup>
    import projectTag from './libs/projectTag.vue';

    const props = defineProps({
        projects:{
            type:Array,
            required:true
        }
    });
</script>

<style scoped>
    #projects_summary{
        width: 80%;
        margin: auto;
        margin-top: 30px;
    }
    #projects_summary_text h1{
        margin-top: 0;
        margin-bottom: 20px;
        text-align: center;
    }
    #projects_summary_text p{
        margin-top: 0;
        margin-bottom: 20px;
        text-align: center;
    }
    #projects_holder{
        width: 90%;
        margin: auto;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
    .project{
        max-width: 400px;
        max-height: 600px;
        width: 100%;
        height: 100%;
        background-color: #2c2b2b;
        border-radius: 8px;
        border: 2px #EAEAEA solid;
    }
    .project_picture{
        height: 200px;
        width: 95%;
        margin: auto;
        margin-top: 10px;
    }
    .project_picture img{
        width: 100%;
        height: 100%;
    }
    .project_tags{
        width: 95%;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
    }
    .project_description{
        width: 90%;
        margin: auto;
        font-size: 1.1em;
        margin-bottom: 20px;
        margin-top: 0px;
    }
    .project_description p{
        margin: 8px auto;
    }
    .project_button{
        background-color: rgb(65, 185, 61);
        font-size: 1.1em;
    }
</style>
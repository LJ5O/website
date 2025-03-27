<template>
  <div id="projects_summary">
      <div id="projects_summary_text">
        <h1>{{ $t("home.projects.title") }}</h1>
        <p>{{ $t("home.projects.desc") }}</p>
      </div>

      <div id="projects_holder">

        <div v-for="(e,i) in projctsInfo" :key="i" class="project">
            
            <h2>{{ e.title }}</h2>
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
                <a :href="e.buttonLink" target="_blank" v-if="e.buttonLink"><button class="button project_button">{{ e.buttonText }}</button></a>
                <a :href="e.button2Link" target="_blank" v-if="e.button2Link"><button class="button project_button_secondary">{{ e.button2Text }}</button></a>
            </div>
        </div>

      </div>
    </div> <!-- Projects summary -->
</template>

<script setup>
    import projectTag from './libs/projectTag.vue';

    import disblockSvg from "@/assets/svg/projects/disblock.svg";
    import portfolioImg from "@/assets/img/portfolio.png";
    import semanticSegmentation from '@/assets/img/semantic_segmentation.png';

    import {useI18n} from 'vue-i18n';
    const i18n = useI18n();

    const tagsColours = {
        home:'#8a1bc8',
        active:'#598609',
        bugs_only:'#7a781f',
        archived: '#6c5e73',
        school: '#163799',
        research: '#3ba1c8'
    };

    const projctsInfo = [{
        picture: disblockSvg,
        title: i18n.t("home.projects.project.disblock.title"),
        desc:i18n.t("home.projects.project.disblock.desc"),
        buttonText:i18n.t("home.projects.project.disblock.button_text"),
        buttonLink:"https://disblock.xyz",
        button2Text:i18n.t("home.projects.project.disblock.button2_text"),
        button2Link:"https://github.com/Disblock/WebApp",
        tags:[
            {title:i18n.t("home.projects.tags.home"), colour:tagsColours.home},
            {title:i18n.t("home.projects.tags.bugs_only"), colour:tagsColours.bugs_only}
        ]
    },{
        picture: portfolioImg,
        title: i18n.t("home.projects.project.portfolio.title"),
        desc:i18n.t("home.projects.project.portfolio.desc"),
        buttonText:i18n.t("home.projects.project.portfolio.button_text"),
        buttonLink:"https://portfolio.taccoen.dev/",
        button2Text:i18n.t("home.projects.project.portfolio.button2_text"),
        button2Link:"https://github.com/LJ5O/portfolio",
        tags:[
            {title:i18n.t("home.projects.tags.home"), colour:tagsColours.home},
            {title:i18n.t("home.projects.tags.school"), colour:tagsColours.school},
            {title:i18n.t("home.projects.tags.bugs_only"), colour:tagsColours.bugs_only}
        ]
    },{
        picture: semanticSegmentation,
        title: i18n.t("home.projects.project.semantic_segmentation.title"),
        desc:i18n.t("home.projects.project.semantic_segmentation.desc"),
        buttonText:i18n.t("home.projects.project.semantic_segmentation.button_text"),
        buttonLink:"#",
        tags:[
            {title:i18n.t("home.projects.tags.research"), colour:tagsColours.research},
            {title:i18n.t("home.projects.tags.school"), colour:tagsColours.school},
            {title:i18n.t("home.projects.tags.archived"), colour:tagsColours.archived}
        ]
    }];
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
        max-height: fit-content;
        width: 100%;
        height: 100%;
        background-color: #2c2b2b;
        border-radius: 8px;
        border: 2px #EAEAEA solid;
    }
    .project h2{
        margin:0;
        margin-top: 10px;
        text-align: center;
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
    .project_button_secondary{
        background-color: rgb(62, 128, 148);
        font-size: 1.1em;
        margin-left: 10px;
    }
</style>
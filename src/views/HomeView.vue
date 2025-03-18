<script setup>
  import welcome from '@/components/home/welcome.vue';
  import intersection from '@/components/home/intersection.vue';
  import presentation from '@/components/home/presentation.vue';
  import feature from '@/components/home/feature.vue';
  import projects from '@/components/home/projects.vue';

  const features = [{
    title:"Hello World !",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis \
            lectus, feugiat in eros sit amet, venenatis euismod urna. Aliquam id \
            porttitor erat, vitae dapibus velit. Praesent id felis tincidunt, \
            efficitur tortor eget, volutpat orci. Vestibulum ac lectus tincidunt, \
            suscipit justo at, fringilla nisl. Aliquam tincidunt congue faucibus. Duis in nisi tortor. \
            Nulla sit amet turpis nec turpis rhoncus venenatis. Sed nec malesuada quam. \
            Aenean faucibus neque id nibh facilisis auctor. ",
    buttonText: "Click me !",
    picture: "https://picsum.photos/600/400",
    link: "#"
  },{
    title:"Hello World !",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis \
            lectus, feugiat in eros sit amet, venenatis euismod urna. Aliquam id \
            porttitor erat, vitae dapibus velit. Praesent id felis tincidunt, \
            efficitur tortor eget, volutpat orci. Vestibulum ac lectus tincidunt, \
            suscipit justo at, fringilla nisl. Aliquam tincidunt congue faucibus. Duis in nisi tortor. \
            Nulla sit amet turpis nec turpis rhoncus venenatis. Sed nec malesuada quam. \
            Aenean faucibus neque id nibh facilisis auctor. ",
    buttonText: "Click me !",
    picture: "https://picsum.photos/600/400",
    link: "#"
  }];

  const projects_info = [{
    picture:"https://picsum.photos/400/300",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis lectus, feugiat in eros sit amet, \
      venenatis euismod urna. Aliquam id porttitor erat, vitae dapibus velit. Praesent id felis tincidunt,",
    buttonText:"Oui !",
    buttonLink:"#"
  }]
</script>

<template>

    <welcome/>

    <intersection text="Lorem ipsum dolor sit amet" button-text="En savoir plus" button-link="#"/>

    <presentation/>

    <feature v-for="(e,i) in features" 
      :key="i"
      :title="e.title"
      :desc="e.desc"
      :button-text="e.buttonText"
      :link="e.link"
      :picture="e.picture"
      :side="i%2==0"
    />

    <intersection style="margin-top: 20px;" text="Lorem ipsum dolor sit amet" button-text="En savoir plus" button-link="#" />

    <projects :projects="projects_info"/>

</template>

<style scoped>

footer{
    background-color: #2c2b2b;
    margin-top: 50px;
    border-top: #EAEAEA 2px solid;
    height: fit-content;
    position: relative; /* So img can be absolute */
}
#footer_content{
    width: 80%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    gap: 30px;
}

#footer_content h1{
    font-size: 1.8em;
    width: 100%;
    margin: 0;
    margin-bottom: 4px;
    height: fit-content;   
}

#footer_social_networks{
    width: 15%;
    min-width: 200px;
    border: 2px rgb(16, 207, 102) dotted;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
}
.footer_social_network_item{
    width: 50px;
    height: 50px;
    margin: 0;
    margin-right: 20px;
    margin-top: 10px;
}
.footer_social_network_item img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

#footer_content_links{
    display: flex;
    flex-direction: row;
    width: 25%;
    min-width: 250px;
    flex-wrap: wrap;
    border: 2px rgb(212, 15, 230) dotted;
    align-content: flex-start;
}
.footer_links_box{
    border: 3px blue dotted;
    width: fit-content;
    margin-right: 20px;
    margin-bottom: 15px;
}
.footer_links_box_title{
    font-size: 1.4em;
    border-bottom: rgb(179, 72, 122) 2px solid;
    margin: 0;
    margin-bottom: 2px;
    margin-top: 2px;
}
.footer_links_box ul{
    text-decoration: none;
    padding: 0;
    margin: 0;
    margin-top: 4px;
}
.footer_links_box li p{
    margin: 0;
    font-size: 1.2em;
    text-decoration: none;
    margin-bottom: 2px;
}

#footer_contact_div{
    border: rgb(82, 15, 170) 2px solid;
    width: 15%;
    min-width: 160px;
}
#footer_contact_div h1{
    width: fit-content !important;
    margin: auto;
    margin-bottom: 0;
}
#footer_contact_div p{
    margin-top: 10px;
    margin-bottom: 12px;
    text-align: center;
}
#footer_contact_button{
    background-color: rgb(65, 185, 61);
    font-size: 1.1em;
    width: 50%;
    margin: auto;
}

#footer_little_text{
    font-size: 0.8em;
    margin: 0;
    margin-left: 20px;
}
#footer_picture{
    width: 100px;
    height: 100px;
    margin-left: auto;
    border: 2px green dotted;
}
#footer_picture img{
    width: 100%;
    height: 100%;
}
</style>

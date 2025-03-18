<template>
  <div id="presentation_div" class="">
      <div id="presentation_text">
        <h1>Thanks for coming !</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean nec ante tristique, tincidunt dolor a, maximus nisl. 
            Curabitur ut metus accumsan, vestibulum ex vitae, pretium enim.
            Etiam tincidunt mauris quis elit egestas, vel viverra justo 
            efficitur. Nulla facilisi. Cras porttitor odio a massa pretium 
            varius. Vivamus felis risus, luctus vel mollis nec, lacinia non 
            libero. Proin mattis, ante vitae mattis sollicitudin, turpis 
            erat auctor arcu, vel fringilla arcu diam aliquam urna. 
          </p>
        </article>
      </div>
      <div id="presentation_img"><img :src="welcomeImg"></div>
    </div> <!-- Presentation div -->
</template>

<script setup>
  import welcomeImg from "@/assets/svg/welcome.svg";
</script>

<style>
#presentation_div{
    width: 80vw;
    margin: auto;
    margin-top: 40px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 25px;
    border-bottom: 2px solid #EAEAEA;
}
#presentation_text{
    width: calc( 55% - 30px );
    margin-left: 30px;
}
#presentation_text h1{
    width: fit-content;
    margin:auto;
    margin-top: 5px;
}
#presentation_text article p{
    width: fit-content;
    margin:auto;
    margin-top: 20px;
}
#presentation_img{
    width: fit-content;
    width: 40%;
    min-width: 500px;
    margin-left: auto;
    margin-top: 20px;
}
#presentation_img img{
    width: 100%;
    height: 100%;
}
</style>
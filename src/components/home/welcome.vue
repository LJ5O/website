<template>
    <div class="" id="welcome_div">
      <!--<p id="random_citation">Random Sentence</p>-->

        <div class="test" id="name_div">
            <div id="profile_picture"><img src="https://picsum.photos/200" height="100%" width="100%"></div>
           
            <div id="name_div_right_container">
              <div class="test" id="welcome_text_div">
                <h1>Hello ! I'm {{ $t('message.hello') }} </h1>
                <h2>AI enthousiast</h2>
              </div>
              <div id="social_networks" class="test">
                <div class="network">
                  <img src="https://picsum.photos/50">
                </div>
                <div class="network">
                  <img src="https://picsum.photos/50">
                </div>
                <div class="network">
                  <img src="https://picsum.photos/50">
                </div>
              </div>
            </div>

        </div> <!-- Name div -->
    </div> <!-- Welcome Div -->
</template>

<script>
export default {

}
</script>

<style scoped>

#welcome_div{
    width: 100vw;
    height: 100vh;
    margin: 0;
    min-height: 650px;
}

#random_citation{
    position: absolute;
    top: 180px;
    left: 65%;
    font-size: 2em;
    transform:rotate(15deg);
}

#name_div{
    margin-top: 10%;
    margin-left: 15%;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

#profile_picture{
    width: 300px;
    height: 300px;
}
#profile_picture img{
    border-radius: 50%;
}

#name_div_right_container{
    display: flex;
    flex-direction: column;
    height: fit-content;
    flex-wrap: wrap;
}
#welcome_text_div{
    height: 100%;
    width: fit-content;
}
#welcome_text_div h1{
    margin-top: 100px;
}

#social_networks{
    height: fit-content;
    display: flex;
    flex-direction: row;
}
.network{
    height: 50px;
    width: 50px;
    margin-left: 15px;
}
.network img{
    border-radius: 50%;
}

</style>
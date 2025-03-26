<template>
  <footer>
    <div id="footer_content">

      <div id="footer_social_networks">
        <h1>Social networks</h1>

        <a href="#">
          <div class="footer_social_network_item">
            <img src="https://picsum.photos/50">
          </div>
        </a>

      </div>
      
      <nav id="footer_content_links">
        <h1>Sitemap</h1>

        <div class="footer_links_box">
          <h2 class="footer_links_box_title">Projects</h2>
          <ul>
            <li><p><a href="#">Project 1</a></p></li>
            <li><p><a href="#">Project 2</a></p></li>
            <li><p><a href="#">Project 3</a></p></li>
          </ul>
        </div>

      </nav> <!-- Footer content links -->

      <div id="footer_contact_div">
        <h1>Contact</h1>
        <p>Want to contact me ? Let's have a talk !</p>
        <div id="footer_contact_button" class="button">Contact</div>
      </div>

      <div id="footer_picture">
        <img src="https://picsum.photos/50/50">
      </div>

    </div> <!-- Footer content -->
    <p id="footer_little_text">&lt;/&gt; with &lt;3 by Kévin. Copyright...</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
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
        align-content: flex-start;
    }
    .footer_links_box{
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
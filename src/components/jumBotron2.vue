<template>
	<main>
    <div id="info">

    <section class="jumbotron__image">
        <div class=" txt p-4 pb-0 ">
         <h2 class="text-start fs-1 fw-bold ">We exist to help clients see exciting possibilities through technology that works today and into the future.
          we bring specialized experience offering assured leadership as your organization evolves.
         </h2> 
        </div>
    </section>
   
    </div>
	</main>
  
</template>

<script>
export default {
  name: "jumBotron2",
  methods: {
    text(){
        // return false
        alert("Get in touch")   
     }
    },
};

</script>
<style>
@import '../assets/style.css';

.jumbotron__image {
  padding: 100px 120px; 
  background-repeat: no-repeat;
  background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-business-analysis-and-communication-contemporary-marketing-and-software-for-development-image_1090680.jpg);
  transition: opacity 0.2s ease;
  width: 100%;
  content: ' ';
  z-index: 2;
  backface-visibility: hidden;
  background-position: 50% 0;
  background-size: cover; 
  background-attachment: fixed;  
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden; 
  vertical-align: middle; 
  display: block;
  position: relative; 

}
.jumbotron__image h2 {
  color: white;
  font-size: 20px;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;

}

  
</style>

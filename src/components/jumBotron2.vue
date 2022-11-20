<template>
	<main>
    <div id="info">
    <!-- Introduction Section -->
    <section id="intro" class="second_intro">
         <div class="mt_2 mt">
            <!-- <img class="img-fluid" src="../assets/pic2.png" alt="page logo" /> -->
        </div>  

        <div class=" txt">
         <h2>We exist to help clients see exciting possibilities through technology that works today and into the future.
          we bring specialized experience offering assured leadership as your organization evolves.
         </h2> 
        </div>
         <div id="btn" >
         <button class="button"  @click="text()" >Get in touch</button>
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
  
</style>

<template>
    
 
	<main>
    <!-- Introduction Section -->
    <section id="intro" class="intro">
         <div id="mt">
            <a href="index.html"><img class="img-fluid" src="../assets/background.png" alt="page logo" /></a>
        </div> 

        <div class=" txt mx-auto">
         <h2>Redefine what your future looks like throught Technology.</h2> 
        </div>
         
         <div id="btn">
         <button  @click="text()" >Get in touch</button>
        </div>
       
    </section>
	</main>
  
</template>

<script>
export default {
  name: "jumBotron",
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


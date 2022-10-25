<template>
 
	<main>
    <!-- Introduction Section -->
    <section id="intro" class="intro">
         <div id="mt">
            <a href="index.html"><img class="img-fluid" src="../assets/background.png" alt="page logo" /></a>
        </div> 
         <h3>Redefine what your future looks like throught Technology.</h3> 
         <button  @click="text()" id="btn">Get in touch</button>
          
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


<template>
 
	<main>
    <!-- Introduction Section -->
    <section id="intro" class="intro">
         <h3>Redefine what your future ooks like throught Technology.</h3> 
         <button @click="text()" id="btn" class="btn">Get in touch</button>
          
    </section>
	</main>
  
</template>

<script>
export default {
  name: "jumBotron",
  methods: {
    text(){
        // return true
        alert("Get in touch")   
     }
  },
};





</script>
<style>
@import '../assets/style.css';
  
</style>


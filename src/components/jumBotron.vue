<template>
	<main>
    <div>
    <!-- Introduction Section -->
    <section id="intro" class="intro">
         <div id="mt">
            <a href="index.html"><img class="img-fluid" src="../assets/pic2.png" alt="page logo" /></a>
        </div> 

        <div class=" txt">
         <h2>Redefine what your future looks like throught Technology.</h2> 
         <div id="btn" >
         <button class="btn mt-2"  @click="text()" >Get in touch</button>
        </div>
        </div>
         
        
        
    
       
    </section>
   
    </div>
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


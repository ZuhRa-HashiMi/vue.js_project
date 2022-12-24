<template>
	<main>
    <div>
    <!-- Introduction Section -->
    <section id="intro" class="intro">
         <!-- <div class="mt">
            <a href="index.html"><img class="img-fluid" src="../assets/pic2.png" alt="page logo" /></a>
        </div>  -->
        <div class="txt text_h2">
         <section class="header__hero">
         <div class="hero__lead-text">
          Hi!
         </div>
         </section>
         <h2 class="fw-bold fs-1">We're ShiftByte.</h2><h2> We build outstanding software
           with expertise and passion.</h2>
         <h2>Redefine what your future looks like throught Technology.</h2> 
         <div id="container">
                 <router-link to="/"> <button class="ser_button">Get in Touch</button></router-link>
               </div>
        </div>
    </section>
   
   
    </div>
	</main>
  
</template>

<script>
export default {
  name: "jumBotron",
  data() {
    return {
        layout: 'contact'
    }
  }
//   methods: {
//     text(){
//         // return false
//         alert("Get in touch")   
//      }
//     },
};

</script>
<style>
@import '../assets/style.css';

.btn {
  color: aliceblue;
}
  
</style>


<template>
	<main>
    <section class="header__hero WhatBuild">
         
         <div class="hero__lead-text">
          
          We
          <br>
           build:
         </div>
         </section>
    <!-- Introduction Section -->
    <section class="whatBuild__image">
        <div class=" txt p-4 pb-0">
          <h2 class="text-center fw-bold mb-4 fs-1">Beautiful and solid<br>
             web and mobile applications.</h2>
         <h2 class="text-center fs-2 fw-bold">Over the years we have partnered with amazing innovative companies around the world to build ambitious web and mobile applications, from one-person startups to Fortune 500 companies.
         </h2> 
        </div>
    </section>
    <!-- Introduction Section -->
    <section class="build__back">
        <div class="txt p-4 pb-0">
          <h2 class="text-start fw-bold Are">Are you<br>
             convienced?</h2>
         <h2 class="text-start fs-5 fw-bold pt-0">We'd love to hear about your project.</h2 >
        <!-- <a href=""><button class="build"  @click="layout = 'contactus'" >Contauct Us</button></a> -->
        <router-link to="/contact"> <button class="build">Contauct Us</button></router-link>
        </div>
       
    </section>
   
	</main>
  
</template>

<script>
export default {
  name: "WhatBuild",
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
  
.whatBuild__image {
  padding: 100px 120px; 
  background-repeat: no-repeat;
  background-image: url(https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?crop=16:9);
  transition: opacity 0.2s ease;
  width: 100%;
  content: ' ';
  z-index: 2;
  opacity: 0.9;
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

.whatBuild__image h2 {
  color:  #ea0643;
  margin-bottom: 2rem;
  line-height: 1.25;
  text-indent: -4px;
  font-size: 4.125rem;
  padding: 20px;

}

.build__back {
  padding: 100px 120px; 
  width: 100%;
  z-index: 2;
  height: auto;
  vertical-align: middle; 
  display: block;
  position: relative; 
  background-color: white;
}

.build__back h2{
  color: black;
  margin-bottom: 2rem;
  line-height: 1.25;
  text-indent: -4px;
  font-size: 4.125rem;
  padding: 20px;
  line-height: 1.25;
}

.build__back .Are::before {
    content: '';
    position: absolute;
    top: 45px;
    left: -145px;
    z-index: 1;
    border-width: 60px;
    border-style: solid;
    border-color: transparent;
    border-left-color:  #ea0643;
}

.build__back .build {
    width: auto;
    margin-top: 20px;
}

.build {
  text-decoration: none;
  color: #fff;
  background: #ea0643;
  border-color: none;
  overflow: hidden;
  font-size: 20px;
  padding: 10px;
  margin: 0 12px ;
  text-align: center;
  float: left;
  border: none; 
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: sticky;
  display: flex;
  align-items: center;
  transition-property: background; 
  transition-duration: 300ms; 
  transition-delay: 0s;
  animation: push 300ms linear 300ms;
  transition-delay: 300ms;
  border-radius: none;
}
.build:hover {
  width: auto;
  background-color:  #003366 ;
  color:white;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  position:flex;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  float: left;
  border: none;
  box-shadow: 0 0 10px #003366 ;
}

</style>

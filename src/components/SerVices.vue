<template>

<div class="services" id="services">
    
    <div class="container">
      <h3>Services</h3>
        <h4>Creating and deploying software that ensure growth in business.</h4>
    </div>
    </div>
<!-- ereser -->   
    <div class="weAre" id="services">
    
    <div class="container">
      <div class="row">
        <div class="weAre_cards">
          <div class="box-image umi-icon text-center w-75 p-1">
            <img src="../assets/card4.png" class= "img-fluid" alt="logo"></div>

          <div class="serv box-image text-center">
            <h5 class="heading text-center">  Business Applications</h5>
            <div class="text">Real Data Management and Data Analytics.
              Odoo Implementation, and
              SAP
            </div>
          </div>
        </div>
       
        <div class="weAre_cards">
            <div class="box-image umi-icon text-center w-75 p-3">
                <img src="../assets/card2.png" class= "img-fluid" alt="logo"></div>
            <div class="serv box-image text-center">
            <h5 class="heading text-center">Web Development</h5>
            <div class="text"> Real Data Management and Data Analytics, Odoo Implementation and SAP</div>
          </div>
        </div>

        <div class="weAre_cards">
            <div class="box-image text-center  w-50 p-3 pt-1 mx-auto">
                <img src="../assets/picture.png" class= "img-fluid" alt="logo"></div>
            <div class="serv box-image text-center">
            <h5 class="heading text-center">Product Design</h5>
            <div class="text"> User interface and user experience, Project and product Management</div>
          </div>
        </div>

        <div class="weAre_cards">
        <div class="box-image umi-icon text-center w-50 pt-0"> <img src="https://cdn.outsource2india.com/featured-images/7-popular-business-applications-mobile-phones.jpg" class= "img-fluid " alt="logo">
      </div>
        <div class="serv box-image text-center">
            <h5 class="heading text-center"> Mobile App Development</h5>
            <div class="text">  Cross-platform app development, Android App Development, and OS App Development</div>
                
          </div>
        </div>
        <div id="container">
        <router-link to="/WeDo"> <button class="ser_button">Tell me more</button></router-link>
        </div>
        </div>
      </div>
    </div>      
</template>

<script>
export default {
  name: 'SerVices'

}
</script>
<style>
@import '../assets/style.css';

.box-wrap .box-image {
    margin-bottom: 9px;
}
.check-list .list-item {
    position: relative;
    margin-bottom: 10px;
    font-size: 15px;
}
.section-space--mt_20 {
    margin-top: 10px;
}
ul {
    list-style: outside none none;
    margin-right: 10px;
  
    padding: 0;
}

.heading {
  font-weight: 500;
    line-height: 1.67;
    margin-bottom: 0;
}

.ser_button {
  padding: 10px;
  margin: 20px;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1.5;
  font-size: 20px;
  color:white;
  border: 1px solid white;
  transition-property: background; 
  transition-duration: 300ms; 
  transition-delay: 0s;
  animation: push 400ms linear 300ms; 
  background-color: #0f0033; 
  transition-delay: 300ms;
}
.ser_button:hover {
  color:  #0f0033;;
  background-color: white; 

}
#container {
  text-align: center;
}

.contact-image {
  padding: 100px 120px; 
  background-repeat: no-repeat;
  background-image: url(../assets/c-background.png);
  transition: opacity 0.2s ease;
  width: 100%;
  content: ' ';
  z-index: 2;
  backface-visibility: hidden;
  opacity: 0.8; 
  background-position: 90% 0;
  background-size: cover; 
  background-attachment: fixed;  
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden; 
  vertical-align: middle; 
  display: block;
  position: relative; 

}

.contact-text {
  color: #003366;
  line-height: 1;
  font-size: 5.4375rem;
  font-weight: bold;
}
</style>


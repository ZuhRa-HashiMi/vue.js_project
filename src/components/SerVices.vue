<template>

<div class="services" id="services">
    
    <div class="container">
      <h3>Services</h3>
        <h4>Creating and deploying software that ensure growth in business.</h4>
      <div class="row">
        <div class="cards">
          <a href="#"><div class="image image-box-warp w-75 p-3 h-50 mx-auto">
            <img src="https://cdn.outsource2india.com/featured-images/7-popular-business-applications-mobile-phones.jpg" class= "img-fluid" alt="logo"></div></a>

          <div class="serv box-image text-center">
            <h5 class="heading text-center">Business Applications</h5>
            <!-- <p>Are you looking to connect your people, automate processes, or improve productivity to enable growth and competitive advantage? We’ve got you covered.
                Discover the richness of functionality of business applications you invest in.
                Whether on-prem or in the cloud, our specialists are skilled in multiple
                applications like Enterprise Resource Planning (ERP) across</p> -->
                <ul class="check-list section-space--mb_10">
                  <li class="list-item section-space--mb_10">
                        Real Data Management and Data Analytics
                    </li>
                    <li class="list-item section-space--mb_10">
                        Odoo Implementation
                    </li>
                    <li class="list-item section-space--mb_20">
                        SAP
                    </li>
                  
                  
                  </ul>
          </div>
        </div>
       
        <div class="cards">
          <a href="#"><div class="image image-box-warp w-100 p-5 h-25 mx-auto">
            <img src="../assets/card2.png" class= "img-fluid" alt="logo"></div></a>
            <div class="serv box-image text-center">
            <h5 class="heading text-center">Web Development</h5>
            <ul class="check-list section-space--mb_10">
                  <li class="list-item section-space--mb_10">
                        Real Data Management and Data Analytics
                    </li>
                    <li class="list-item section-space--mb_10">
                        Odoo Implementation
                    </li>
                    <li class="list-item section-space--mb_20">
                        SAP
                    </li>
                  
                  
                  </ul>
            <!-- <p>State-of-the-art web applications.
                We’re experts at building solid, reliable, and fast web applications from the ground up.
              </p> -->
          </div>
        </div>

        <div class="cards">
          <a href="#"><div class="image image-box-warp w-75 p-2 h-50 mx-auto">
       <img src="data:image/png;base64,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" class= "img-fluid" alt="logo"></div></a>
        <div class="serv box-image text-center">
            <h5 class="heading text-center">Mobile App Development</h5>
            <!-- <p>Delightful iOS and Android apps.
                We design and build beautiful native mobile apps for the best user experience.
                Millions of users around the world are using our mobile applications.</p> -->
                <ul class="check-list section-space--mb_10">
                  <li class="list-item section-space--mb_10">
                        Cross-platform app development.
                    </li>
                    <li class="list-item section-space--mb_10">
                      Android App Development.
                    </li>
                  <li class="list-item section-space--mb_20">
                        IOS App Development
                    </li>
   
                  </ul>
          </div>
        </div>
        <div class="cards">
          <a href="#"><div class="image image-box-warp w-100 p-4 h-50 mx-auto">
            <img src="../assets/card4.png" class= "img-fluid" alt="logo"></div></a>
          <div class="serv box-image text-center">
            <h5 class="heading text-center">Product Design and Management</h5>
            <!-- <p>Our expertise in Product Design & Product Management is backed by in-depth research and understanding of your industry.
                That’s how we deliver beautiful and functional products. </p> -->

                <ul class="check-list section-space--mb_10">
                  <li class="list-item section-space--mb_20">
                        User interface and user experience
                    </li>
                    <li class="list-item section-space--mb_10">
                        Project and product Management
                    </li>
                    <li class="list-item section-space--mb_10">
                      Product Research
                    </li>
                    <!-- <li class="list-item section-space--mb_10">
                        User Journey
                    </li> -->
                  
                  
                  </ul> 
          </div>

        </div>
      <div id="container">
        <a href="#Tell--Me"> <button class="ser_button"  @click="text()" >Tell me more</button></a>
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

box-wrap .box-image {
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
/* .check-list .list-item::before {
    color: #086ad8;
    content:"-";
    display: block;
    width: 3px;
    height: 10px;
    font-size: 40px;
    line-height:0.9;
    font-family: 'font awesome 5 pro';
    font-weight: 900;
    box-sizing: border-box; 
} */

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
  border: 2px solid white;
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
</style>


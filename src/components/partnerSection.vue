<template>
  <section id="partner">
        <p class="title">Trusted By</p>
        <a href="#info"><div id="btn" >
         <button class="ser_button"  @click="text()" >Tell me more</button>
        </div></a>
      
        <div class="partner">
      
          <div class="partners">
            <img src="../assets/deezer.png" alt="deezer logo" />
              <!--socail----------->
              <div class="social">
              <!--icons--------->
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-dribbble"></i></a>
              </div>
          </div>
          <div class="partners">
            <img src="../assets/linkedin.png" alt="linkedin logo" />
            <div class="social">
              <!--icons--------->
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-dribbble"></i></a>
                
              </div>
          </div>
          <div class="partners">
            <img src="../assets/paypal.png" alt="paypal logo" />
            <div class="social">
              <!--icons--------->
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-dribbble"></i></a>
                
              </div>
          </div>
          <div class="partners">
            <img src="../assets/airbnb.png" alt="airbnb logo" />
            <div class="social">
              <!--icons--------->
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-dribbble"></i></a>
                
              </div>
          </div>
        </div>
    </section>
  
        
</template>

<script>
export default {
  name: 'partnerSection'

}
</script>


<style>

 

/* Partners section */
#partner {
  background-color:#003366;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#partner .title {
  padding: 50px 18px; 
  margin-bottom: 0;
  text-align:center;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1.5;
  font-size: 50px;
  color: white;
}

.partner {
  display: flex;
  padding: 100px 120px; 
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
}

.partner img {
  width: 150px;
  cursor: pointer;
}


.partner_button{
  padding: 10px 18px; 
  margin-bottom: 10px;
  text-align:center;
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
  background-color:  #003366; 
  transition-delay: 300ms; 
}
.partner_button:hover{
  padding: 10px 18px; 
  margin-bottom: 0;
  text-align:center;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1.5;
  font-size: 20px;
  color: white;
  background-color: #003366;
  border: none;
  box-shadow: 0 0 10px whitesmoke;
}
a{
	text-decoration:none;
}
.social a{
	padding: 15px 10px;
	color: white;
	font-size:1.1rem;
}
.social{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.social a:hover{
	color:#000000;
	transition: all ease 0.3s;
}

</style>



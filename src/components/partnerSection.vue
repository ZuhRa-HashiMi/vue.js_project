<template>
  <section id="partner">
        <p class="title">Trusted By</p>
        <a href="#info"><div id="btn" >
         <button class="partner_button"  @click="text()" >Tell me more</button>
        </div></a>
      
        <div class="partner">
      
          <div class="partners">
            <img src="../assets/deezer.png" alt="deezer logo" />
          </div>
          <div class="partners">
            <img src="../assets/linkedin.png" alt="linkedin logo" />
          </div>
          <div class="partners">
            <img src="../assets/paypal.png" alt="paypal logo" />
          </div>
          <div class="partners">
            <img src="../assets/airbnb.png" alt="airbnb logo" />
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
  background-color: gray;
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
  color: #003366;
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
  padding: 10px 20px; 
  margin-bottom: 0;
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
  background-color: gray; 
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


</style>



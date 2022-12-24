<template>
    <section class="header__hero">
         
        <div class="hero__lead-text">
         
         We
         <br>
          are:
        </div>
        </section>
        <section>
        <div class=" footer mx-6 my-6" id="partners">
        
        <!-- Grid container -->
        <div class=" p-4 pb-0 ">
          <h2 class="text-start fw-bold mb-4">Passionate builders.</h2>
          <br>
          <h2 class="text-start fst-italic fs-4">We Work tiressly and stay true to our core values</h2>
            <!-- Section: Links -->

            
    <div class="weAre" id="services">
    
    <div class="container">
      <div class="row">
        <div class="weAre_cards">
          <div class="box-image umi-icon text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7vzumYlACPrxi_yzzB5uM51kEotPiQ9DYclc1jvltg&s" class= "img-fluid" alt="logo"></div>

          <div class="serv box-image text-center">
            <h5 class="heading text-center">  Adaptive Process</h5>
            <div class="text">We use a proven Agile methodology to always deliver result beyond expectaions.</div>
          </div>
        </div>
       
        <div class="weAre_cards">
            <div class="box-image umi-icon text-center w-75 p-1">
                <img src="https://www.valamis.com/documents/10197/783138/collaborative-learning.png" class= "img-fluid" alt="logo"></div>
            <div class="serv box-image text-center">
            <h5 class="heading text-center">Collaborative & Transparent</h5>
            <div class="text">have a passion for finding solutions together with our clients; not just for them.</div>
          </div>
        </div>

        <div class="weAre_cards">
            <div class="box-image text-center  w-75 p-3 pt-1 mx-auto">
                <img src="https://www.recruiter.com//recruiting/wp-content/uploads/2022/05/prioritize-your-employees-mental-health.jpg" class= "img-fluid" alt="logo"></div>
            <div class="serv box-image text-center">
            <h5 class="heading text-center">  Ownership Mentality</h5>
            <div class="text">Every project is treated with trust, a sense of ownership, and drive.</div>
          </div>
        </div>

        <div class="weAre_cards">
        <div class="box-image umi-icon text-center w-50 pt-4"> <img src="https://img.freepik.com/premium-vector/outbound-marketing-business-vector-illustration-with-megaphone-design-attract-customers-offline-online-web-poster_2175-1722.jpg?w=2000" class= "img-fluid " alt="logo">
      </div>
        <div class="serv box-image text-center">
            <h5 class="heading text-center"> Quality Obsession</h5>
            <div class="text"> We get it right the first through focus and attention to details.</div>
                
          </div>
        </div>
        </div>
      </div>
    </div>
        </div>
</div>
       
    </section>
</template>

<script>
export default {
  name: "jumBotron",
  data() {
    return {
        layout: 'contactus'
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

.header__hero {
    padding: 10%;
    color: #fff; 
    text-align: center;
    background-color: #0f0033;
}

.hero__lead-text {
    line-height: 1;
    font-size: 5.4375rem;
    font-weight: bold;
}
.weAre{
 background: white; 
padding:60px;
position: relative;
}

.weAre_cards{
align-items: center;
flex: 1 1 20rem;
padding: 14px 10px ;
align-self: normal;
margin-left: 9px;
background: white;
padding: 25px 30px 34px;
display: flex;
flex-direction: column;
-o-transition: all .7s cubic-bezier(.645,.045,.355,1);
transition: all .7s cubic-bezier(.645,.045,.355,1);
}
.weAre_cards:hover{
-webkit-transform: translateY(-5px);
transform: translateY(-5px);
background-color: white;
}
</style>
<template>
    <section class="header__hero WeDo">
         
        <div class="hero__lead-text">
         
         We
         <br>
          do:
        </div>
        </section>
        <section class="app_content" id="Tell--Me">
            
            <!-- <div class="mt"> -->
            <a href="index.html"><img class="img-fluid w-50 p-5" src="https://www.webbehinds.com/assets/img/integration.svg" alt="page logo" /></a>
           <!-- </div> -->
           <div class="">
            <h6 class="text-start">Web Development</h6>
            <h3 class="text-start">State-of-the-art web applications.</h3>
            <p class="text-start">We’re experts at building solid, reliable, and fast web applications from the ground up. We’re industry agnostic.</p>
             </div></section>

             <section class="app_content">
            
            <!-- <div class="mt"> -->
            <a href="index.html"><img class="img-fluid w-50 p-5" src="https://moneypip.com/wp-content/uploads/2021/09/DIGITAL-MEDIA2.png" alt="page logo" /></a>
           <!-- </div> -->
           <div class="">
            <h6 class="text-start">Business Applications</h6>
            <h3 class="text-start">  Real Data Management and Data Analytics.</h3>
            <p class="text-start">Are you looking to connect your people, automate processes, or improve productivity to enable growth and competitive advantage? We’ve got you covered.
                Discover the richness of functionality of business applications you invest in.
                Whether on-prem or in the cloud, our specialists are skilled in multiple
                applications like Enterprise Resource Planning (ERP) across.</p>
             </div></section>
      
             <section class="app_content">
            
            <!-- <div class="mt"> -->
            <a href="index.html"><img class="img-fluid w-50 p-5" src="https://www.tecions.com/image/check2/android-app-development-570x400px.jpg" alt="page logo" /></a>
           <!-- </div> -->
           <div class="">
            <h6 class="text-start">Mobile App Development</h6>
            <h3 class="text-start">Delightful iOS and Android apps.</h3>
            <p class="text-start">Delightful iOS and Android apps.
                We design and build beautiful native mobile apps for the best user experience.
                Millions of users around the world are using our mobile applications..</p>
             </div></section>

             <section class="app_content product">
           <div class="">
            <h6 class="text-start">Product Design and Management</h6>
            <h3 class="text-start">Delightful iOS and Android apps.</h3>
            <p class="text-start">Our expertise in Product Design & Product Management is backed by in-depth research<br>and understanding of your industry.
                That’s how we deliver beautiful and functional products.</p>
             </div></section>
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

.app_content {
    padding: 100px 120px; 
    width: 100%;
    height: auto;
    display: block;
  position: relative; 
}

.app_content h6 {
    font-weight: 700;
    margin-top: 0;
    padding:10px;
    margin-bottom: 10px;
    font-size: 0.875rem;
    text-transform: uppercase;
    line-height: 1.5;

}

.app_content h3 {
    font-weight: 700;
    font-size: 60px;
}

.app_content p {
    font-weight: 600;
    font-size: 20px;
}

.product {
  padding: 100px 120px; 
  width: 100%;
  height: auto;
  background-color: #003366;
  display: block;
  position: relative; 
  color: wheat;
}
</style>
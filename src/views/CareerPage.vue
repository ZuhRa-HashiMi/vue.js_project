<template>
    <section class="info-contaniner" id="career">
         
        <div class="info">
         <h2> We're ShiftByte</h2>
         <h3>We build outstanding software with expertise and passion</h3>
        </div>
        </section>

        <section class="info-contaniner--WeAre">
         
         <div class="info--WeAre">
          <h2 class="fw-bold fs-1 mb-5">WHO WE ARE!!!</h2>
          <p class="text-start">We are a team of software engineers, designers and product managers building outstanding web and mobile applications for companies of all sizes, from 1-person startups to Fortune 500 companies.</p>
          <p class="text-start">If you want to grow together, work on challenging products used by millions of users and enjoy using the best tools and practices, Nimble is the right place for you! We keep our recruitment process practical and straightforward.</p>
          <p class="text-start">To learn more about how we work, check our handbook named Compass, Github organisation and Medium account. Want to see what we have built? Check our Dribbble and Behance accounts.</p>
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

.info-contaniner {
    text-align: center;
    color: #fff;
    position: relative;
    display: table;
    width: 100%;
    height: 420px;
    padding: 100px 120px; 
    background-repeat: no-repeat;
    background-image: url(https://c4.wallpaperflare.com/wallpaper/336/733/200/glass-sun-warm-colors-wallpaper-preview.jpg);
    transition: opacity 0.2s ease;
    content: ' ';
    z-index: 2;
    backface-visibility: hidden;
    opacity: 0.8; 
    background-position: 50% 0;
    background-size: cover; 
    background-attachment: fixed;  
    overflow-x: hidden;
    overflow-y: hidden; 
    vertical-align: middle; 
}
.info-contaniner--WeAre {
    background-color: white;
    text-align: center;
    color: black;
    position: relative;
    display: table;
    width: 100%;
    height: 420px;
    margin: 0 0 10px;
    vertical-align: middle; 
    padding: 100px;

}
.info {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color: white;
}

.info-contaniner--WeAre {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
   
}
</style>
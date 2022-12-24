<template>
    <section class="header__hero" id=" WeDo">
         
        <div class="hero__lead-text">
         
         We
         <br>
          do:
        </div>
        </section>

<div class="section app_content">
  <div class="title">
    <h6>Web Development</h6>
  <h3> State-of-the-art web applications. </h3>
  <p>We’re experts at building solid, reliable, and fast web applications from the ground up. We’re industry agnostic.</p>
</div>
<img class="img-fluid" src="https://www.webbehinds.com/assets/img/integration.svg" alt="page logo" /> </div>


<div class="section2 app_content ">
  <div class="title">
    <h6>Business Applications</h6>
  <h3>Real Data Management and Data Analytics.</h3>
  <p>Are you looking to connect your people,
        automate processes, or improve productivity to enable growth and competitive advantage?
        We’ve got you covered.Discover the richness of functionality of business applications you invest in.
        Whether on-prem or in the cloud, our specialists are skilled in multiple
        applications like Enterprise Resource Planning (ERP) across.</p>
 
</div>
<img class="img-fluid" src="https://moneypip.com/wp-content/uploads/2021/09/DIGITAL-MEDIA2.png" alt="page logo" /> 
</div>

<div class="section app_content ">
  <div class="title">
    <h6>Mobile App Development</h6>
  <h3>Delightful iOS and Android apps.</h3>
  <p>Delightful iOS and Android apps.
                We design and build beautiful native mobile apps for the best user experience.<br>
                Millions of users around the world are using our mobile applications.</p>

</div>
<img class="img-fluid" src="../assets/mobile.png" alt="page logo" /> 
</div>
      
 
<div class="section2 app_content ">
  <div class="title">
    <h6>Product Design and Management</h6>
  <h3>Delightful iOS and Android apps.</h3>
  <p>We’re experts at building solid, reliable, and fast web applications from the ground up. We’re industry agnostic.

</p>

</div>
<img class="img-fluid" src="https://i.pinimg.com/736x/cf/d4/65/cfd4653255dacb56476d593ed8463647.jpg" alt="page logo" /> 
</div>
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
    color: blue;

}

.app_content h3 {
    font-weight: 700;
    font-size: 50px;
}

.app_content p {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;
}

.section2 {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  width: 100%;

}
.section2 img {
  height: 300px;


}
.section2 p {
  margin-right: 15px;
 
}
.mvv-contianer {
  max-width: 90%;
  margin: 50px auto 0;
  padding-top: 10%;
}

.mvv-contianer .mvv-block {
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
.mvv-contianer .mvv-block .mvv-image {
  flex: 0 0 auto;
  width: 400px;
}

.mvv-contianer .mvv-block .mvv-image img {
  width: 100%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, .3);
  transition: .3s;
  transform: scale(1);
}

.mvv-contianer .mvv-block .mvv-image:hover img {
  transform: scale(1.03);
}

.mvv-contianer .mvv-block .mvv-image .mvv-content {
  flex: 0 0 auto;
  width: calc(100% - 400px);
  box-sizing: border-box;
  align-self: center;
}
.mvv-contianer .mvv-block .mvv-content h5 {
  font-weight: 700;
  font-size: 22px;
  color: blue;
  margin-bottom: 10px;
}

.mvv-contianer .mvv-block .mvv-content p {
 font-size: 15px;
}
@media screen and (min-width: 768px) {
  .mvv-contianer .mvv-block:nth-child(odd) .mvv-image {
    order: 1;

  }

  .mvv-contianer .mvv-block:nth-child(even) .mvv-image {
    order: 2;

  }

  .mvv-contianer .mvv-block:nth-child(odd) .mvv-content {
    order: 2;
    padding-left: 30px;

  }

  .mvv-contianer .mvv-block:nth-child(even) .mvv-content{
    order: 1;
    padding-right: 30px;

  }
}
</style>
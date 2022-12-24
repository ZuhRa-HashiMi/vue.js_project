<template>
  <!-- achievement-2 Section Start -->
  <div class="wrapper">
    <div class="container_insight">
      <i class="fab fa-twitter insigh_icon"></i>
      <span class="num" data-val="350">000</span>
      <span class="text">Followers</span>
    </div>
    <div class="container_insight">
      <i class="fab fa-facebook-f insigh_icon"></i>
      <span class="num" data-val="250">000</span>
      <span class="text">Followers</span>
    </div>
    <div class="container_insight">
      <i class="fab fa-youtube insigh_icon"></i>
      <span class="num" data-val="325">000</span>
      <span class="text">Followers</span>
    </div>
    <div class="container_insight">
      <i class="fab fa-instagram insigh_icon"></i>
      <span class="num" data-val="275">000</span>
      <span class="text">Followers</span>
    </div>
  </div>
<!-- achievement-2 Section End -->  
</template>

<script>
// import '../assets/script.js'

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

export default {
  name: 'partnerSection'

}
</script>
<style>
/*===========================
	08.0 cases Section css
===========================*/
.wrapper {
    padding: 100px 120px; 
    background: #9e42a7;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    gap: 10px; 
}

.container_insight {
  width: 28vmin;
  height: 28vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em 0;
  position: relative;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.1);
}

.insigh_icon{
  color: white;
  font-size: 2.5em;
  text-align: center;

}

span.num {
  color: white;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 3em;
}

span.text {
  color: white;
  font-size: 1.1em;
  text-align: center;
  pad: 0.7em 0;
  font-weight: 400;
  line-height: 0;
}

@media screen and (max-width:1024px) {
  .wrapper {
    width: 85vw;
  }
  .container_insight {
    height: 26vmin;
    width: 26vmin;
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .wrapper{
    width: 90vw;
    flex-wrap: wrap;
    gap: 30px;
  }

  .container_insight {
    width: calc(50% -40px);
    height: 30vmin;
    font-size: 13px;
  }
}
@media screen and (max-width: 480px) {
  .wrapper{
    gap: 15px;
  }

  .container_insight {
    width: 100%;
    height: 25vmin;
    font-size: 8px;
  }
}
</style>
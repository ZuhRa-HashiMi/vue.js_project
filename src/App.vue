<template>
     
<div id="App">
    <NavigationMobile />
    <div class="content" :class="{'open':showNav}">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <NaviGation v-if="!mobileView" />
      </div>
    </div>
    <!-- <JumBotron /> -->
    <!-- <partnerSection /> -->
    <!-- <jumBotron2 /> -->
    <!-- <SerVices /> -->
    <!-- <ContactUs /> -->

    <router-view/>
    <!-- <MyFooter /> -->
    <LastPage />
</div>

</template>

<script>
import NaviGation from './components/NaviGation.vue';
import NavigationMobile from './components/NavigationMobile.vue';

// import MyFooter from './components/MyFooter.vue';
import LastPage from './components/LastPage.vue';

export default {
    data: () => {
    return {
      mobileView: true,
      showNav: false
      
    };
    
  },
 
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
    name: "App",
    components: {
    // JumBotron,
    // partnerSection,
    // jumBotron2,
    // SerVices,
    // ContactUs,
    // MyFooter,
    NaviGation,
    NavigationMobile,
    LastPage,
    // DropDown,
},
created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script> 

<style>
body {
    padding: 0;
    margin: 0;
}

.top-bar {
  display: flex;
  width: 100%;
  color: white;
}

#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 3rem;
}

.content {
  position: absolute;
  top: 0;
  width:100%;
  height: 44vh;
  padding: 10px;
  background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20220427/pngtree-business-analysis-and-communication-contemporary-marketing-and-software-for-development-image_1090680.jpg);
  /* border-radius: 30px; */
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}

.open {
  transform: translateX(300px);
}
</style>

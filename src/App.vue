<template>
     
<div id="App">
    <NavBar />
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

import NavBar from './components/NavBar.vue';
// import MyFooter from './components/MyFooter.vue';
import LastPage from './components/LastPage.vue';

export default {
    name: "App",
    components: {
    NavBar,
    // JumBotron,
    // partnerSection,
    // jumBotron2,
    // SerVices,
    // ContactUs,
    // MyFooter,
    LastPage,
},
};
</script> 

<style>
body {
    padding: 0;
    margin: 0;
}


</style>

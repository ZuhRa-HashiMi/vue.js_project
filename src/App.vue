<template>
<div id="App">
    <NavBar />
    <JumBotron />
    <SerVices />
    <ContactUs />

    <MyFooter />
</div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import JumBotron from './components/jumBotron.vue';
import SerVices from './components/SerVices.vue';
import ContactUs from './components/ContactUs.vue';
import MyFooter from './components/MyFooter.vue';
export default {
    name: "App",
    components: {
    NavBar,
    JumBotron,
    SerVices,
    ContactUs,
    MyFooter
},
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
</style>

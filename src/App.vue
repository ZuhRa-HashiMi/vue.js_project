<template>
<div id="App">
    <NavBar />
    <JumBotron />
    <SerVices />
    <MyFooter />
</div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import JumBotron from './components/jumBotron.vue';
import SerVices from './components/SerVices.vue';
import MyFooter from './components/MyFooter.vue';
export default {
    name: "App",
    components: {
    NavBar,
    JumBotron,
    SerVices,
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

<template>
   <JumBotron></JumBotron>
   <partnerSection></partnerSection>
   <jumBotron2></jumBotron2>
   <SerVices></SerVices>
    <inSight></inSight>
   <ContactUs></ContactUs>
   
  </template>
  <script>
import JumBotron from '../components/jumBotron.vue';
import partnerSection from '../components/partnerSection.vue';
import jumBotron2 from '../components/jumBotron2.vue';
import SerVices from '../components/SerVices.vue';
import inSight from '../views/inSight.vue'
import ContactUs from '../components/ContactUs.vue';

export default {
    name: "App",
    components: {
    JumBotron,
    partnerSection,
    jumBotron2,
    SerVices,
    inSight,
    ContactUs,
},
};
</script>
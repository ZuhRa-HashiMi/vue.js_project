
import {createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhoAre from '../views/WhoAre.vue'
import WhatBuild from '../views/WhatBuild.vue'
import WeDo from '../views/WeDo.vue'
import CareerPage from '../views/CareerPage.vue'
import CompanyPart from '../views/CompanyPart.vue'
import SerVices from '../components/SerVices.vue'
import partnerSection from '../components/partnerSection.vue'
import ContactUs from '../components/ContactUs.vue'
import jumBotron2 from '../components/jumBotron2.vue'
import inSight from '../views/inSight.vue'
import teamDetails from '../views/teamDetails.vue'

// import MyFooter from '../components/MyFooter.vue'


const routes = [
  {
    path: '/partner',
    name: 'partnerSection',
    component: partnerSection
  },

  {
    path: '/team__details',
    name: 'teamDetails',
    component: teamDetails
  },

  {
    path: '/inSight',
    name: 'inSight',
    component: inSight
  },

  {
    path: '/info',
    name: 'info',
    component: jumBotron2
  },
  {
    path: '/services',
    name: 'SerVices',
    component: SerVices
  },
  
  {
    path: '/',
    name: 'home',
    component: Home
  },


  {
    path: '/header__hero',
    name: 'header__hero',
    component: WhoAre
  },

  {
    path: '/WhatBuild',
    name: 'WhatBuild',
    component: WhatBuild
  },

  {
    path: '/WeDo',
    name: 'WeDo',
    component: WeDo
  },

  // {
  //   path: '/Tell--Me',
  //   name: 'WeDo',
  //   component: WeDo
  // },

  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },


  {
    path: '/career',
    name: 'career',
    component: CareerPage
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyPart
  },
 
 
  
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
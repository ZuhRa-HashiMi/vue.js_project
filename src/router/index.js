
import {createRouter, createWebHashHistory } from 'vue-router'
import WhatBuild from '../views/WhatBuild.vue'
import WhoAre from '../views/WhoAre.vue'
import Home from '../views/Home.vue'
import WeDo from '../views/WeDo.vue'
import CareerPage from '../views/CareerPage.vue'

// import MyFooter from '../components/MyFooter.vue'


const routes = [

  {
    path: '/career',
    name: 'career',
    component: CareerPage
  },
  {
    path: '/WeDo',
    name: 'WeDo',
    component: WeDo
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/WhatBuild',
    name: 'WhatBuild',
    component: WhatBuild
  },

  {
    path: '/header__hero',
    name: 'header__hero',
    component: WhoAre
  },
  
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router
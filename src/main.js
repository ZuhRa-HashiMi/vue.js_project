
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// import './assets/script.js'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas);

createApp(App).use(bootstrap) 
 .component('fa', FontAwesomeIcon)
 .mount('#app');


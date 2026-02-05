import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* --- Font Awesome Setup --- */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import all icons in ONE statement to keep it clean
import {
  faCoffee,
  faUser,
  faBars,
  faMagnifyingGlassLocation,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

// Add them all to the library at once
library.add(faCoffee, faUser, faBars, faMagnifyingGlassLocation, faRightToBracket)

/* --- App Initialization --- */
const app = createApp(App)

app.use(router)
app.use(store)

// Register the component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

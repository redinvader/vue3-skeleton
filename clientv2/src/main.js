import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'

import "bootstrap/dist/css/bootstrap.min.css";
// import * as bootstrap from 'bootstrap'
import '@/darknerd/css/style.css'
import './style.css'

import App from './App.vue'

import bootRoutes from '@/routes'

const app = createApp(App)

bootRoutes(app)


app
    .use( createPinia() )
    .use( PrimeVue, {
        theme:{
            preset: Aura
        }
    })
    .mount('#app')

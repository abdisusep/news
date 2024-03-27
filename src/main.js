import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


createApp(App).mount('#app');
app.use(PrimeVue);
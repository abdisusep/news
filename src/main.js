import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'

app.use(PrimeVue);
app.use(pinia);
app.mount('#app');
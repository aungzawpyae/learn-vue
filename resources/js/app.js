require('./bootstrap');

import axios from "axios";

import { createApp } from "vue";


import store from "./store";

import Index from './components/Index.vue'


const app = createApp({ 
    components: {
        Index,
    },
  
})

// app.use(router);

app.use(store);

app.mount('#app');
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './scss/global.scss'
import './scss/same.scss'

createApp(App).use(store).mount('#app')

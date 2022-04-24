import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Router
import router from './router'

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

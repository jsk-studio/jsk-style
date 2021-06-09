import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

createApp(App)
    .use(router)
    .mount('#app')

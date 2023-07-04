import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/home.vue'
import SetByJsPage from './pages/set-by-js.vue'

import App from './App.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/set-by-js', component: SetByJsPage },
]

// Routing
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

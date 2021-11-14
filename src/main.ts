import { createApp } from 'vue'
import App from './App.vue'
import Home from './pages/TheHome.vue'
import Admin from './pages/TheAdmin.vue'
import CurrentTime from './pages/CurrentTime.vue'
import NotFound from './pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/current-time',
      name: 'current-time',
      component: CurrentTime,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

createApp(App).use(router).mount('#app')

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Turnos from '../views/Turnos.vue'
import Charlas from '../views/Charlas.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/turnos', name: 'Turnos', component: Turnos },
  { path: '/charlas', name: 'Charlas', component: Charlas }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

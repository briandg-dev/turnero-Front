import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Turnos from '../views/Turnos.vue'
import Charlas from '../views/Charlas.vue'
import Roles from '../views/Adm_Roles.vue'
import Empresas from '../views/Adm_EmpresaSector.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/turnos', name: 'Turnos', component: Turnos },
  { path: '/charlas', name: 'Charlas', component: Charlas },
  { path: '/roles', name: 'Roles', component: Roles },
  { path: '/empresas', name: 'Empresas', component: Empresas }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

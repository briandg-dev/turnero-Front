<template>
  <div>
    <!-- Navbar solo si NO estamos en login -->
    <Navbar v-if="showNavbar" />

    <!-- Aquí se cargan las páginas -->
    <router-view />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  setup() {
    const route = useRoute()

    // Navbar solo en rutas distintas de "/"
    const showNavbar = computed(() => route.path !== '/')

    return { showNavbar }
  }
}
</script>

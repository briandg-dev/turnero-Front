<template>
  <nav class="navbar">
    <router-link to="/home">Inicio</router-link>
    <router-link to="/about">Acerca</router-link>
    <router-link to="/">Salir</router-link>
  </nav>
</template>

<script>
export default { name: 'Navbar' }
</script>

<style scoped>
.navbar {
  background: #daf3ff;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>

<template>
  <nav class="navbar">
    <router-link to="/home">Inicio</router-link>
    <router-link to="/about">Turnos</router-link>
    <router-link to="/charlas">Charlas</router-link>
    <router-link to="/">Mi Perfil</router-link>
  </nav>
</template>

<script>
export default { name: 'Navbar' }
</script>

<style scoped>
.navbar {
  background: #DAF3FF;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 0;
}

.navbar a{
  text-decoration: none;
  color: #00001b;
}
</style>

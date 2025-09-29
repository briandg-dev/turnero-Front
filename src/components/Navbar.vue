<template>
  <nav class="navbar">
    <div class="box_a">
      <router-link to="/home">Inicio</router-link>
      <router-link to="/turnos">Turnos</router-link>
      <router-link to="/charlas">Charlas</router-link>
      <select @change="handleProfileAction($event)" class="profile-select">
        <option value="">Mi Perfil</option>
        <option value="logout">Salir</option>
      </select>
    </div>
    <div class="box_b">
      <label>Perfil: Not Logged</label>
    </div>



  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    handleProfileAction(event) {
      const value = event.target.value;
      if (value === 'logout') {
        this.$router.push('/');
      } else if (value === 'perfil') {
        /* Por ahora no */
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  border-style: solid;
  border-width: 1px;


  background: #E9EDF6;
  border-color: #CBCBFF;

  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
  margin: 0;
  color: #3f6ad8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.profile-select {
  background: #E9EDF6;
  color: #3f6ad8;
  border: none;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.profile-select option {
  background: #E9EDF6;
  color: #3f6ad8;
  padding: 10px;
}

.profile-select option:hover {
  background: #e5ebf8;
}

.navbar div {
  display: flex;
  gap: 1rem;
}

.navbar div a {
  text-decoration: none;
  color: #3f6ad8;
}

.navbar div a:hover {
  color: #678ff5;
}
</style>

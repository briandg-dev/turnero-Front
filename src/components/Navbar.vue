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
  /*border-color: rgb(182, 227, 255);*/
  border-width: 1px;


  background: #E9EDF6;
  border-color: #CBCBFF;
  /*
  background: #CBCBFF;
  border-color: #9c9cc7;
  */


  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
  margin: 0;
  color: rgb(10, 2, 99);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.profile-select {
  background: #E9EDF6;
  color: rgb(10, 2, 99);
  border: none;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.profile-select:focus {
  border: none;
}

.profile-select option {
  background: #E9EDF6;
  color: rgb(10, 2, 99);
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
  color: rgb(10, 2, 99);
}
</style>

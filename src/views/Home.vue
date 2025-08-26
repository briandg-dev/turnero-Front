<template>
  <div class="background"></div>

  <!-- Caja de login / registro -->
  <div class="login-container">
    <h1>Turnos Web</h1>
    <img src="/src/logo.svg" alt="Logo" id="logo"/>

    <!-- Si estamos en login -->
    <div v-if="isLogin">
      <h2>Iniciar sesión</h2>
      <input v-model="us_email" type="email" placeholder="Email" id="us_email"/>
      <input type="password" placeholder="Contraseña" id="idPass" />
      <p id="info"></p>
      <button @click="login">Entrar</button>
      <button style="margin-top: 5px" @click="toggleForm">Registrarme</button>
    </div>

    <!-- Si estamos en registro -->
    <div v-else>
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <input v-model="nroDoc" type="number" placeholder="Número de documento" required />
        <input v-model="newEmail" type="email" placeholder="Email" required />
        <input v-model="newPass" type="password" placeholder="Contraseña" required />
        <input v-model="confirmPass" type="password" placeholder="Confirmar contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <button style="margin-top: 5px" @click="toggleForm">Volver al login</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  return {
    isLogin: true,  // controla si estamos en login o registro
    us_email: '',   
    idPass: '',     
    nroDoc: '',
    newEmail: '',
    newPass: '',
    confirmPass: ''
  }
}
,
  methods: {

    // -- Cambia entre login y registro ------------------------
    toggleForm() {
      this.isLogin = !this.isLogin;
    },


    // -- Simula el login --------------------------------------
    login() {
      alert(`Bienvenido, ${this.us_email}`);
    },


    // -- Simula el registro -----------------------------------
    register() {
      if (this.newPass !== this.confirmPass) {
        alert("Las contraseñas no coinciden");
        return;
      }
      alert(`Usuario ${this.nroDoc} registrado con éxito!`);
      this.nroDoc = '';
      this.newEmail = '';
      this.newPass = '';
      this.confirmPass = '';
      this.isLogin = true;
    }


  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  font-family: 'Segoe UI', sans-serif;
}

.background {
  background: linear-gradient(304deg, rgb(192, 192, 239) 0%, rgb(249, 253, 255) 50%, rgb(192, 192, 239) 100%);
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  /* desenfoque general */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Capa encima con efecto frosted glass */
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(235, 250, 255);
  backdrop-filter: blur(10px);
  padding: 2rem 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  max-width: 400px;
  width: 90%;
}

.login-container h1{
  text-align: center;
}

#logo {
  display: block;
  margin: 0 auto 0;
  height: 100px;
}

.login-container h2{
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-container input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.514);
  color: rgb(0, 0, 0);
}

.login-container button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #daf3ff;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-container button:hover {
  background-color: #c8edff;
}
</style>

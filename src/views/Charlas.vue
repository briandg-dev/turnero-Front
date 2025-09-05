<template>
  <div class="background"></div>

  <!-- Caja de login / registro -->
  <div class="container">
    <h1>Turnos Web</h1>

    <!-- Si estamos en login -->
    <div v-if="isLogin">
      
    </div>

    <!-- Si estamos en registro -->
    <div v-else>
      
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* Capa encima con efecto frosted glass */
.container {
  position: fixed;
  top: 80px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: #E9EDF6;
  backdrop-filter: blur(10px);
  padding: 5px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  overflow: auto;
}
</style>

<template>
  <div class="background"></div>

  <!-- Caja de login / registro -->
  
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
  background-color: #F5F5F5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}


</style>

<template>
  <div class="background"></div>

  <button @click="isLight = !isLight" style="position: absolute; top: 20px; right: 20px; z-index: 10;">
    Cambiar a modo {{ isLight ? 'oscuro' : 'claro' }}
  </button>

  <!-- Caja de login / registro -->
  <div class="login-container" :class="{ 'light-mode': isLight }">
    <h1>Turnos Web</h1>
    <img src="/src/logo.svg" alt="Logo" id="logo" />

    <!-- Si estamos en login -->
    <div v-if="isLogin">
      <h2>Iniciar sesión</h2>

      <!-- EMAIL -->
      <div class="input-group">
        <input v-model="us_email" type="email" id="us_email" placeholder=" " />
        <label for="us_email">Email</label>
      </div>

      <!-- PASSWORD -->
      <div class="input-group">
        <input v-model="idPass" type="password" id="idPass" placeholder=" " />
        <label for="idPass">Contraseña</label>
      </div>

      <p id="info"></p>
      <button @click="login">Entrar</button>

      <div style="margin-top: 10px; text-align: center;">
        <label>¿No tienes cuenta?
          <a href="#" @click.prevent="toggleForm">Regístrate</a>
        </label>
      </div>
    </div>

    <!-- Si estamos en registro -->
    <div v-else>
      <h2>Registro</h2>
      <form @submit.prevent="register">

        <div class="input-group">
          <input v-model="nroDoc" type="number" placeholder=" " required />
          <label>Número de documento</label>
        </div>

        <div class="input-group">
          <input v-model="nombre" type="text" placeholder=" " required />
          <label>Nombre/s</label>
        </div>

        <div class="input-group">
          <input v-model="apellido" type="text" placeholder=" " required />
          <label>Apellido/s</label>
        </div>

        <div class="input-group">
          <input v-model="newEmail" type="email" placeholder=" " required />
          <label>Email</label>
        </div>

        <div class="input-group">
          <input v-model="newPass" type="password" placeholder=" " required />
          <label>Contraseña</label>
        </div>

        <div class="input-group">
          <input v-model="confirmPass" type="password" placeholder=" " required />
          <label>Confirmar contraseña</label>
        </div>

        <button type="submit">Registrarse</button>
      </form>
      <div style="margin-top: 10px; text-align: center;">
        <label>¿Ya tienes cuenta?
          <a href="#" @click.prevent="toggleForm">Inicia sesión</a>
        </label>
      </div>
    </div>

  </div>
</template>

<script>
import { BASE_URL } from "@/utils/config.js";
console.log("La BASE es:", BASE_URL);

import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()

    // data reactiva
    const isLight = ref(false)
    const isLogin = ref(true)
    const us_email = ref('')
    const idPass = ref('')
    const nroDoc = ref('')
    const newEmail = ref('')
    const newPass = ref('')
    const confirmPass = ref('')
    const nombre = ref('')
    const apellido = ref('')

    // --- Métodos ---
    const toggleForm = () => {
      isLogin.value = !isLogin.value
    }

    const login = () => {
      if (us_email.value && idPass.value) {
        alert(`Bienvenido, ${us_email.value}`)
        router.push('/home')   // 👈 Redirección a Home
      } else {
        alert('Ingrese email y contraseña')
      }
    }

    const register = async () => {
      if (newPass.value !== confirmPass.value) {
        alert("Las contraseñas no coinciden")
        return
      }
      try {
        const response = await fetch(`${BASE_URL}users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            numeroDocumento: nroDoc.value,
            tipoDocumento: 1, // Asumimos 1 como DNI
            nombres: nombre.value,
            apellido: apellido.value,
            mail: newEmail.value,
            password: newPass.value
          })
        })
        if (!response.ok) {
          const error = await response.json()
          alert(error.message || 'Error al registrar usuario')
          return
        }

        alert(`Usuario ${nroDoc.value} registrado con éxito!`)
        nroDoc.value = ''
        nombre.value = ''
        apellido.value = ''
        newEmail.value = ''
        newPass.value = ''
        confirmPass.value = ''
        isLogin.value = true
      } catch (err) {
        alert('Error de conexión con el servidor')
      }
    }

    return {
      isLogin,
      us_email,
      idPass,
      nroDoc,
      newEmail,
      newPass,
      confirmPass,
      nombre,
      apellido,
      isLight,
      toggleForm,
      login,
      register
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
  /* SE PUEDE CAMBIAR DE image2 -> background PARA VER LA OTRA IMAGEN */
  background: url('@/assets/image2.jpg') no-repeat center center, linear-gradient(304deg, rgb(192, 192, 239) 0%, rgb(249, 253, 255) 50%, rgb(192, 192, 239) 100%);
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(4px);
  /* con image2 dejar 4px de blur, con background comentarlo */
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(41, 41, 41);
  backdrop-filter: blur(10px);
  padding: 2rem 3rem;
  border-radius: 6px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: rgb(215, 215, 215);
  max-width: 400px;
  width: 90%;
}

.login-container h1 {
  text-align: center;
}

#logo {
  display: block;
  margin: 0 auto 0;
  height: 100px;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Estilos para inputs con label flotante */
.input-group {
  position: relative;
  margin-bottom: 1rem;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 0.75rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0);
  color: white;
  font-size: 16px;
  outline: none;
}

.input-group label {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 16px;
  transition: 0.2s ease all;
  pointer-events: none;
  background: rgb(41, 41, 41);
  padding: 0 4px;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: 0px;
  font-size: 12px;
  color: #aaa;
}

.login-container button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #00247f;
  color: rgb(215, 215, 215);
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-container button:hover {
  background-color: #002ea3;
}


.login-container a {
  color: #6c93f6;
  text-decoration: underline;
  font-weight: 500;
}

.login-container a:hover {
  color: #426acf;
}

.login-container.light-mode {
  background: #e1e7f1;
  color: #222;
}

.login-container.light-mode .input-group input {
  background: #ffffff00;
  color: #222;
  border: 1px solid #9eb9fd;
}

.login-container.light-mode .input-group label {
  background: #e1e7f1;
  color: #555;
}

.login-container.light-mode button {
  background-color: #9eb9fd;
  color: #000000;
}

.login-container.light-mode button:hover {
  background-color: #456ed5;
  color: #fff;
}

.login-container.light-mode a {
  color: #456ed5;
  text-decoration: underline;
  font-weight: 500;
}

.login-container.light-mode a:hover {
  color: #00247f;
}

</style>

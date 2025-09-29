<template>
  <div class="background"></div>

  <div class="boxContainer">
  <h2>Gestión de Roles</h2>
  <input type="button" value="+" id="addRoleButton"/>
</div>

<div class="boxContainer containerInfo">
  <table class="rolesTable">
    <thead>
      <tr>
        <th>Nombre del Rol</th>
        <th>Descripción</th>
        <th>Permisos</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Administrador</td>
        <td>Rol con todos los permisos</td>
        <td>Crear, Leer, Actualizar, Eliminar</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Usuario</td>
        <td>Rol con permisos limitados</td>
        <td>Leer, Actualizar</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Invitado</td>
        <td>Rol con permisos mínimos</td>
        <td>Leer</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>
export default {
  name: 'App',
  data() {
  return {


  }
}
,
  methods: {


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

.boxContainer {
  background-color: rgb(250, 229, 197);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  max-width: 80%;
  margin: 15px auto 0 auto;
  border: 3px solid #080808;
}

#addRoleButton {
  background-color: rgb(255, 236, 209);
  border: 1px solid #080808;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

.containerInfo {
  padding: 0;
  min-height: 400px;
}

.rolesTable {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.rolesTable th, .rolesTable td {
  border: 1px solid #080808;
  padding: 8px 12px;
}

.rolesTable th {
  background-color: rgb(255, 236, 209);
  font-weight: bold;
  border-bottom-width: 2px;
}

.rolesTable tr:nth-child(even) {
  background-color: rgb(255, 241, 221);
}

.rolesTable button {
  background-color: rgb(255, 236, 209);
  border: 1px solid #080808;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

.rolesTable button:hover {
  background-color: rgb(255, 221, 178);
}

.rolesTable {
  height: min-content;
}


</style>

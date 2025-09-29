<template>
  <div class="background"></div>

  <div class="boxContainer">
  <h2>Gestión de Empresas</h2>
  <input type="button" value="+" id="addEmpresa" class="add"/>
</div>

<div class="boxContainer containerInfo">
  <div class="title">Empresa #1 - <input type="button" value="Agregar Sector" id="addSector" class="add addS"/></div>
  <table class="empresasTable">
    <thead>
      <tr>
        <th>Nombre del Sector</th>
        <th>Descripción</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Administración</td>
        <td>Oficina administrativa</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Secretaría</td>
        <td>Mesa de entrada</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>

<div class="boxContainer containerInfo">
  <div class="title">Empresa #2 - <input type="button" value="Agregar Sector" id="addSector2" class="add addS"/></div>
  <table class="empresasTable">
    <thead>
      <tr>
        <th>Nombre del Sector</th>
        <th>Descripción</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Administración</td>
        <td>Oficina administrativa</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Secretaría</td>
        <td>Mesa de entrada</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
        </td>
      </tr>
      <tr>
        <td>Carnet</td>
        <td>Oficina carnet de conducir</td>
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
  border: 2px solid #080808;
}

.add {
  background-color: rgb(255, 236, 209);
  border: 1px solid #080808;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

.addS{
  border-radius: 2px;
  font-size: 14px;
  padding: 5px 8px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  padding: 3px 5px;
  border: 1px solid #080808;

}

.containerInfo {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.empresasTable {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.empresasTable th, .empresasTable td {
  border: 1px solid #080808;
  padding: 8px 12px;
}

.empresasTable th {
  background-color: rgb(255, 236, 209);
  font-weight: bold;
  border-bottom-width: 2px;
}

.empresasTable tr:nth-child(even) {
  background-color: rgb(255, 241, 221);
}

.empresasTable button {
  background-color: rgb(255, 236, 209);
  border: 1px solid #080808;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

.empresasTable button:hover {
  background-color: rgb(255, 221, 178);
}

.empresasTable {
  height: min-content;
}


</style>

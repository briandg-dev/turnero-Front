<template>
  <div class="background"></div>

  <!-- Caja de login / registro -->

  <main class="boxContainer">
    <div>
      <label>Charlas Viturales</label>
      <p>Por la primera vez se debe realizar la charla correspondiente a la licencia a sacar (moto, auto y/o profesional).</p>
      <input type="button" value="Inscribirme"/>
    </div>
    <div>
      <label>Curso Seguridad Vial - Turnos por primera vez</label>
      <p>Además de las Charlas Virtuales, es obligatorio realizar el curso correspondiente a la licencia a rendir.</p>
      <input type="button" value="Inscribirme"/>
    </div>
    <div>
      <label>Consultar Infracciones</label>
      <p>El pago de infracciones puede tardar en impactar, recomendamos revisar y realizar el pago entre 48hs y 72hs como mínimo.</p>
      <input type="button" value="Consultar"/>
    </div>
  </main>
  
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 100%;
  margin: 15px auto 0 auto;
}

.boxContainer div{
  background-color: rgb(224, 243, 255);
  height: auto;
  padding: 10px;
  border-radius: 4px;
  border-style: solid;
  border-color: rgb(182, 227, 255);
  border-width: 1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.boxContainer div label{
  font-size: 1.1em;
  font-weight: bold;
  color: rgb(10, 2, 99);
}
.boxContainer div p{
  margin-top: 10px;
  color: rgb(10, 2, 99);
  font-size: 1em;
  line-height: 1.4;
}

.boxContainer div input{
  margin-top: 15px;
  background-color: rgb(37, 18, 239);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}
.boxContainer div input:hover{
  background-color: rgb(93, 78, 255);
}

@media (max-width: 600px) {
  .boxContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }
}
</style>

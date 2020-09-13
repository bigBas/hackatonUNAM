<template>
  <div class="container my-5 finance-g-sty">
      <h3> <b> CETES </b> </h3>
      <div class="d-flex flex-wrap mt-4">
          <div class="asset-main-pres p-5 mr-4">
              <h3 class="my-auto">CETES</h3>
          </div>
          <div>
            <pre class="mt-3 mt-md-0">
Tolera los riesgos moderados y le gusta mantener
una pequeña parte de sus inversiones líquidaz
(disponibles a corto plazo) y otra parte mayor a
mediano plazo.
            </pre>
          </div>
      </div>
      <h2 class="mt-md-5 mt-2">¿En dónde puedo invertir?</h2>
      <div class="mt-5">
          <div class="mt-3">
            <a href="#">Link shidoliro</a>
            <pre>
Según el sitio oficial: “es una plataforma en internet para que cualquier
persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de
bolsa u otras instituciones.
            </pre>
          </div>
          <div class="mt-3">
            <a href="#">Link shidoliro 2</a>
            <pre>
Según el sitio oficial: “es una plataforma en internet para que cualquier
persona pueda invertir en Valores Gubernamentales sin la intermediación de la banca, casas de
bolsa u otras instituciones.
            </pre>
          </div>
      </div>
      <button
            class="btn btn-lg btn-primary mr-4"
            @click="$router.push('./my-invest-profile')"
          >
            Regresar
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.finance-g-sty {
    color:#00495A;
    font-family: 'Assistant', sans-serif;
}
.asset-main-pres {
    background-color: #FFF;
    display: inline-block;
    border-radius: 15px;
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.10);
    /* rgba(255, 255, 255, 91%) */
}
pre {
    font-family: 'Maitree', serif;
    overflow: hidden;
}
/* .asset-main-pres h3 {
    position:absolute
} */
</style>
<template>
  <div class="container my-5 finance-g-sty">
    <h3>
      <b> {{ instrumento.nombre }} </b>
    </h3>
    <div class="d-flex flex-wrap mt-4">
      <div class="asset-main-pres p-5 mr-4">
        <h3 class="my-auto">{{ instrumento.nombre }}</h3>
      </div>
      <div>
        <pre class="mt-3 mt-md-0"
          >{{ instrumento.descripcion }}
            </pre
        >
      </div>
    </div>

    <h2 class="mt-md-5 mt-2">¿En dónde puedo invertir?</h2>

    <div class="mt-5">
      <div class="mt-3" v-for="(b, i) in brokers" :key="i">
        <a :href="b.link">{{ b.nombre }}</a>
        <pre
          >{{ b.descripcion }}
            </pre
        >
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
import config from "../config/config";
import axios from "axios";

export default {
  data() {
    return {
      idInstrumento: localStorage.getItem("idInstrumento")
        ? localStorage.getItem("idInstrumento")
        : "",
      instrumento: {},
      brokers: [],
    };
  },
  methods: {
    obtenerInstrumento() {
      axios
        .get(`${config.api}/instrumento?idInstrumento=${this.idInstrumento}`)
        .then((res) => {
          this.instrumento = res.data;
          console.log(this.instrumento);
          for (let i = 0; i < this.instrumento.Titulos.length; i++) {
            for (
              let j = 0;
              j < this.instrumento.Titulos[i].BrokerTitulos.length;
              j++
            ) {
              let existe = false;

              for (let k = 0; k < this.brokers.length; k++) {
                if (
                  this.brokers[k].nombre ===
                  this.instrumento.Titulos[i].BrokerTitulos[j].Broker.nombre
                )
                  existe = true;
              }
              if (!existe)
                this.brokers.push(
                  this.instrumento.Titulos[i].BrokerTitulos[j].Broker
                );
            }
          }
        })
        .catch((err) => {});
    },
  },
  created() {
    this.obtenerInstrumento();
  },
};
</script>

<style scoped>
.finance-g-sty {
  color: #00495a;
  font-family: "Assistant", sans-serif;
}
.asset-main-pres {
  background-color: #fff;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.1);
  /* rgba(255, 255, 255, 91%) */
}
pre {
  font-family: "Maitree", serif;
  overflow: hidden;
}
/* .asset-main-pres h3 {
    position:absolute
} */
</style>

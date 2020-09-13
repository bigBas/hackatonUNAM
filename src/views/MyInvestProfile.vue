<template>
  <div class="container my-5 finance-g-sty">
    <h3 class="text-center">
      Tu perfil de inversión es<b> {{ perfil.nombre }} </b>
    </h3>
    <div class="d-flex mt-5 flex-column align-items-center">
      <div class="asset-main-pres p-5 mb-3" style="">
        <h3 class="my-auto mx-auto">PERFIL</h3>
      </div>
      <div>
        <pre class="mt-5 mt-md-0 text-center" style="width:100%;"
          >{{ perfil.descripcion }}
            </pre
        >
      </div>
    </div>

    <h2 class="mt-md-3 mt-2">Podrías considerar invertir en:</h2>

    <div class="mt-5">
      <div class="d-flex justify-content-center flex-wrap">
        <div
          class="card"
          style="width: 18rem;"
          v-for="(pi, i) in perfil.PerfilInstrumentos"
          :key="i"
        >
          <div class="asset-sec-pres p-5 mb-3 mx-auto">
            <h3 class="text-center my-auto mx-auto">
              {{ pi.Instrumento.nombre }}
            </h3>
          </div>
          <div class="card-body text-center">
            <button
              class="btn btn-success"
              @click="verInstrumento(pi.Instrumento.idInstrumento)"
            >
              ¡Conocer más!
            </button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="mt-5 text-center">Podrías diversificar:</h2>

    <div class="chart">
      <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
    </div>
    <button class="btn btn-lg btn-primary mt-5" @click="$router.push('./test')">
      Hacer otro test
    </button>
  </div>
</template>

<script>
import config from "../config/config";
import axios from "axios";

export default {
  data() {
    return {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
        },
      ],
      option: {
        title: {
          display: true,
          position: "bottom",
          text: "Instrumentos de inversión",
        },
      },
      perfil: {},
      calificacion: localStorage.getItem("calificacion")
        ? localStorage.getItem("calificacion")
        : "1",
    };
  },
  methods: {
    obtenerPerfil() {
      axios
        .get(`${config.api}/perfil?calificacion=${this.calificacion}`)
        .then((res) => {
          this.perfil = res.data;
          console.log(this.perfil);
          for (let i = 0; i < this.perfil.PerfilInstrumentos.length; i++) {
            this.labels.push(
              this.perfil.PerfilInstrumentos[i].Instrumento.nombre
            );
            this.datasets[0].data.push(
              this.perfil.PerfilInstrumentos[i].porcentajeSinFondo
            );
          }
          console.log(this.labels);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    verInstrumento(idInstrumento) {
      localStorage.setItem("idInstrumento", idInstrumento);
      this.$router.push("/finance-asset-con");
    },
  },
  created() {
    this.obtenerPerfil();
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
.asset-sec-pres {
  background-color: lightgray;
  display: inline-block;
  border-radius: 15px;
  margin-top: 20px;
}

.asset-sec-pres h3 {
  font-size: 14px;
}
.chart {
  padding: 20px;
}

pre {
  font-family: "Maitree", serif;
  overflow: hidden;
}
/* .asset-main-pres h3 {
    position:absolute
} */
</style>

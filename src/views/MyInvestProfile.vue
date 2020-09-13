<template>
  <div class="container my-5 finance-g-sty">
      <h3 class="text-center"> Tu perfil de inversión es<b> moderado  </b> </h3>
      <div class="d-flex mt-5 flex-column align-items-center">
          <div class="asset-main-pres p-5 mb-3" style="">
              <h3 class="my-auto mx-auto">PERFIL</h3>
          </div>
          <div>
            <pre class="mt-5 mt-md-0 text-center" style="width:100%;">
Tolera los riesgos moderados y le gusta mantener
una pequeña parte de sus inversiones líquidaz
(disponibles a corto plazo) y otra parte mayor a
mediano plazo.
            </pre>
          </div>
      </div>
      <h2 class="mt-md-3 mt-2">Podrías considerar invertir en:</h2>
      <div class="mt-5">
          <div class="d-flex justify-content-center flex-wrap">
            <div class="card" style="width: 18rem;">
                <div class="asset-sec-pres p-5 mb-3 mx-auto">
                    <h3 class="text-center my-auto mx-auto">PERFIL</h3>
                </div>
                <div class="card-body text-center">
                    <a href="#" class="btn btn-success">¡Conocer más!</a>
                </div>
            </div>

            <div class="card mx-3 my-3 my-lg-0" style="width: 18rem;">
                <div class="asset-sec-pres p-5 mb-3 mx-auto">
                    <h3 class="text-center my-auto mx-auto">FONDOS DE INVERSIÓN <br>
DE RENTA VARIABLE</h3>
                </div>
                <div class="card-body text-center">
                    <a href="#" class="btn btn-success">¡Conocer más!</a>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <div class="asset-sec-pres p-5 mb-3 mx-auto">
                    <h3 class="text-center my-auto mx-auto">SOFIPOS</h3>
                </div>
                <div class="card-body text-center">
                    <a href="#" class="btn btn-success">¡Conocer más!</a>
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
      <button
            class="btn btn-lg btn-primary mt-5"
            @click="$router.push('./test')"
          >
            Hacer otro test
      </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            labels: ["Instrumento1  ", "Instrumento2  ", "Instrumento3"],
            datasets: [
                {
                    data: [20, 30, 50],
                    backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
                    hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
                }
            ],
            option: {
                title: {
                    display: true,
                    position: "bottom",
                    text: "Instrumentos de inversión"
                }
            }
        };
    }

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
.asset-sec-pres {
    background-color: lightgray;
    display: inline-block;
    border-radius: 15px;
    margin-top:20px
}

.asset-sec-pres h3 {
    font-size: 14px;
}
.chart{
    padding: 20px;
}

pre {
    font-family: 'Maitree', serif;
    overflow: hidden;
}
/* .asset-main-pres h3 {
    position:absolute
} */
</style>
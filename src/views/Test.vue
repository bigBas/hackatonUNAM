<template>
  <div class="container my-5 test-g-sty">
    <h2 class="text-center">Test: perfil de inversión</h2>

    <div class="flex-column form-test mt-5" style="display:flex" id="opc-a">
      <p for="">1.- ¿Cúantos años tienes?</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[0]"
            value="12"
            class="mr-2"
            name="p1"
            id=""
          />
          <label for="">Menos de 20</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[0]"
            value="10"
            class="mr-2"
            name="p1"
            id=""
          />
          <label for="">Entre 21 y 30</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[0]"
            value="8"
            class="mr-2"
            name="p1"
            id=""
          />
          <label for="">Entre 31 y 40</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[0]"
            value="6"
            class="mr-2"
            name="p1"
            id=""
          />
          <label for="">Entre 41 y 50</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[0]"
            value="4"
            class="mr-2"
            name="p1"
            id=""
          />
          <label for="">Entre 51 y 60</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[0]"
            value="2"
            class="mr-2"
            name="p1"
            id=""
          />
          <label for="">Más de 60</label>
        </div>
      </div>
      <p for="">
        2.- ¿Tienes dependientes económicos? (Cuentan tanto hijos como papás u
        otros familiares anexos)
      </p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[1]"
            value="4"
            class="mr-2"
            name="p2"
            id=""
          />
          <label for="">No, ninguno</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[1]"
            value="2"
            class="mr-2"
            name="p2"
            id=""
          />
          <label for="">Sí</label>
        </div>
      </div>

      <p for="">3.- Tu fuente de ingresos es:</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[2]"
            value="4"
            class="mr-2"
            name="p3"
            id=""
          />
          <label for="">Constante</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[2]"
            value="2"
            class="mr-2"
            name="p3"
            id=""
          />
          <label for="">Variable</label>
        </div>
      </div>

      <p for="">
        4.- Crees que en los proximos años tus ingresos se mantendrán:
      </p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[3]"
            value="2"
            class="mr-2"
            name="p4"
            id=""
          />
          <label for="">Constantes</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[3]"
            value="0"
            class="mr-2"
            name="p4"
            id=""
          />
          <label for="">Se reducirán</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[3]"
            value="4"
            class="mr-2"
            name="p4"
            id=""
          />
          <label for="">Crecerán</label>
        </div>
      </div>

      <p for="">5.- ¿Cúal es la meta principal que tienes al invertir?</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[4]"
            value="2"
            class="mr-2"
            name="p5"
            id=""
          />
          <label for="">Viajes</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[4]"
            value="2"
            class="mr-2"
            name="p5"
            id=""
          />
          <label for="">Coche</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[4]"
            value="4"
            class="mr-2"
            name="p5"
            id=""
          />
          <label for="">Casa</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[4]"
            value="6"
            class="mr-2"
            name="p5"
            id=""
          />
          <label for="">Educación de tus hijos</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[4]"
            value="8"
            class="mr-2"
            name="p5"
            id=""
          />
          <label for="">Patrimonio o retiro</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[4]"
            value="0"
            class="mr-2"
            name="p5"
            id=""
          />
          <label for="">No tengo ni idea</label>
        </div>
      </div>
    </div>

    <div class="flex-column form-test mt-5" style="display:none" id="opc-b">
      <p for="">
        6.- ¿Cada cuándo quisieras tener la posibilidad de hacer retiros?
      </p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[5]"
            value="0"
            class="mr-2"
            name="p6"
            id=""
          />
          <label for="">Diario</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[5]"
            value="2"
            class="mr-2"
            name="p6"
            id=""
          />
          <label for="">Semanal</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[5]"
            value="4"
            class="mr-2"
            name="p6"
            id=""
          />
          <label for="">Mensual</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[5]"
            value="6"
            class="mr-2"
            name="p6"
            id=""
          />
          <label for="">Trimestral</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[5]"
            value="8"
            class="mr-2"
            name="p6"
            id=""
          />
          <label for="">Semestral</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[5]"
            value="10"
            class="mr-2"
            name="p6"
            id=""
          />
          <label for="">Anual</label>
        </div>
      </div>

      <p for="">
        7.- ¿Cuánto podrías dejar tu dinero sin tocarlo ni por emergencias?
      </p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[6]"
            value="0"
            class="mr-2"
            name="p7"
            id=""
          />
          <label for="">De un día a un mes</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[6]"
            value="2"
            class="mr-2"
            name="p7"
            id=""
          />
          <label for="">1 a 3 meses</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[6]"
            value="4"
            class="mr-2"
            name="p7"
            id=""
          />
          <label for="">3 a 1 año</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[6]"
            value="6"
            class="mr-2"
            name="p7"
            id=""
          />
          <label for="">1 año a 3 años</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[6]"
            value="8"
            class="mr-2"
            name="p7"
            id=""
          />
          <label for="">3 años en adelante</label>
        </div>
      </div>

      <p for="">8.- ¿Qué preferirías?</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[7]"
            value="2"
            class="mr-2"
            name="p8"
            id=""
          />
          <label for=""
            >Tener poco riesgo y ganancias constantes, aunque sea bajas, pero
            que no vea que baje el monto inicial de inversión. De preferencia,
            saber exactamente cuánto voy a ganar.</label
          >
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[7]"
            value="4"
            class="mr-2"
            name="p8"
            id=""
          />
          <label for=""
            >Arriesgar un poco para ganar un poco más y podría aguantar pérdidas
            muy pequeñas, siempre y cuando sean sólo temporales.</label
          >
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[7]"
            value="6"
            class="mr-2"
            name="p8"
            id=""
          />
          <label for=""
            >Arriesgar más para maximizar mis ganancias, aunque sé que podría
            perder, estoy dispuesto a correr el riesgo por la posibilidad de
            ganar más.</label
          >
        </div>
      </div>

      <p for="">9.- ¿Qué te importa más?</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[8]"
            value="0"
            class="mr-2"
            name="p9"
            id=""
          />
          <label for="">No perder</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[8]"
            value="2"
            class="mr-2"
            name="p9"
            id=""
          />
          <label for="">Ganar más</label>
        </div>
      </div>

      <p for="">
        10.- Los instrumentos que tienen rendimientos más altos por lo general
        están asociados a:
      </p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[9]"
            value="2"
            class="mr-2"
            name="p10"
            id=""
          />
          <label for="">Mayor riesgo</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[9]"
            value="0"
            class="mr-2"
            name="p10"
            id=""
          />
          <label for="">Menor riesgo</label>
        </div>
      </div>
    </div>

    <div class="flex-column form-test mt-5" style="display:none" id="opc-c">
      <p for="">11.- Una inversión debe dar rendimientos</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[10]"
            value="2"
            class="mr-2"
            name="p11"
            id=""
          />
          <label for="">Equivalentes a la inflación</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[10]"
            value="0"
            class="mr-2"
            name="p11"
            id=""
          />
          <label for="">Menores a la inflación</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[10]"
            value="4"
            class="mr-2"
            name="p11"
            id=""
          />
          <label for="">Mayores a la inflación</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[10]"
            value="0"
            class="mr-2"
            name="p11"
            id=""
          />
          <label for="">No tengo idea</label>
        </div>
      </div>

      <p for="">
        12.- ¿Qué pasa con el precio de los instrumentos de deuda cuando las
        tasas de interés suben?
      </p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[11]"
            value="0"
            class="mr-2"
            name="p12"
            id=""
          />
          <label for="">Suben</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[11]"
            value="2"
            class="mr-2"
            name="p12"
            id=""
          />
          <label for="">Bajan</label>
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[11]"
            value="0"
            class="mr-2"
            name="p12"
            id=""
          />
          <label for="">No tengo idea</label>
        </div>
      </div>

      <p for="">13.- Tus finanzas son</p>
      <div class="d-flex flex-column">
        <div>
          <input
            type="radio"
            v-model="preguntas[12]"
            value="6"
            class="mr-2"
            name="p13"
            id=""
          />
          <label for=""
            >Holgadas: puedo cubrir todos mis gastos y ahorrar una cantidad
            considerable.</label
          >
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[12]"
            value="4"
            class="mr-2"
            name="p13"
            id=""
          />
          <label for=""
            >Justas: cubro mis gastos, pero tengo muy poco disponible para
            ahorrar.</label
          >
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[12]"
            value="2"
            class="mr-2"
            name="p13"
            id=""
          />
          <label for=""
            >Muy apretadas: apenas cubro mis gastos o tengo algunas deudas que
            me complican ahorrar.</label
          >
        </div>
        <div>
          <input
            type="radio"
            v-model="preguntas[12]"
            value="0"
            class="mr-2"
            name="p13"
            id=""
          />
          <label for="">En crisis: no alcanzo a cubrir mis gastos.</label>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example" class="mt-4">
      <ul class="pagination pagination-lg pag-bot justify-content-left">
        <li class="page-item" :class="{ active: isActiveA }" @click="opciA()">
          <a class="page-link" href="#iniLetter">A</a>
        </li>
        <li class="page-item" :class="{ active: isActiveB }" @click="opciB()">
          <a class="page-link" href="#iniLetter">B</a>
        </li>
        <li class="page-item" :class="{ active: isActiveC }" @click="opciC()">
          <a class="page-link" href="#iniLetter">C</a>
        </li>
      </ul>
    </nav>

    <button class="btn btn-lg btn-success mt-3" @click="confirmar()">
      Enviar respuestas
    </button>
  </div>
</template>

<script>
import Swal from "sweetalert2";
// import axios from 'axios'
// import config from '../config/config'

export default {
  data() {
    return {
      preguntas: [],
      preguntasInt: [],
      suma: 0,
      isActiveA: true,
      isActiveB: false,
      isActiveC: false,
    };
  },
  methods: {
    opciA() {
      document.getElementById("opc-a").style.display = "flex";
      this.isActiveA = true;
      this.isActiveB = false;
      this.isActiveC = false;

      document.getElementById("opc-b").style.display = "none";
      document.getElementById("opc-c").style.display = "none";
    },
    opciB() {
      document.getElementById("opc-b").style.display = "flex";
      this.isActiveB = true;
      this.isActiveA = false;
      this.isActiveC = false;

      document.getElementById("opc-a").style.display = "none";
      document.getElementById("opc-c").style.display = "none";
    },
    opciC() {
      document.getElementById("opc-c").style.display = "flex";
      this.isActiveC = true;
      this.isActiveA = false;
      this.isActiveB = false;

      document.getElementById("opc-a").style.display = "none";
      document.getElementById("opc-b").style.display = "none";
    },
    confirmar() {
      Swal.fire({
        title: "¡Genial!",
        text: "¿Te muestro tu perfil?",
        icon: "warning",
        backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://sweetalert2.github.io/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, vamos!",
        cancelButtonText: "No, espera",
      }).then((result) => {
        if (result.value) {
          this.sumarArreglo();
          localStorage.setItem("calificacion", this.suma);
          this.$router.push("/my-invest-profile");
        }
      });
    },
    convertirArreglo() {
      for (let i = 0; i < 12; i++) {
        this.preguntasInt[i] = parseInt(this.preguntas[i]);
        console.log(this.preguntasInt);
      }
    },
    sumarArreglo() {
      this.convertirArreglo();
      for (let i = 0; i < 12; i++) {
        this.suma += this.preguntasInt[i];
      }
    },
  },
};
</script>

<style scoped>
.test-g-sty {
  color: #00495a;
  font-family: "Assistant", sans-serif;
}
.form-test {
  font-family: "Maitree", serif;
  /* font-weight: bold; */
}
</style>

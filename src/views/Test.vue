<template>
  <div class="container my-5 test-g-sty">
    <h2 class="text-center">Test: perfil de inversión</h2>

    <div class="flex-column form-test mt-5" style="display:flex" id="opc-a">
      
      <p for="">1.- ¿Cúantos años tienes?</p>
      <div class="d-flex flex-column">
        <div>
          <input type="radio" class="mr-2" name="hola" id=""> <label for="">Menos de 20</label>
        </div>
        <div>
          <input type="radio" class="mr-2" name="hola" id=""> <label for="">Menos de 20</label>
        </div>
        <div>
          <input type="radio" class="mr-2" name="hola" id=""> <label for="">Menos de 20</label>
        </div>
        <div>
          <input type="radio" class="mr-2" name="hola" id=""> <label for="">Menos de 20</label>
        </div>
        <div>
          <input type="radio" class="mr-2" name="hola" id=""> <label for="">Menos de 20</label>
        </div>

      </div>
      <p for="">2.- ¿Tienes dependientes económicos? (Cuentan tanto hijos como papás u otros familiares anexos)</p>
      <p for="">3.- Tu fuente de ingresos es:</p>
      <p for="">4.- Crees que en los proximos años tus ingresos se mantendrán:</p>
      <p for="">5.- ¿Cúal es la meta principal que tienes al invertir?</p>

    </div>

    <div class="flex-column form-test mt-5" style="display:none" id="opc-b">
      <p for="">6.- ¿Cada cuándo quisieras tener la posibilidad de hacer retiros?</p>
      <p for="">7.- ¿Cuánto podrías dejar tu dinero sin tocarlo ni por emergencias?</p>
      <p for="">8.- ¿Qué preferirías?</p>
      <p for="">9.- ¿Qué te importa más?</p>
      <p for="">10.- Los instrumentos que tienen rendimientos más altos por lo general están asociados a:</p>
    </div>

    <div class="flex-column form-test mt-5" style="display:none" id="opc-c">
      <p for="">11.- Una inversión debe dar rendimientos</p>
      <p for="">12.- ¿Qué pasa con el precio de los instrumentos de deuda cuando las tasas de interés suben?</p>
      <p for="">13.- ¿Inviertes o has invertido en alguno de los siguientes instrumentos? (escoge todos los que apliquen).</p>
      <p for="">14.- ¿Con qué tipo de seguros cuentas? (escoge todos los que apliquen)</p>
      <p for="">15.- Tus finanzas son</p>
    </div>

    <nav aria-label="Page navigation example" class="mt-4">
                <ul
                    class="pagination pagination-lg pag-bot justify-content-left"
                >
                    <li
                        class="page-item"
                        :class="{active: isActiveA}"
                        @click="opciA()"
                    >
                        <a class="page-link" href="#iniLetter">A</a>
                    </li>
                    <li
                        class="page-item"
                        :class="{active: isActiveB}"
                        @click="opciB()"
                    >
                        <a class="page-link" href="#iniLetter">B</a>
                    </li>
                    <li
                        class="page-item"
                        :class="{active: isActiveC}"
                        @click="opciC()"
                    >
                        <a class="page-link" href="#iniLetter">C</a>
                    </li>
                </ul>
            </nav>
            
            <button
              class="btn btn-lg btn-success mt-3"
              @click="confirmar()"
            >
                  Enviar respuestas
            </button>
            
  </div>
</template>

<script>
import Swal from 'sweetalert2'
// import axios from 'axios'
// import config from '../config/config'

export default {
  data() {
    return {
        isActiveA: true,
        isActiveB: false,
        isActiveC: false,
    }
  },
  methods: {
    opciA() {
            document.getElementById('opc-a').style.display = 'flex'
            this.isActiveA = true
            this.isActiveB = false
            this.isActiveC = false
            
            document.getElementById('opc-b').style.display = 'none'
            document.getElementById('opc-c').style.display = 'none'
        },
        opciB() {
            document.getElementById('opc-b').style.display = 'flex'
            this.isActiveB = true
            this.isActiveA = false
            this.isActiveC = false
            
            document.getElementById('opc-a').style.display = 'none'
            document.getElementById('opc-c').style.display = 'none'
        },
        opciC() {
            document.getElementById('opc-c').style.display = 'flex'
            this.isActiveC = true
            this.isActiveA = false
            this.isActiveB = false

            document.getElementById('opc-a').style.display = 'none'
            document.getElementById('opc-b').style.display = 'none'
        },
        confirmar() {
            Swal.fire({
                title: '¡Genial!',
                text: '¿Te muestro tu perfil?',
                icon: 'warning',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://sweetalert2.github.io/images/nyan-cat.gif")
                  left top
                  no-repeat
                `,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, vamos!',
                cancelButtonText: 'No, espera',
            })
        },
  },
}
</script>

<style scoped>
.test-g-sty {
    color:#00495A;
    font-family: 'Assistant', sans-serif;
}
.form-test {
  font-family: 'Maitree', serif;
  /* font-weight: bold; */
}
</style>
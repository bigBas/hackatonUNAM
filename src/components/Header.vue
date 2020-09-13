<template>
  <header class="header-h" id="iniLetter">
    <div
      class="container py-2 d-flex justify-content-between align-items-center"
    >
      <div class="">
        <router-link to="test" class="text-decoration-none text-white my-auto">
          <h3 class="font-weight-bold my-auto">LOGO</h3>
        </router-link>
      </div>
      <div>
        <router-link to="test" class="text-white mr-4">Test</router-link>
        <router-link to="#" class="text-decoration-none text-white"
          >Contacto</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
/*

#00495A azul oscuro
#01A3BA
#F3F4E4

Assistant
Maitree 

*/

.header-h {
  /* background: #1b3d70; */
  background: #1b3d70;
}

.header-h div div {
  font-size: 16px;
  color: #f3f4e4;
  font-family: "Assistant", sans-serif;
}
</style>

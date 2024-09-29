<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="¡Hola mundo!" />

      <nav class="navegador">
        <RouterLink to="/" class="ruta">Home</RouterLink>
        <RouterLink to="/about" class="ruta">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
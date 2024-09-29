<!-- Lógica -->
<script setup lang="ts">
// Importamos ruta del componente CardItem -> @ <- alias
import CardItem from '@/components/CardItem.vue';

// Importamos interfaz de tarjetas; agregamos "type"
import type { Card } from '@/models/CardModel';

/* Ejemplo
  import { ref, reactive } from 'vue';

  const count = ref(10);
  const miClase: string = 'mi-clase';
*/

const cards: Card[] = [
  { id: 0o1, logo: "logo-angular", class: "angular", title: "Angular", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { id: 0o1, logo: "logo-vue", class: "vue", title: "Vue", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
  { id: 0o1, logo: "logo-react", class: "react", title: "React", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
]
</script>

<!-- Estructura -->
<template>
  <!-- Ejemplo: <button v-bind:class="false && miClase" @click="count++">Esto es un número: {{ count }}</button> -->
  
  <!-- v-for: Itera cada item del arreglo "cards" -->
  <div v-for="card in cards">
    <!-- Insertamos componente.
     -> se insertará para cada "item" del arreglo -> :card="card"
     -> información enviada a defineProps -->
    <CardItem :card="card"/>
  </div>
</template>

<style scoped></style>

<!-- Estilos | Ejemplo: <style>.mi-clase{color: red;}</style>-->
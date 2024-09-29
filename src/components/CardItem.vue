<!-- COMPONENTE CARD: Reutilizable -->
<script setup lang="ts">
// Importamos interfaz de tarjetas (importante agregar '@' para alias)
// agregamos "type" para indicar que vendrá un tipo
import type { Card } from '@/models/CardModel';

// Ejemplo -> define que la información que reciba la tarjeta respete 
//estructura de "Card"
const props = defineProps<{
  card: Card;
}>()


// defineProps: palabra clave para representar propieades
// Unidireccional: solo envía datos de componente padre a hijo
// Ejemplo -> No exige tipo o estructura a seguir (toma como "Record")
// defineProps({
//   card: {
//     type: Object,
//     required: true
//   }
// })
</script>

<template>
  <div class="container">
    <div class="card">
      <!-- v-bind:class <- bidireccionamiento por clase -->
      <div v-bind:class="card.class" class="box">
        <div class="content">
          <h2>{{ card.id }}</h2>
          <div class="icons">
            <ion-icon name="bookmark-outline"></ion-icon>

            <!-- v.bind:name <- bidireccionamiento por atributo -->
            <ion-icon v-bind:name="card.logo"></ion-icon>
            <ion-icon name="trash-outline"></ion-icon>
          </div>

          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
          <a href="#">Saber más</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos contenedor */
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 40px 0;
}

/* Estilos tarjetas */
.card {
  position: relative;
  width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset -5px -5px -5px rgba(255, 255, 255, 255, 0.5),
    5px 5px 5px rgba(0, 0, 0, 0.5),
    -5px -5px -5px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 30px;
}

.box{
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background-color: #ebf5fc;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.content{
  padding: 20px;
  text-align: center;
}

h2{
  position: relative;
  top: 10px;
  right: 30px;
  font-size: 8em;
  color: rgba(0, 0, 0, 0.04);
  transition: 0.5s;
}

.icons{
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  font-weight: 800;
}

h3{
  font-size: 1.8em;
  color: #777;
  z-index: 1;
  transition: 0.5s;
}

p{
  font-size: 1em;
  font-weight: 300;
  color: #313131;
  z-index: 1;
  transition: 0.5s;
}

a{
  position: relative;
  display: inline-block;
  padding: 8px 25px;
  background: #03a9f4;
  margin-top: 15px;
  color: #fff;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 400;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Estilos al pasar cursor */
.card:hover .box{
  transform: translateY(-50px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #b95ce4, #4f29cd);
}

.card:hover .box.vue{
  background: linear-gradient(45deg, #3d395e, #41b883);
}

.card:hover .box.react{
  background: linear-gradient(45deg, #888ded, #4c284e);
}


.card:hover .box.angular{
  background: linear-gradient(40deg, #b3b3b3, #dd1b16);
}

.card:hover .icons{
  color: #FFF;
}

.card:hover h2{
  color: rgba(0, 0, 0, 0.08)
}

.card:hover h3, .card:hover p{
  color: #FFF;
}

.card:hover a{
  background: #ff568F;
}

.card:hover .box.vue a{
  background: #41b883;
}

.card:hover .box.react a{
  background: #61dbfb;
}

.card:hover .box.react a{
  background: #1c2c4c;
}

.card:hover .box.angular a{
  background: #b52e31;
}
</style>
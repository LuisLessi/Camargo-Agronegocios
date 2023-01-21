<template>
  <Carousel_home/>
  <h1>Cidades</h1>
  <ul li v-for="cidade in cidades" :key="cidade.id">
        <li v-if="cidade.letter == 'GO'">{{ cidade.title }}</li>
  </ul>
  <div class='row ' >
    <div class='col-sm-6 '>
  <div class="card" >
  <img class="card-img-top" src="../assets/leilao-app.png" alt="Card image cap">
  
</div>
</div>
<div class='col-sm-6 '>
<div class="card pt-5 pb-5" >
  <router-link to="/login"><img class="card-img-sub" src="../assets/card_cadasro.png" alt="Card image cap"></router-link>
</div>
</div>
</div>
</template>

<script>
import api from "@/services/api"
import cidades from "@/services/cidades"
import axios from "axios"
import { onMounted } from "vue"
import Carousel_home from '../components/Carousel_home.vue'

export default {
  name: 'HomeView',
  components: {
    Carousel_home
  },
  data(){
    return{
      cidades:[]
    }
  },
 async mounted(){
  let cidades = await axios.get("https://bis365.com.br/bid365/api/v1/cities");
  console.log(cidades.data.data)
  this.cidades = cidades.data.data
 }
}
</script>


<style scoped>
.card{
  border: none;
  background-color: var(--color-background-html);
}
.card:hover{
cursor: pointer;
}
.row{
  margin-right: 0;
  background-color: var(--color-background-html);
}

.card-img-sub{
max-width: 60%;
margin-left: 20%;
margin-top: 5%
}
</style>

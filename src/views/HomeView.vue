<template>
  <Carousel_home/>
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
import Carousel_home from '../components/Carousel_home.vue'

export default {
  name: 'HomeView',
  components: {
    Carousel_home
  },

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

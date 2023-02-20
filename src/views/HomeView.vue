<template>
  <Carousel_home />
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/leilao-app.png"
          alt="Card image cap"
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card pt-5 pb-5">
        <router-link to="/login"
          ><img
            class="card-img-sub"
            src="../assets/card_cadasro.png"
            alt="Card image cap"
        /></router-link>
      </div>
    </div>
  </div>
  <div class="container" style="background-color: white">
    <h1 class="border-left p1-3">AGENDA DE LEILÕES</h1>

    <AuctionCard style="background-color: white" />
  </div>
</template>

<script>
import Carousel_home from "../components/Carousel_home.vue";
import AuctionCard from "../components/AuctionCard.vue";

export default {
  name: "HomeView",
  components: {
    Carousel_home,
    AuctionCard,
  },
};
</script>


<style scoped>
.card {
  border: none;
  background-color: var(--color-background-html);
}
.card:hover {
  cursor: pointer;
}
.row {
  margin-right: 0;
  background-color: var(--color-background-html);
}

.card-img-sub {
  max-width: 60%;
  margin-left: 20%;
  margin-top: 5%;
}
h1 {
  font-family: "lato reagular";
  font-size: 20;
}
.border-left {
  border-left: 9px solid var(--color-background-button) !important;
  margin-top: 5%;
}
</style>

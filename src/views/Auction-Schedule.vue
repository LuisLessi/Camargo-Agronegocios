<template>
    <div class="container" style="background-color: white;">
        <h1 class="border-left p1-3">AGENDA DE LEILÕES</h1>

       <AuctionCard/>
    </div>

    <div class='row mt-5 apps'>
        <div class='col-sm-6'>
            <div class="card-app" style="cursor: pointer;">
                <img class="card-img-top" src="../assets/leilao-app.png" alt="Card image cap">

            </div>
        </div>
        <div class='col-sm-6'>
            <div class="card-app pt-5 pb-5 mt-4" style="background-color: white; height: 15.7rem;">
                <router-link to="/login"><img class="card-img-sub" src="../assets/card_cadasro.png"
                        alt="Card image cap"></router-link>
            </div>
        </div>
    </div>
    <h1 style="margin-left: 9%;">PARCEIROS</h1>
    <div class="patrocinadores mb-5">
        <img src="../assets/crediserra.png" class="img-patrocinadores">
    </div>
</template>

<script>
import AuctionCard from '../components/AuctionCard.vue'
export default {
    name: 'AuctionSchedule',
    components: {
        AuctionCard
    },
}
</script>

<style scoped>
h1 {
    font-family: 'lato reagular';
    font-size: 20;
}

p {
    font-family: 'lato';
    font-weight: bold;
}

a:-webkit-any-link {
    text-decoration: none;
    color: black;
}

.border-left {
    border-left: 9px solid var(--color-background-button) !important;
    margin-top: 5%;
}


.card-img-sub {
    max-width: 60%;
    margin-left: 20%;
}

.card-app {
    border: none;
    background-color: var(--color-background-html);
}

.apps {
    margin-right: 0;
    background-color: var(--color-background-html);
}
.patrocinadores{
    margin-left: 9%
}
@media only screen and (max-width: 1024px) {
.patrocinadores{
    margin-left: 9%;

}
.img-patrocinadores{
max-width: 40%;

}
}
</style>
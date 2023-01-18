<template>
    <div class="container mb-4" style="cursor: pointer;">
        <h1 class="border-left p1-3">RESULTADO DOS LEILÕES</h1>

        <div class="row mt-5">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body mb-4">
                        <h3 class="card-title" style="font-family: 'Lauto'; font-weight: bold;">
                            EM ANDAMENTO</h3>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class='row mt-5 apps'>
        <div class='col-6'>
            <div class="card-app" style="width: 36rem; cursor: pointer;">
                <img class="card-img-top" src="../assets/leilao-app.png" alt="Card image cap">

            </div>
        </div>
        <div class='col-6'>
            <div class="card-app pt-5 pb-5 mt-4" style="width: 36rem; background-color: white; height: 13.5rem;">
                <router-link to="/login"><img class="card-img-sub" src="../assets/card_cadasro.png"
                        alt="Card image cap"></router-link>
            </div>
        </div>
    </div>
    <h1 style="margin-left: 9%;">PARCEIROS</h1>
    <div>
        <img src="../assets/crediserra.png" style="margin-left: 9%;">
    </div>
</template>

<script>

</script>

<style scoped>
h1 {
    font-family: 'lato reagular';
    font-size: 20;
}

.border-left {
    border-left: 9px solid var(--color-background-button) !important;
    margin-top: 5%;
}

.card-body {
    background-color: #0f921c;
    font-size: 20px;
    border-radius: 0 8px 8px 8px;
    max-width: 224px;
    margin-top: 0%;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    color: white;
    height: 50px;
}

.card-body h3 {
    font-size: 20px;
}
.apps{
  margin-right: 0;
  background-color: var(--color-background-html);

}
.card-img-sub{
max-width: 60%;
margin-left: 20%;
}
</style>
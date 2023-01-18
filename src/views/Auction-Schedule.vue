<template>
    <div class="container" style="background-color: white;">
        <h1 class="border-left p1-3">AGENDA DE LEILÕES</h1>

        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="card mb-5">
                    <RouterLink to="/auctionDetails">
                        <div class="card-body">
                            <div class="d-flex">
                                <img src="../assets/logo-rodape.png" class="card-img-top">
                            </div>
                            <div class="mid-card">
                                <div class="col-4 p-0 text-center mr-1 date  ">
                                    <p class="p-0 m-0" style="font-size: 50px; line-height: 1; color: white;">04</p>
                                    <p class="p-0 m-0" style="font-size: 20px; line-height: 1; color: white;">MAR.</p>
                                    <hr class="p-0 m-0" style="border-color: white;">
                                    <p class="p-0 m-0" style="font-size: 15px; line-height: 2; color: white;">Domingo.
                                    </p>

                                </div>

                                <div class="col-8 p-0">
                                    <p style="font-size: 18px;">
                                        Feira de Gado Geral de Anita Garibaldi
                                    </p>

                                    <div class="texto-icon">
                                        <img src="../assets/location-icon.svg" class="location">
                                        <p style="font-size: 15px;">
                                            Painel - SC
                                        </p>
                                    </div>

                                    <div class="texto-icon">
                                        <img src="../assets/relogio-icon.svg" class="location">
                                        <p style="font-size: 15px;">
                                            19:00 (Horário de Brasília)
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <a href="#" class="btn btn-primary btn-lg mt-3" style="margin-left: 20%;">VER DATALHES</a>
                        </div>
                    </RouterLink>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <RouterLink to="/auctionDetails">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="../assets/logo-rodape.png" class="card-img-top">
                        </div>
                        <div class="mid-card">
                            <div class="col-4 p-0 text-center mr-1 date  ">
                                <p class="p-0 m-0" style="font-size: 50px; line-height: 1; color: white;">04</p>
                                <p class="p-0 m-0" style="font-size: 20px; line-height: 1; color: white;">MAR.</p>
                                <hr class="p-0 m-0" style="border-color: white;">
                                <p class="p-0 m-0" style="font-size: 15px; line-height: 2; color: white;">Domingo.</p>

                            </div>

                            <div class="col-8 p-0">
                                <p style="font-size: 18px;">
                                    Feira de Gado Geral de Anita Garibaldi
                                </p>

                                <div class="texto-icon">
                                    <img src="../assets/location-icon.svg" class="location">
                                    <p style="font-size: 15px;">
                                        Painel - SC
                                    </p>
                                </div>

                                <div class="texto-icon">
                                    <img src="../assets/relogio-icon.svg" class="location">
                                    <p style="font-size: 15px;">
                                        19:00 (Horário de Brasília)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <a href="#" class="btn btn-primary btn-lg mt-3" style="margin-left: 20%;">VER DATALHES</a>
                    </div>
                </RouterLink>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="card">
                    <RouterLink to="/auctionDetails">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="../assets/logo-rodape.png" class="card-img-top">
                        </div>
                        <div class="mid-card">
                            <div class="col-4 p-0 text-center mr-1 date  ">
                                <p class="p-0 m-0" style="font-size: 50px; line-height: 1; color: white;">04</p>
                                <p class="p-0 m-0" style="font-size: 20px; line-height: 1; color: white;">MAR.</p>
                                <hr class="p-0 m-0" style="border-color: white;">
                                <p class="p-0 m-0" style="font-size: 15px; line-height: 2; color: white;">Domingo.</p>

                            </div>

                            <div class="col-8 p-0">
                                <p style="font-size: 18px;">
                                    Feira de Gado Geral de Anita Garibaldi
                                </p>

                                <div class="texto-icon">
                                    <img src="../assets/location-icon.svg" class="location">
                                    <p style="font-size: 15px;">
                                        Painel - SC
                                    </p>
                                </div>

                                <div class="texto-icon">
                                    <img src="../assets/relogio-icon.svg" class="location">
                                    <p style="font-size: 15px;">
                                        19:00 (Horário de Brasília)
                                    </p>
                                </div>
                            </div>

                        </div>

                        <a href="#" class="btn btn-primary btn-lg mt-3" style="margin-left: 20%;">VER DATALHES</a>
                    </div>
                </RouterLink>
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

</template>

<script>
export default {
    name: 'AuctionSchedule',


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

.btn {
    background-color: var(--color-background-button);
    color: black;
    font-family: "lato";
    font-weight: bold;
}

.mid-card {
    display: flex;
    justify-content: flex-start;
}

.mid-card p {
    margin-left: 5%;
}

.texto-icon {
    display: flex;
    justify-content: flex-start;
}

.location {
    width: 15%;
}

.card {
    cursor: pointer;
    background-color: white;

}

.card:hover {
    background-color: var(--color-background-html);
}

.date {
    background-color: var(--color-background-navbar1);
    border-radius: 5%;
    height: 25%;
}

.card-img-sub {
    max-width: 60%;
    margin-left: 20%;
}

.card-app {
    border: none;
    background-color: var(--color-background-html);
}

.card:hover {
    cursor: pointer;
}

.apps {
    margin-right: 0;
    background-color: var(--color-background-html);
}
</style>
<template>
    <div class="container">

        <div class="row mt-5">
            <div class="col-sm col-4">
                <div class="card mb-5" style="background-color: white;">
                    <div class="card-body">
                        <div class="d-flex">
                            <img src="../assets/logo-rodape.png" class="card-img-top">
                        </div>
                        <div class="mid-card">

                            <div class="col-8 p-0 mt-5 mr-0">
                                <p style="font-size: 25px;">
                                    2ª Feira de Verão de Gado Geral
                                </p>

                                <p class="mt-3" style="font-size: 20px; font-weight: normal">
                                    Parque Municipal Gasparino do Amaral Velho
                                    - Bom Jardim da Serra - SC
                                </p>

                                <p class="mt-3" style="font-size: 20px; font-weight: normal">
                                    CAMARGO AGRONEGOCIOS
                                </p>

                                <p class="mt-3" style="font-size: 20px; font-weight: normal">
                                    Informações
                                </p>
                                <div class="num-whats">
                                    <img src="../assets/whats-icon.svg" class="mb-2" alt="">
                                    <p style="font-size: 25px; font-weight: normal">
                                        <a href="" target="_blank">(49) 98402-3763</a>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <a href="#" class="btn btn-primary btn-lg mt-3" style="margin-left: 20%;">VER CATÁLOGO</a>

                        <a href="#" class="btn btn-primary btn-lg mt-2" style="margin-left: 20%;">REGULAMENTO</a>
                    </div>
                </div>
            </div>


            <div class="col-sm-8">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Conteúdo do leilão</h3>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AuctionDetails',


}
</script>

<style scoped>
.mid-card {
    display: flex;
    justify-content: flex-start;
}

.mid-card p {
    margin-left: 0%;
    margin-right: -50%;
}

p {
    font-family: 'lato';
    font-weight: bold;
}

.btn {
    background-color: var(--color-background-button);
    color: black;
    font-family: "lato";
    font-weight: bold;

}

a:-webkit-any-link {
    text-decoration: none;
    color: black;
}

.num-whats {
    display: flex;
    justify-content: flex-start;
}
</style>
<template>
  <div class="row mt-5">
    <div class="col-sm-4" v-for="leilao in leiloes" :key="leilao.id" @click="redirect(leilao.id)">
      <div class="card mb-5">
        <RouterLink to="/auctionDetails">
          <div class="card-body">
            <div class="d-flex">
              <img src="../assets/logo-rodape.png" class="card-img-top" />
            </div>
            <div class="mid-card">
              <div class="col-4 p-0 text-center mr-1 date">
                <p
                  class="p-0 m-0"
                  style="font-size: 50px; line-height: 1; color: white"
                >
                  {{leilao.dataLeilao.diaMes}}
                </p>
                <p
                  class="p-0 m-0"
                  style="font-size: 20px; line-height: 1; color: white"
                >
                {{ leilao.dataLeilao.mesEscrito }}
                </p>
                <hr class="p-0 m-0" style="border-color: white" />
                <p
                  class="p-0 m-0"
                  style="font-size: 15px; line-height: 2; color: white"
                >
                {{leilao.dataLeilao.diaSemana}}.
                </p>
              </div>
              <div class="col-8 p-0">
                <p style="font-size: 18px">
                  {{ leilao.name }}
                </p>

                <div class="texto-icon">
                  <img src="../assets/location-icon.svg" class="location" />
                  <p style="font-size: 15px">
                    {{ leilao.city }}
                  </p>
                </div>

                <div class="texto-icon">
                  <img src="../assets/relogio-icon.svg" class="location" />
                  <p style="font-size: 15px">
                    {{ leilao.time.slice(0, -3) }} (Horário de Brasília)
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              class="btn btn-primary btn-lg mt-3"
              style="margin-left: 20%"
              >VER DATALHES</a
            >
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/pt-br';
import auctions from '../services/auctions';

moment.locale('pt-br');


export default {
    name: 'AuctionSchedule',
    data() {
    return {
      leiloes: [],
    };
  },

  async mounted() {
  let leiloes = await auctions.get();
  this.leiloes = leiloes.data.data.map((leilao) => {
    const dataLeilao = moment(leilao.date, 'YYYY-MM-DD').locale('pt-br');
    const mesEscrito = dataLeilao.format('MMM'); // Obtém as três primeiras letras do mês em português
    const diaSemana = dataLeilao.format('dddd').replace('-feira', ''); // Obtém o dia da semana em português sem "-feira"
    const diaMes = dataLeilao.format('D'); // Obtém o dia do mês

    return {
      ...leilao,
      dataLeilao: {
        diaMes,
        mesEscrito,
        diaSemana,
      },
    };
  });
  },
  methods: {
    navegarParaDetalhes(idLeilao) {
      // Navega para a rota de detalhes do leilão com o ID especificado
      this.$router.push({ name: 'auctionDetails', params: { leilao: { id: idLeilao } } });
    },

    redirect(id) {
    console.log(`https://camargoagronegocios.com.br/auctionDetails;leilao=%7B%22id%22:${id}`);
    this.$router.push({ name: 'auctionDetails', params: { id } });
  }
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
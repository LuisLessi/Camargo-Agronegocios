<template>
  <div class="container">
    <div v-if="leilao" class="row mt-5">
      <div class="col-sm col-4">
        <div class="card mb-5" style="background-color: white">
          <div class="card-body">
            <div class="d-flex">
              <img src="../assets/logo-rodape.png" class="card-img-top" />
            </div>
            <div class="mid-card">
              <div class="col-8 p-0 mt-5 mr-0">
                <p style="font-size: 25px">
                  {{ leilao.data.name }}
                </p>

                <p class="mt-3" style="font-size: 20px; font-weight: normal">
                  {{ leilao.data.address }} - {{ leilao.data.city }}
                </p>

                <p class="mt-3" style="font-size: 20px; font-weight: normal">
                  CAMARGO AGRONEGOCIOS
                </p>

                <p class="mt-3" style="font-size: 20px; font-weight: normal">
                  Informações
                </p>
                <div class="num-whats">
                  <img src="../assets/whats-icon.svg" class="mb-2" alt="" />
                  <p style="font-size: 25px; font-weight: normal">
                    <a href="" target="_blank">{{
                      formatPhoneNumber(leilao.data.phone)
                    }}</a>
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              class="btn btn-primary btn-lg mt-3"
              style="margin-left: 20%"
              >VER CATÁLOGO</a
            >

            <a
              href="#"
              class="btn btn-primary btn-lg mt-2"
              style="margin-left: 20%"
              >REGULAMENTO</a
            >
          </div>
        </div>
      </div>

      <div class="col-sm-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Conteúdo do leilão</h3>
          </div>
          <div class="row">
            <div v-if="this.leilao.data.link !== null" class="col-sm-6">
              <div class="card">
                <iframe
                  height="250px"
                  :src="linkUrl"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p style="font-size: 25px">
                  {{ leilao.data.name }}
                </p>
              </div>
            </div>

            <div v-if="this.leilao.data.video !== null" class="col-sm-6">
              <div class="card">
                <iframe
                  height="250px"
                  :src="videoUrl"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p style="font-size: 25px">
                  {{ leilao.data.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auctions from "../services/auctions";

export default {
  data() {
    return {
      leilao: [],
      linkUrl: "",
      videoUrl: "",
    };
  },

  async created() {
    const response = await auctions.get(`/${this.$route.params.id}`);
    this.leilao = response.data;
    if (this.leilao.data.link !== null) {
      const linkId = this.leilao.data.link.match(/(?:v=)([\w-]+)/)[1];
    this.linkUrl = "https://www.youtube.com/embed/" + linkId;
    }

    if (this.leilao.data.video !== null) {
    const videoId = this.leilao.data.video.match(/(?:v=)([\w-]+)/)[1];
    this.videoUrl = "https://www.youtube.com/embed/" + videoId;
    }
  },

  methods: {
    formatPhoneNumber(phoneNumber) {
      const cleaned = ("" + phoneNumber).replace(/\D/g, "");
      const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
      return null;
    },
  },
};
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
  font-family: "lato";
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
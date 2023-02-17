<template>
  <div _ngcontent-vlc-c53="" class="card mb-5">
                    <div _ngcontent-vlc-c53="" class="container mt-2">
                      <div _ngcontent-vlc-c53="" class="form-group">
                        <p _ngcontent-vlc-c53="" style="font-weight: bold">
                          DADOS DA PROPRIEDADE
                        </p>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-12 col-lg-12 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Nome da fazenda</label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="name"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-8 col-lg-8 col-sm-8"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Endereço</label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="address_area"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-4 col-lg-4 col-sm-4"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Nº Insc. Estadual </label
                              ><input
                                _ngcontent-vlc-c53=""
                                maxlength="20"
                                type="text"
                                formcontrolname="state_registration_properties"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-3 col-lg-3 col-sm-3"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">UF </label>
                              <div _ngcontent-vlc-c53="" class="form-group">
                                <select v-model="idEstado" @change="cidadesFiltradas"
                        _ngcontent-xvm-c52=""
                        formcontrolname="city_id"
                        class="
                          custom-select
                          ng-untouched ng-pristine ng-invalid
                        "
                      >

                        <option v-for="estado in estados" :key="estado.id" :value="estado.letter">
                          {{ estado.letter }}
                        </option></select>
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-9 col-lg-9 col-sm-9 mb-5"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Cidade </label>
                              <div _ngcontent-vlc-c53="" class="form-group">
                                <select v-model="idCidade"
                        _ngcontent-xvm-c52=""
                        formcontrolname="city_id"
                        class="
                          custom-select
                          ng-untouched ng-pristine ng-invalid
                        "
                      >
                        <option v-for="cidade in cidades" :key="cidade.id"  :value="cidade.letter">
                          {{ cidade.title }}
                        </option></select
                      >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
</template>

<script>
import http from "../services/api";

export default {
 data() {
    return {
      cidades: [],
      allCities: [],
      estados: [],
      idEstado: "",
      idCidade: "",
    };
  },

  async mounted() {
    let cidades = await http.get("/api/v1/cities");
    console.log(cidades.data.data);
    this.cidades = cidades.data.data;

    let estados = await http.get("/api/v1/states");
    console.log(estados.data.data);
    this.estados = estados.data.data;

    let allCities = await http.get("/api/v1/cities");
    this.allCities = allCities.data.data;
},
methods: {
    async cidadesFiltradas() {
        this.cidades = this.allCities.filter(cidade => {
    return cidade.letter === this.idEstado;
  });
}
    },
}
</script>

<style>

</style>
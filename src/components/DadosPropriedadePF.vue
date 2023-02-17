<template>
  <div _ngcontent-xvm-c52="" class="card mt-5 mb-5">
            <div _ngcontent-xvm-c52="" class="container mt-2">
              <p _ngcontent-xvm-c52="" style="font-weight: bold">
                DADOS DA PROPRIEDADE
              </p>
              <div
                _ngcontent-xvm-c52=""
                formgroupname="property"
                class="row ng-untouched ng-pristine ng-valid"
                style="background-color: white"
              >
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Nome da fazenda </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="name"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Endereço</label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="address"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-3">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">UF</label>
                    <div _ngcontent-xvm-c52="" class="form-group">
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
                <div _ngcontent-xvm-c52="" class="col-md-9 col-lg-9 col-sm-9">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Cidade</label>
                    <div _ngcontent-xvm-c52="" class="form-group">
                      <select v-model="idCidade"
                        _ngcontent-xvm-c52=""
                        formcontrolname="city_id"
                        class="custom-select ng-untouched ng-pristine ng-valid"
                      >
                        <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.letter">
                          {{ cidade.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12 mb-5"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Nº Insc. Estadual </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="state_registration"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
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
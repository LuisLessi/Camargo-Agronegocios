<template>
 <div _ngcontent-vlc-c53="" class="card mb-5">
                    <div _ngcontent-vlc-c53="" class="container mt-2">
                      <div
                        _ngcontent-vlc-c53=""
                        class="form-group"
                        style="background-color: white"
                      >
                        <p _ngcontent-vlc-c53="" style="font-weight: bold">
                          DADOS PESSOAIS
                        </p>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >CNPJ
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="00.000.000/0000-00"
                                formcontrolname="nif"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              /><app-validation-message
                                _ngcontent-vlc-c53=""
                                _nghost-vlc-c51=""
                                ><!----></app-validation-message
                              >
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Insc. Estadual </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="number"
                                maxlength="20"
                                formcontrolname="state_registration"
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
                            class="col-md-12 col-lg-12 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Razão social
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="name_persons"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              /><app-validation-message
                                _ngcontent-vlc-c53=""
                                _nghost-vlc-c51=""
                                ><!----></app-validation-message
                              >
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
                            class="col-md-7 col-lg-7 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Nome fantasia </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="nickname"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-5 col-lg-5 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Dt. Abertura</label
                              ><input
                                _ngcontent-vlc-c53=""
                                mask="d0/M0/0000"
                                formcontrolname="birthday"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              /><app-validation-message
                                _ngcontent-vlc-c53=""
                                _nghost-vlc-c51=""
                                ><!----></app-validation-message
                              >
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
                            class="col-md-12 col-lg-12 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >CEP
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="00.000-000"
                                formcontrolname="zip_code"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              /><app-validation-message
                                _ngcontent-vlc-c53=""
                                _nghost-vlc-c51=""
                                ><!----></app-validation-message
                              >
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-7 col-lg-7 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Endereço </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="address"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-5 col-lg-5 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Bairro </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="district"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-vlc-c53="" class="row"></div>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row mb-5"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-3 col-lg-3 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Número </label
                              ><input
                                _ngcontent-vlc-c53=""
                                formcontrolname="number"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              /><app-validation-message
                                _ngcontent-vlc-c53=""
                                _nghost-vlc-c51=""
                                ><!----></app-validation-message
                              >
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-3 col-lg-3 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >UF
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              >
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
                        </option></select><app-validation-message
                                  _ngcontent-vlc-c53=""
                                  _nghost-vlc-c51=""
                                  ><!----></app-validation-message
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Cidade
                                
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              >
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
                                <app-validation-message
                                  _ngcontent-vlc-c53=""
                                  _nghost-vlc-c51=""
                                  ><!----></app-validation-message
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
name: 'Dados_pessoaisPF',
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
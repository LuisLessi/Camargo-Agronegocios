<template>
    <form
                  _ngcontent-vlc-c53=""
                  novalidate=""
                  class="ng-untouched ng-pristine ng-invalid"
                >
                  <div
                    _ngcontent-vlc-c53=""
                    class="card mb-5"
                    style="background-color: white"
                  >
                    <div _ngcontent-vlc-c53="" class="container mt-2">
                      <div _ngcontent-vlc-c53="" class="form-group">
                        <p _ngcontent-vlc-c53="" style="font-weight: bold">
                          DADOS DO RESPONSÁVEL
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
                              <label _ngcontent-vlc-c53="">
                                Nome
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="name_responsible"
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
                            class="col-md-12 col-lg-12 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Email </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="email"
                                formcontrolname="email_responsible"
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
                            class="col-md-6 col-lg-6 col-sm-8"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >CPF
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="000.000.000-00"
                                formcontrolname="nif_responsible"
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
                              <label _ngcontent-vlc-c53="">CEP </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="00.000-000"
                                formcontrolname="zip_code_responsible"
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
                            class="col-md-7 col-lg-7 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Endereço </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="address_responsible"
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
                                formcontrolname="district_responsible"
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
                            class="col-md-3 col-lg-3 col-sm-2"
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
                        <option v-for="cidade in cidades" :key="cidade.id" :value="cidade.letter">
                          {{ cidade.title }}
                        </option></select
                      >
                                ><app-validation-message
                                  _ngcontent-vlc-c53=""
                                  _nghost-vlc-c51=""
                                  ><!----></app-validation-message
                                >
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-3 col-lg-3 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Estado civil </label>
                              <div _ngcontent-vlc-c53="" class="form-group">
                                <select
                                  _ngcontent-vlc-c53=""
                                  formcontrolname="civil_status_responsible"
                                  class="
                                    custom-select
                                    ng-untouched ng-pristine ng-valid
                                  "
                                >
                                  <option _ngcontent-vlc-c53="" value="1">
                                    Solteiro
                                  </option>
                                  <option _ngcontent-vlc-c53="" value="2">
                                    Casado
                                  </option>
                                  <option _ngcontent-vlc-c53="" value="3">
                                    Desquitado
                                  </option>
                                  <option _ngcontent-vlc-c53="" value="4">
                                    Divorciado
                                  </option>
                                  <option _ngcontent-vlc-c53="" value="5">
                                    Viuvo
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row mb-5"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-7 col-lg-7 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Profissão </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                formcontrolname="profession_responsible"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-5 col-lg-5 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Data de nascimento</label
                              ><input
                                _ngcontent-vlc-c53=""
                                mask="d0/M0/0000"
                                formcontrolname="birthday_responsible"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
<template>
  <div _ngcontent-xvm-c52="" class="card mb-5">
            <div _ngcontent-xvm-c52="" class="container mt-2">
              <p _ngcontent-xvm-c52="" style="font-weight: bold">
                DADOS PESSOAIS
              </p>
              <div
                _ngcontent-xvm-c52=""
                class="row"
                style="background-color: white"
              >
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >Nome<span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="name"
                      class="form-control ng-untouched ng-pristine ng-invalid"
                    /><app-validation-message
                      _ngcontent-xvm-c52=""
                      _nghost-xvm-c51=""
                      ><!----></app-validation-message
                    >
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >CPF
                      <span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      mask="000.000.000-00"
                      formcontrolname="nif"
                      class="form-control ng-untouched ng-pristine ng-invalid"
                    /><app-validation-message
                      _ngcontent-xvm-c52=""
                      _nghost-xvm-c51=""
                      ><!----></app-validation-message
                    >
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">RG </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      mask="0.000.000"
                      formcontrolname="state_registration"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-8 col-lg-8 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Profissão </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="profession"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-4 col-lg-4 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Estado civil </label>
                    <div _ngcontent-xvm-c52="" class="form-group">
                      <select
                        _ngcontent-xvm-c52=""
                        formcontrolname="civil_status"
                        class="custom-select ng-untouched ng-pristine ng-valid"
                      >
                        <option _ngcontent-xvm-c52="" value="1">
                          Solteiro
                        </option>
                        <option _ngcontent-xvm-c52="" value="2">Casado</option>
                        <option _ngcontent-xvm-c52="" value="3">
                          Desquitado
                        </option>
                        <option _ngcontent-xvm-c52="" value="4">
                          Divorciado
                        </option>
                        <option _ngcontent-xvm-c52="" value="5">Viuvo</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Data de nascimento</label
                    ><input
                      _ngcontent-xvm-c52=""
                      mask="d0/M0/0000"
                      formcontrolname="birthday"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >CEP
                      <span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      mask="00.000-000"
                      formcontrolname="zip_code"
                      class="form-control ng-untouched ng-pristine ng-invalid"
                    /><app-validation-message
                      _ngcontent-xvm-c52=""
                      _nghost-xvm-c51=""
                      ><!----></app-validation-message
                    >
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-7 col-lg-7 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Endereço </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="address"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-5 col-lg-5 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Bairro </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="district"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Número </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      maxlength="4"
                      formcontrolname="number"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >UF<span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    >
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
                        </option></select><app-validation-message
                        _ngcontent-xvm-c52=""
                        _nghost-xvm-c51=""
                        ><!----></app-validation-message
                      >
                    </div>
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >Cidade
                      <span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    >
                    <div _ngcontent-xvm-c52="" class="form-group">
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
                      ><app-validation-message
                        _ngcontent-xvm-c52=""
                        _nghost-xvm-c51=""
                        ><!----></app-validation-message
                      >
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Complemento </label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="complement"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group mb-5">
                    <label _ngcontent-xvm-c52=""
                      >Celular
                      <span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      mask="(00) 00000-0000"
                      formcontrolname="cellphone"
                      class="form-control ng-untouched ng-pristine ng-invalid"
                    /><app-validation-message
                      _ngcontent-xvm-c52=""
                      _nghost-xvm-c51=""
                      ><!----></app-validation-message
                    >
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
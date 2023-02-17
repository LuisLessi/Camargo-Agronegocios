<template>
  <div class="row">
    <div class="title">
      <h1>Formulário para cadastro</h1>
      <span
        >Para realizar seu cadastro junto a Camargo Agronegócios, preencha todo
        formulário abaixo.</span
      >

      <input
        type="file"
        ref="file"
        id="file"
        name="file"
        class="file"
        @change="fileLoad"
        accept="*"
      />

      <div v-if="tipoForm == 'PF'">
        <span
          >Após o preenchimento, favor anexar os documentos para o andamento do
          cadastro: cópia de RG e CPF, comprovante de residência e declaração do
          imposto de renda. Ou envie para o e-mail:
          <a href="mailto:atendimento@camargoagronegocios.com.br"
            >atendimento@camargoagronegocios.com.br</a
          ></span
        >
      </div>
      <div v-else>
        <span
          >Após o preenchimento, favor anexar os documentos para o andamento do
          cadastro: cópia de RG e CPF do responsável, contrato social e
          faturamento da empresa devidamente assinado pelo contador. Ou envie
          para o e-mail:
          <a href="mailto:atendimento@camargoagronegocios.com.br"
            >atendimento@camargoagronegocios.com.br</a
          ></span
        >
      </div>
    </div>
    <div class="input-block" style="margin-left: 0%">
      <label
        >Pessoa Física &nbsp<input
          v-model="tipoForm"
          name="tipoConta"
          id="options"
          type="radio"
          value="PF"
      /></label>
      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <label
        >Pessoa juridica &nbsp
        <input
          v-model="tipoForm"
          name="tipoConta"
          id="options"
          type="radio"
          value="PJ"
      /></label>
    </div>
    <div></div>
    <div v-if="tipoForm == 'PF'">
      <div _ngcontent-xvm-c52="" class="row">
        <div _ngcontent-xvm-c52="" class="col-sm-12 col-md-6 col-lg-6">
          <Dados_PessoaisPF/>
          
          <Dados_PropriedadePF/>

        </div>
        <div _ngcontent-xvm-c52="" class="col-sm-12 col-md-6 col-lg-6">
          <div _ngcontent-xvm-c52="" class="card">
            <div _ngcontent-xvm-c52="" class="container mt-2">
              <p _ngcontent-xvm-c52="" style="font-weight: bold">
                DADOS BANCARIOS
              </p>
              <div
                _ngcontent-xvm-c52=""
                formgroupname="account"
                class="row ng-untouched ng-pristine ng-valid"
                style="background-color: white"
              >
                <div _ngcontent-xvm-c52="" class="col-md-5 col-lg-5 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Banco</label>
                    <div _ngcontent-xvm-c52="" class="form-group">
                        <select
                        _ngcontent-xvm-c52=""
                        formcontrolname="city_id"
                        class="
                          custom-select
                          ng-untouched ng-pristine ng-invalid
                        "
                      >
                        <option _ngcontent-vlc-c53 v-for="banco in bancos" :key="banco.id">
                          {{ banco.name }}
                        </option></select
                      >
                    </div>
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Conta</label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="account"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-4 col-lg-4 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Agência</label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="text"
                      formcontrolname="agency"
                      class="form-control ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52="">Tipo de conta</label>
                    <div _ngcontent-xvm-c52="" class="form-group mb-5">
                      <select
                        _ngcontent-xvm-c52=""
                        formcontrolname="type"
                        class="custom-select ng-untouched ng-pristine ng-valid"
                      >
                        <option _ngcontent-xvm-c52="" value="1">
                          Corrente
                        </option>
                        <option _ngcontent-xvm-c52="" value="2">
                          Poupança
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div _ngcontent-xvm-c52="" class="card mt-5 mb-5">
            <div _ngcontent-xvm-c52="" class="container mt-2">
              <p _ngcontent-xvm-c52="" style="font-weight: bold">DOCUMENTOS</p>
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
                    <label _ngcontent-xvm-c52="">CPF/RG</label>
                    <div
                      _ngcontent-xvm-c52=""
                      class="row"
                      style="background-color: white"
                    >
                      <!----><!---->
                      <div
                        _ngcontent-xvm-c52=""
                        data-toggle="dropzone"
                        data-dropzone-url="http://"
                        class="
                          col-md-8 col-lg-8 col-sm-12
                          dropzone dropzone-single
                          dz-clickable
                        "
                      >
                        <div
                          _ngcontent-xvm-c52=""
                          class="dz-preview dz-preview-single"
                        ></div>
                        <div class="dz-default dz-message" @click="fileLoad">
                          <span>Selecione o arquivo.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >Declaração de imposto de renda</label
                    >
                    <div
                      _ngcontent-xvm-c52=""
                      class="row"
                      style="background-color: white"
                    >
                      <!----><!---->
                      <div
                        _ngcontent-xvm-c52=""
                        data-toggle="dropzone"
                        data-dropzone-url="http://"
                        class="
                          col-md-8 col-lg-8 col-sm-12
                          dropzone dropzone-single
                          class-declaracao
                          dz-clickable
                        "
                      >
                        <div
                          _ngcontent-xvm-c52=""
                          class="dz-preview dz-preview-single declaracao"
                        ></div>
                        <div class="dz-default dz-message" @click="fileLoad">
                          <span>Selecione o arquivo.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12"
                >
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >Comprovante de residência</label
                    >
                    <div
                      _ngcontent-xvm-c52=""
                      class="row mb-5"
                      style="background-color: white"
                    >
                      <!----><!---->
                      <div
                        _ngcontent-xvm-c52=""
                        data-toggle="dropzone"
                        data-dropzone-url="http://"
                        class="
                          col-md-8 col-lg-8 col-sm-12
                          dropzone dropzone-single
                          class-residencia
                          dz-clickable
                        "
                      >
                        <div
                          _ngcontent-xvm-c52=""
                          class="dz-preview dz-preview-single residencia"
                        ></div>
                        <div class="dz-default dz-message" @click="fileLoad">
                          <span>Selecione o arquivo.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-xvm-c52="" class="col-sm-12 col-md-12 col-lg-12">
          <div _ngcontent-xvm-c52="" class="card mt-3">
            <div _ngcontent-xvm-c52="" class="container mt-2">
              <p _ngcontent-xvm-c52="" style="font-weight: bold">
                CADASTRO USUÁRIO
              </p>
              <div
                _ngcontent-xvm-c52=""
                class="row"
                style="background-color: white"
              >
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-lg-12 col-sm-12 mb-3"
                >
                  <div
                    _ngcontent-xvm-c52=""
                    class="custom-control custom-checkbox"
                  >
                    <input
                      _ngcontent-xvm-c52=""
                      type="checkbox"
                      id="customCheck3"
                      class="custom-control-input"
                    /><label
                      _ngcontent-xvm-c52=""
                      for="customCheck3"
                      class="custom-control-label"
                      style="font-size: 15px"
                    >
                      Desejo criar meu login para o
                      <b _ngcontent-xvm-c52="">PREGÃO ONLINE</b>.</label
                    >
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >Telefone<span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      mask="(00) 00000-0000"
                      type="text"
                      formcontrolname="phone"
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
                      >Email
                      <span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="email"
                      formcontrolname="email"
                      class="form-control ng-untouched ng-pristine ng-invalid"
                    /><app-validation-message
                      _ngcontent-xvm-c52=""
                      _nghost-xvm-c51=""
                      ><!----></app-validation-message
                    >
                  </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                  <div _ngcontent-xvm-c52="" class="form-group">
                    <label _ngcontent-xvm-c52=""
                      >Senha
                      <span _ngcontent-xvm-c52="" class="text-danger"
                        >*</span
                      ></label
                    ><input
                      _ngcontent-xvm-c52=""
                      type="password"
                      autocomplete="false"
                      formcontrolname="password"
                      class="form-control ng-untouched ng-pristine ng-invalid"
                    /><small _ngcontent-xvm-c52="">*Mínimo 8 caracteres.</small
                    ><app-validation-message
                      _ngcontent-xvm-c52=""
                      _nghost-xvm-c51=""
                      ><!----></app-validation-message
                    >
                  </div>
                </div>
                <div
                  _ngcontent-xvm-c52=""
                  class="col-md-12 col-sm-12 col-lg-12 mb-4 pb-4"
                >
                  <div
                    _ngcontent-xvm-c52=""
                    class="custom-control custom-checkbox"
                  >
                    <input
                      _ngcontent-xvm-c52=""
                      type="checkbox"
                      id="customCheck1"
                      class="custom-control-input"
                      v-model="checked"
                    /><label
                      _ngcontent-xvm-c52=""
                      for="customCheck1"
                      class="custom-control-label"
                      style="font-size: 15px"
                      >Estou de acordo com os
                      <a
                        _ngcontent-xvm-c52=""
                        href="https://bid365.app/storage/termos-condicoes.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="text-decoration: underline; font-weight: bold"
                        >Termos de Uso</a
                      >
                      apresentados acima e quero prosseguir com meu
                      cadastro.</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            _ngcontent-vlc-c53=""
            class="d-flex mb-5"
            style="justify-content: center; align-items: center"
          >
            <div v-if="checked">
              <button
                _ngcontent-prl-c56=""
                type="button"
                style="background-color: var(--color-background-button)"
                class="
                  btn-icon btn-4 btn btn-secondary
                  text-dark
                  mt-4
                  button
                  ng-star-inserted
                "
              >
                <span _ngcontent-prl-c56="" class="btn-inner--text"
                  >ENVIAR CADASTRO</span
                >
              </button>
            </div>
            <div v-else>
              <button
                _ngcontent-vlc-c53=""
                type="button"
                class="
                  btn-icon btn-4 btn btn-secondary
                  text-dark
                  mt-4
                  button
                  ng-star-inserted
                "
                disabled=""
              >
                <span _ngcontent-vlc-c53="" class="btn-inner--text"
                  >ENVIAR CADASTRO</span
                ></button
              ><!----><!---->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div _ngcontent-vlc-c53="" class="body">
        <div
          _ngcontent-vlc-c53=""
          class="d-flex mt-5"
          style="justify-content: center; align-items: center"
        >
          <div _ngcontent-vlc-c53="" class="container">
            <div _ngcontent-vlc-c53="" class="row">
              <div _ngcontent-vlc-c53="" class="col-md-6 col-lg-6 col-sm-12">
                <form
                  _ngcontent-vlc-c53=""
                  novalidate=""
                  class="ng-untouched ng-pristine ng-invalid"
                >
                  <Dados_PessoaisPJ/>
                </form>
                <form
                  _ngcontent-vlc-c53=""
                  novalidate=""
                  class="ng-untouched ng-pristine ng-invalid"
                >
                 <Dados_PropriedadePJ/>
                </form>
              <Dados_ResponsavelPJ/>
              </div>
              <div _ngcontent-vlc-c53="" class="col-md-6 col-lg-6 col-sm-12">
                <form
                  _ngcontent-vlc-c53=""
                  novalidate=""
                  class="ng-untouched ng-pristine ng-invalid"
                >
                  <div _ngcontent-vlc-c53="" class="card mb-5">
                    <div
                      _ngcontent-vlc-c53=""
                      class="container mt-2"
                      style="background-color: white"
                    >
                      <p _ngcontent-vlc-c53="" style="font-weight: bold">
                        DADOS BANCARIOS
                      </p>
                      <div _ngcontent-vlc-c53="" class="form-group">
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-7 col-lg-7 col-sm-12"
                            style="background-color: white"
                          >
                            <div
                              _ngcontent-vlc-c53=""
                              class="form-group"
                              style="background-color: white"
                            >
                              <label _ngcontent-vlc-c53="">Banco</label>
                              <div _ngcontent-vlc-c53="" class="form-group">
                                <select
                        _ngcontent-xvm-c52=""
                        formcontrolname="city_id"
                        class="
                          custom-select
                          ng-untouched ng-pristine ng-invalid
                        "
                      >
                        <option _ngcontent-vlc-c53 v-for="banco in bancos" :key="banco.id">
                          {{ banco.name }}
                        </option></select
                      >
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-5 col-lg-5 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Conta </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="number"
                                formcontrolname="account"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div _ngcontent-vlc-c53="" class="container">
                            <div
                              _ngcontent-vlc-c53=""
                              class="row"
                              style="background-color: white"
                            >
                              <div
                                _ngcontent-vlc-c53=""
                                class="col-md-3 col-lg-3 col-sm-6"
                              >
                                <div _ngcontent-vlc-c53="" class="form-group">
                                  <label _ngcontent-vlc-c53="">Agência</label
                                  ><input
                                    _ngcontent-vlc-c53=""
                                    type="number"
                                    formcontrolname="agency"
                                    class="
                                      form-control
                                      ng-untouched ng-pristine ng-valid
                                    "
                                  />
                                </div>
                              </div>
                              <div
                                _ngcontent-vlc-c53=""
                                class="col-md-4 col-lg-4 col-sm-6"
                              >
                                <div _ngcontent-vlc-c53="" class="form-group">
                                  <label _ngcontent-vlc-c53=""
                                    >Tipo de conta
                                  </label>
                                  <div
                                    _ngcontent-vlc-c53=""
                                    class="form-group mb-5"
                                  >
                                    <select
                                      _ngcontent-vlc-c53=""
                                      formcontrolname="account_type"
                                      class="
                                        custom-select
                                        ng-untouched ng-pristine ng-valid
                                      "
                                    >
                                      <option _ngcontent-vlc-c53="" value="1">
                                        Corrente
                                      </option>
                                      <option _ngcontent-vlc-c53="" value="2">
                                        Poupança
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form
                  _ngcontent-vlc-c53=""
                  novalidate=""
                  class="ng-untouched ng-pristine ng-invalid"
                >
                  <div _ngcontent-vlc-c53="" class="card mb-5">
                    <div _ngcontent-vlc-c53="" class="container mt-2">
                      <div _ngcontent-vlc-c53="" class="form-group">
                        <p _ngcontent-vlc-c53="" style="font-weight: bold">
                          REFERÊNCIA 1
                        </p>
                        <div _ngcontent-vlc-c53="" class="form-group">
                          <label _ngcontent-vlc-c53="">Nome </label
                          ><input
                            _ngcontent-vlc-c53=""
                            type="text"
                            formcontrolname="name_contact"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-invalid
                            "
                          />
                        </div>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Telefone 01 </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="(00) 00000-0000 || (00) 0000-0000"
                                formcontrolname="telephone_one"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Telefone 02 </label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="(00) 00000-0000 || (00) 0000-0000"
                                formcontrolname="telephone_two"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                        </div>
                        <p _ngcontent-vlc-c53="" style="font-weight: bold">
                          REFERÊNCIA 2
                        </p>
                        <div _ngcontent-vlc-c53="" class="form-group">
                          <label _ngcontent-vlc-c53="">Nome </label
                          ><input
                            _ngcontent-vlc-c53=""
                            type="text"
                            formcontrolname="name_contact2"
                            class="
                              form-control
                              ng-untouched ng-pristine ng-valid
                            "
                          />
                        </div>
                        <div
                          _ngcontent-vlc-c53=""
                          class="row mb-5"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Telefone 01 </label
                              ><input
                                _ngcontent-vlc-c53=""
                                formcontrolname="telephone_one2"
                                type="text"
                                mask="(00) 00000-0000 || (00) 0000-0000"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-valid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-6 col-lg-6 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53="">Telefone 02 </label
                              ><input
                                _ngcontent-vlc-c53=""
                                formcontrolname="telephone_two2"
                                type="text"
                                mask="(00) 00000-0000 || (00) 0000-0000"
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
                <div _ngcontent-vlc-c53="" class="card">
                  <div _ngcontent-vlc-c53="" class="container mt-2">
                    <p _ngcontent-vlc-c53="" style="font-weight: bold">
                      DOCUMENTOS
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
                        <label _ngcontent-vlc-c53=""
                          >CPF/RG administrador</label
                        >
                        <div _ngcontent-vlc-c53="" class="form-group">
                          <div
                            _ngcontent-vlc-c53=""
                            class="row"
                            style="background-color: white"
                          >
                            <!----><!---->
                            <div
                              _ngcontent-vlc-c53=""
                              data-toggle="dropzone"
                              data-dropzone-url="http://"
                              class="
                                col-md-8 col-lg-8 col-sm-12
                                dropzone dropzone-single
                                class-rgadm
                                dz-clickable
                              "
                            >
                              <div
                                _ngcontent-vlc-c53=""
                                class="dz-preview dz-preview-single rgadm ml-3"
                              ></div>
                              <div
                                class="dz-default dz-message"
                                @click="fileLoad"
                              >
                                <span>Selecione o arquivo.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        _ngcontent-vlc-c53=""
                        class="col-md-12 col-lg-12 col-sm-12"
                      >
                        <div _ngcontent-vlc-c53="" class="form-group">
                          <label _ngcontent-vlc-c53="" class="mt-2"
                            >Contrato social</label
                          >
                          <div
                            _ngcontent-vlc-c53=""
                            class="row"
                            style="background-color: white"
                          >
                            <!----><!---->
                            <div
                              _ngcontent-vlc-c53=""
                              data-toggle="dropzone"
                              data-dropzone-url="http://"
                              class="
                                col-md-8 col-lg-8 col-sm-12
                                dropzone dropzone-single
                                class-contrato
                                dz-clickable
                              "
                            >
                              <div
                                _ngcontent-vlc-c53=""
                                class="
                                  dz-preview dz-preview-single
                                  contrato
                                  ml-3
                                "
                              ></div>
                              <div
                                class="dz-default dz-message"
                                @click="fileLoad"
                              >
                                <span>Selecione o arquivo.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        _ngcontent-vlc-c53=""
                        class="col-md-12 col-lg-12 col-sm-12"
                      >
                        <div _ngcontent-vlc-c53="" class="form-group">
                          <label _ngcontent-vlc-c53="" class="mt-2"
                            >Faturamento da empresa</label
                          >
                          <div
                            _ngcontent-vlc-c53=""
                            class="row mb-5"
                            style="background-color: white"
                          >
                            <!----><!---->
                            <div
                              _ngcontent-vlc-c53=""
                              data-toggle="dropzone"
                              data-dropzone-url="http://"
                              class="
                                col-md-8 col-lg-8 col-sm-12
                                dropzone dropzone-single
                                class-faturamento
                                dz-clickable
                              "
                            >
                              <div
                                _ngcontent-vlc-c53=""
                                class="
                                  dz-preview dz-preview-single
                                  faturamento
                                  ml-3
                                "
                              ></div>
                              <div
                                class="dz-default dz-message"
                                @click="fileLoad"
                              >
                                <span @click="fileLoad"
                                  >Selecione o arquivo.</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div _ngcontent-vlc-c53="" class="container ml-3 mr-3">
                <div
                  _ngcontent-vlc-c53=""
                  class="row"
                  style="background-color: white"
                >
                  <form
                    _ngcontent-vlc-c53=""
                    novalidate=""
                    class="ng-untouched ng-pristine ng-invalid"
                  >
                    <div _ngcontent-vlc-c53="" class="card">
                      <p
                        _ngcontent-vlc-c53=""
                        class="container mt-2"
                        style="font-weight: bold"
                      >
                        CADASTRO USUÁRIO
                      </p>
                      <div _ngcontent-vlc-c53="" class="container d-flex mt-2">
                        <div
                          _ngcontent-vlc-c53=""
                          class="row"
                          style="background-color: white"
                        >
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-12 col-lg-12 col-sm-12 mb-4"
                          >
                            <div
                              _ngcontent-vlc-c53=""
                              class="custom-control custom-checkbox"
                            >
                              <input
                                _ngcontent-vlc-c53=""
                                type="checkbox"
                                id="customCheck3"
                                class="custom-control-input"
                              /><label
                                _ngcontent-vlc-c53=""
                                for="customCheck3"
                                class="custom-control-label"
                                style="font-size: 15px"
                              >
                                Desejo criar meu login para o
                                <b _ngcontent-vlc-c53="">PREGÃO ONLINE</b
                                >.</label
                              >
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-4 col-lg-4 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Telefone
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="text"
                                mask="(00) 0000-0000||(00) 0 0000-0000"
                                formcontrolname="phone"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-4 col-lg-4 col-sm-6"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Email
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="email"
                                formcontrolname="email_persons"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-4 col-lg-4 col-sm-12"
                          >
                            <div _ngcontent-vlc-c53="" class="form-group">
                              <label _ngcontent-vlc-c53=""
                                >Senha
                                <span _ngcontent-vlc-c53="" class="text-danger"
                                  >*</span
                                ></label
                              ><input
                                _ngcontent-vlc-c53=""
                                type="password"
                                autocomplete="false"
                                formcontrolname="password"
                                class="
                                  form-control
                                  ng-untouched ng-pristine ng-invalid
                                "
                              /><small _ngcontent-vlc-c53=""
                                >*Mínimo 8 caracteres.</small
                              >
                            </div>
                          </div>
                          <div
                            _ngcontent-vlc-c53=""
                            class="col-md-12 col-sm-12 col-lg-12 mb-2"
                          >
                            <div
                              _ngcontent-vlc-c53=""
                              class="custom-control custom-checkbox"
                            >
                              <input
                                _ngcontent-vlc-c53=""
                                type="checkbox"
                                id="customCheck1"
                                class="custom-control-input"
                                v-model="checked"
                              /><label
                                _ngcontent-vlc-c53=""
                                for="customCheck1"
                                class="custom-control-label"
                                style="font-size: 15px"
                                >Estou de acordo com os
                                <a
                                  _ngcontent-vlc-c53=""
                                  href="https://bid365.app/storage/termos-condicoes.pdf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style="
                                    text-decoration: underline;
                                    font-weight: bold;"
                                  >Termos de Uso</a
                                >
                                apresentados acima e quero prosseguir com meu
                                cadastro.</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  _ngcontent-vlc-c53=""
                  class="d-flex mb-5"
                  style="justify-content: center; align-items: center"
                >
                  <div v-if="checked">
                    <button
                      _ngcontent-prl-c56=""
                      type="button"
                      style="background-color: var(--color-background-button)"
                      class="
                        btn-icon btn-4 btn btn-secondary
                        text-dark
                        mt-4
                        button
                        ng-star-inserted
                      "
                    >
                      <span _ngcontent-prl-c56="" class="btn-inner--text"
                        >ENVIAR CADASTRO</span
                      >
                    </button>
                  </div>
                  <div v-else>
                    <button
                      _ngcontent-vlc-c53=""
                      type="button"
                      class="
                        btn-icon btn-4 btn btn-secondary
                        text-dark
                        mt-4
                        button
                        ng-star-inserted
                      "
                      disabled=""
                    >
                      <span _ngcontent-vlc-c53="" class="btn-inner--text"
                        >ENVIAR CADASTRO</span
                      ></button
                    ><!----><!---->
                  </div>
                </div>
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
import Dados_PessoaisPF from "../components/DadosPessoaisPF.vue"
import Dados_PessoaisPJ from "../components/DadosPessoaisPJ.vue"
import Dados_PropriedadePF from "../components/DadosPropriedadePF.vue"
import Dados_PropriedadePJ from "../components/DadosPropriedadePJ.vue"
import Dados_ResponsavelPJ from "../components/DadosPropriedadePJ.vue"


export default {

  components: {
    Dados_PessoaisPF,
    Dados_PessoaisPJ,
    Dados_PropriedadePF,
    Dados_PropriedadePJ,
    Dados_ResponsavelPJ
  },
  data() {
    return {
      tipoForm: "PF",
      cidades: [],
      allCities: [],
      estados: [],
      idEstado: "",
      idCidade: "",
      bancos: [],
      checked: false,
    };
  },

  async mounted() {
    let cidades = await http.get("/api/v1/cities");
    console.log(cidades.data.data);
    this.cidades = cidades.data.data;

    let estados = await http.get("/api/v1/states");
    console.log(estados.data.data);
    this.estados = estados.data.data;

    let bancos = await http.get("/api/v1/banks");
    this.bancos = bancos.data.data;

    let allCities = await http.get("/api/v1/cities");
    this.allCities = allCities.data.data;
},

  methods: {
    fileLoad() {
      this.$refs.file.click();
    },

    async cidadesFiltradas() {
        this.cidades = this.allCities.filter(cidade => {
    return cidade.letter === this.idEstado;
  });
}
    },
  };
</script>

<style scoped>
.row {
  margin-right: 0;
  background-color: var(--color-background-html);
}

h1 {
  font-family: "Lato Regular";
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 5%;
  margin-top: 5%;
}

h2 {
  font-family: "Lato Regular";
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 5%;
  margin-top: 5%;
}

.title span {
  font-family: "Lato Light";
  font-size: 25px;
  margin-left: 5%;
}

a:-webkit-any-link {
  text-decoration: none;
}

.dados_pessoais {
  margin-left: 1%;
}

.bancario {
  margin-left: 90%;
}
.file {
  display: none;
}
.dz-message {
  padding: 2rem 1rem;
  background-color: #fff;
  border: 1px dashed #dee2e6;
  border-radius: 0.375rem;
  text-align: center;
  color: #8898aa;
  transition: all 0.15s ease;
  order: -1;
  cursor: pointer;
  z-index: 999;
}
@media only screen and (max-width: 1024px) {
  a:any-link {
    display: inline-block;
    font-size: 20px;
  }
}
</style>
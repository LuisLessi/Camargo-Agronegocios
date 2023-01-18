<template>
    <div class='row '>
        <div class="title">
            <h1>Formulário para cadastro</h1>
            <span>Para realizar seu cadastro junto a Camargo Agronegócios, preencha todo formulário abaixo.</span>

            <div v-if="tipoForm == 'PF'">
                <span>Após o preenchimento, favor anexar os documentos para o andamento do cadastro: cópia de RG e CPF,
                    comprovante de &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspresidência e declaração do
                    imposto de renda. Ou envie para o e-mail:
                    <a
                        href="mailto:atendimento@camargoagronegocios.com.br">atendimento@camargoagronegocios.com.br</a></span>
            </div>
            <div v-else>
                <span>Após o preenchimento, favor anexar os documentos para o andamento do cadastro: cópia de RG e CPF
                    do responsável, &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcontrato social e faturamento
                    da empresa devidamente assinado pelo contador.
                    Ou envie para o e-mail: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a
                        href="mailto:atendimento@camargoagronegocios.com.br">atendimento@camargoagronegocios.com.br</a></span>
            </div>

        </div>
        <div class="input-block" style="margin-left: 0%;">
            <label>Pessoa Física &nbsp<input v-model="tipoForm" name="tipoConta" id="options" type="radio"
                    value="PF" /></label>
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <label>Pessoa juridica &nbsp
                <input v-model="tipoForm" name="tipoConta" id="options" type="radio" value="PJ" /></label>
        </div>
        <div>

        </div>
        <div v-if="tipoForm == 'PF'">

            <div _ngcontent-xvm-c52="" class="row">
                <div _ngcontent-xvm-c52="" class="col-sm-12 col-md-6 col-lg-6">
                    <div _ngcontent-xvm-c52="" class="card">
                        <div _ngcontent-xvm-c52="" class="container mt-2">
                            <p _ngcontent-xvm-c52="" style="font-weight: bold;">DADOS PESSOAIS</p>
                            <div _ngcontent-xvm-c52="" class="row">
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Nome<span
                                                _ngcontent-xvm-c52="" class="text-danger">*</span></label><input
                                            _ngcontent-xvm-c52="" type="text" formcontrolname="name"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">CPF <span
                                                _ngcontent-xvm-c52="" class="text-danger">*</span></label><input
                                            _ngcontent-xvm-c52="" type="text" mask="000.000.000-00"
                                            formcontrolname="nif"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">RG
                                        </label><input _ngcontent-xvm-c52="" type="text" mask="0.000.000"
                                            formcontrolname="state_registration"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-8 col-lg-8 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Profissão
                                        </label><input _ngcontent-xvm-c52="" type="text" formcontrolname="profession"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-4 col-lg-4 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Estado
                                            civil </label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="civil_status"
                                                class="custom-select ng-untouched ng-pristine ng-valid">
                                                <option _ngcontent-xvm-c52="" value="1">Solteiro</option>
                                                <option _ngcontent-xvm-c52="" value="2">Casado</option>
                                                <option _ngcontent-xvm-c52="" value="3">Desquitado</option>
                                                <option _ngcontent-xvm-c52="" value="4">Divorciado</option>
                                                <option _ngcontent-xvm-c52="" value="5">Viuvo</option>
                                            </select></div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Data de
                                            nascimento</label><input _ngcontent-xvm-c52="" mask="d0/M0/0000"
                                            formcontrolname="birthday"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">CEP <span
                                                _ngcontent-xvm-c52="" class="text-danger">*</span></label><input
                                            _ngcontent-xvm-c52="" type="text" mask="00.000-000"
                                            formcontrolname="zip_code"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-7 col-lg-7 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Endereço
                                        </label><input _ngcontent-xvm-c52="" type="text" formcontrolname="address"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-5 col-lg-5 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Bairro
                                        </label><input _ngcontent-xvm-c52="" type="text" formcontrolname="district"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Número
                                        </label><input _ngcontent-xvm-c52="" type="text" maxlength="4"
                                            formcontrolname="number"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">UF<span
                                                _ngcontent-xvm-c52="" class="text-danger">*</span></label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="estado"
                                                class="custom-select ng-untouched ng-pristine ng-invalid">
                                                <option _ngcontent-xvm-c52="" value="1" class="ng-star-inserted">AC
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="2" class="ng-star-inserted">AL
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="4" class="ng-star-inserted">AP
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="3" class="ng-star-inserted">AM
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="5" class="ng-star-inserted">BA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="6" class="ng-star-inserted">CE
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="7" class="ng-star-inserted">DF
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="8" class="ng-star-inserted">ES
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="9" class="ng-star-inserted">GO
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="10" class="ng-star-inserted">MA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="13" class="ng-star-inserted">MT
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="12" class="ng-star-inserted">MS
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="11" class="ng-star-inserted">MG
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="14" class="ng-star-inserted">PA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="15" class="ng-star-inserted">PB
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="18" class="ng-star-inserted">PR
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="16" class="ng-star-inserted">PE
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="17" class="ng-star-inserted">PI
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="19" class="ng-star-inserted">RJ
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="20" class="ng-star-inserted">RN
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="23" class="ng-star-inserted">RS
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="21" class="ng-star-inserted">RO
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="22" class="ng-star-inserted">RR
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="24" class="ng-star-inserted">SC
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="26" class="ng-star-inserted">SP
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="25" class="ng-star-inserted">SE
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="27" class="ng-star-inserted">TO
                                                </option><!---->
                                            </select><app-validation-message _ngcontent-xvm-c52=""
                                                _nghost-xvm-c51=""><!----></app-validation-message></div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Cidade
                                            <span _ngcontent-xvm-c52="" class="text-danger">*</span></label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="city_id"
                                                class="custom-select ng-untouched ng-pristine ng-invalid"><!----></select><app-validation-message
                                                _ngcontent-xvm-c52=""
                                                _nghost-xvm-c51=""><!----></app-validation-message></div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Complemento </label><input _ngcontent-xvm-c52=""
                                            type="text" formcontrolname="complement"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Celular
                                            <span _ngcontent-xvm-c52="" class="text-danger">*</span></label><input
                                            _ngcontent-xvm-c52="" type="text" mask="(00) 00000-0000"
                                            formcontrolname="cellphone"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-xvm-c52="" class="card mt-3">
                        <div _ngcontent-xvm-c52="" class="container mt-2">
                            <p _ngcontent-xvm-c52="" style="font-weight: bold;">DADOS DA PROPRIEDADE</p>
                            <div _ngcontent-xvm-c52="" formgroupname="property"
                                class="row ng-untouched ng-pristine ng-valid">
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Nome da
                                            fazenda </label><input _ngcontent-xvm-c52="" type="text"
                                            formcontrolname="name"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Endereço</label><input _ngcontent-xvm-c52=""
                                            type="text" formcontrolname="address"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-3">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">UF</label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="estado_properties"
                                                class="custom-select ng-untouched ng-pristine ng-valid">
                                                <option _ngcontent-xvm-c52="" value="1" class="ng-star-inserted">AC
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="2" class="ng-star-inserted">AL
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="4" class="ng-star-inserted">AP
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="3" class="ng-star-inserted">AM
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="5" class="ng-star-inserted">BA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="6" class="ng-star-inserted">CE
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="7" class="ng-star-inserted">DF
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="8" class="ng-star-inserted">ES
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="9" class="ng-star-inserted">GO
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="10" class="ng-star-inserted">MA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="13" class="ng-star-inserted">MT
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="12" class="ng-star-inserted">MS
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="11" class="ng-star-inserted">MG
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="14" class="ng-star-inserted">PA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="15" class="ng-star-inserted">PB
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="18" class="ng-star-inserted">PR
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="16" class="ng-star-inserted">PE
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="17" class="ng-star-inserted">PI
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="19" class="ng-star-inserted">RJ
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="20" class="ng-star-inserted">RN
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="23" class="ng-star-inserted">RS
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="21" class="ng-star-inserted">RO
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="22" class="ng-star-inserted">RR
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="24" class="ng-star-inserted">SC
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="26" class="ng-star-inserted">SP
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="25" class="ng-star-inserted">SE
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="27" class="ng-star-inserted">TO
                                                </option><!---->
                                            </select></div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-9 col-lg-9 col-sm-9">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Cidade</label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="city_id"
                                                class="custom-select ng-untouched ng-pristine ng-valid"><!----></select>
                                        </div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Nº Insc.
                                            Estadual </label><input _ngcontent-xvm-c52="" type="text"
                                            formcontrolname="state_registration"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div _ngcontent-xvm-c52="" class="col-sm-12 col-md-6 col-lg-6">
                    <div _ngcontent-xvm-c52="" class="card">
                        <div _ngcontent-xvm-c52="" class="container mt-2">
                            <p _ngcontent-xvm-c52="" style="font-weight: bold;">DADOS BANCARIOS</p>
                            <div _ngcontent-xvm-c52="" formgroupname="account"
                                class="row ng-untouched ng-pristine ng-valid">
                                <div _ngcontent-xvm-c52="" class="col-md-5 col-lg-5 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Banco</label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="bank_id"
                                                class="custom-select ng-untouched ng-pristine ng-valid">
                                                <option _ngcontent-xvm-c52="" value="1" class="ng-star-inserted"> Banco
                                                    do Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="2" class="ng-star-inserted"> Banco
                                                    da Amazônia</option>
                                                <option _ngcontent-xvm-c52="" value="3" class="ng-star-inserted"> Banco
                                                    do Nordeste</option>
                                                <option _ngcontent-xvm-c52="" value="4" class="ng-star-inserted">
                                                    Banestes</option>
                                                <option _ngcontent-xvm-c52="" value="5" class="ng-star-inserted"> Banco
                                                    Alfa</option>
                                                <option _ngcontent-xvm-c52="" value="6" class="ng-star-inserted"> Besc
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="7" class="ng-star-inserted"> Banerj
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="8" class="ng-star-inserted"> Banco
                                                    Beg</option>
                                                <option _ngcontent-xvm-c52="" value="9" class="ng-star-inserted"> Banco
                                                    Santander Banespa</option>
                                                <option _ngcontent-xvm-c52="" value="10" class="ng-star-inserted"> Banco
                                                    Bem</option>
                                                <option _ngcontent-xvm-c52="" value="11" class="ng-star-inserted">
                                                    Banpará</option>
                                                <option _ngcontent-xvm-c52="" value="12" class="ng-star-inserted">
                                                    Banestado</option>
                                                <option _ngcontent-xvm-c52="" value="13" class="ng-star-inserted"> BEP
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="14" class="ng-star-inserted"> Banco
                                                    Cargill</option>
                                                <option _ngcontent-xvm-c52="" value="15" class="ng-star-inserted">
                                                    Banrisul</option>
                                                <option _ngcontent-xvm-c52="" value="16" class="ng-star-inserted"> BVA
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="17" class="ng-star-inserted"> Banco
                                                    Opportunity</option>
                                                <option _ngcontent-xvm-c52="" value="18" class="ng-star-inserted">
                                                    Banese</option>
                                                <option _ngcontent-xvm-c52="" value="19" class="ng-star-inserted">
                                                    Hipercard</option>
                                                <option _ngcontent-xvm-c52="" value="20" class="ng-star-inserted">
                                                    Ibibank</option>
                                                <option _ngcontent-xvm-c52="" value="21" class="ng-star-inserted"> Lemon
                                                    Bank</option>
                                                <option _ngcontent-xvm-c52="" value="22" class="ng-star-inserted"> Banco
                                                    Morgan Stanley Dean Witter</option>
                                                <option _ngcontent-xvm-c52="" value="23" class="ng-star-inserted"> BPN
                                                    Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="24" class="ng-star-inserted"> Banco
                                                    de Brasília – BRB</option>
                                                <option _ngcontent-xvm-c52="" value="25" class="ng-star-inserted"> Banco
                                                    Rural</option>
                                                <option _ngcontent-xvm-c52="" value="26" class="ng-star-inserted"> Banco
                                                    Popular</option>
                                                <option _ngcontent-xvm-c52="" value="27" class="ng-star-inserted"> Banco
                                                    J. Safra</option>
                                                <option _ngcontent-xvm-c52="" value="28" class="ng-star-inserted"> Banco
                                                    CR2</option>
                                                <option _ngcontent-xvm-c52="" value="29" class="ng-star-inserted"> Banco
                                                    KDB</option>
                                                <option _ngcontent-xvm-c52="" value="30" class="ng-star-inserted"> Banco
                                                    BMF</option>
                                                <option _ngcontent-xvm-c52="" value="31" class="ng-star-inserted"> Caixa
                                                    Econômica Federal</option>
                                                <option _ngcontent-xvm-c52="" value="32" class="ng-star-inserted"> Banco
                                                    BBM</option>
                                                <option _ngcontent-xvm-c52="" value="33" class="ng-star-inserted"> Banco
                                                    Único</option>
                                                <option _ngcontent-xvm-c52="" value="34" class="ng-star-inserted"> Nossa
                                                    Caixa</option>
                                                <option _ngcontent-xvm-c52="" value="35" class="ng-star-inserted"> Banco
                                                    Finasa</option>
                                                <option _ngcontent-xvm-c52="" value="36" class="ng-star-inserted"> Banco
                                                    Itaú BBA</option>
                                                <option _ngcontent-xvm-c52="" value="37" class="ng-star-inserted">
                                                    American Express Bank</option>
                                                <option _ngcontent-xvm-c52="" value="38" class="ng-star-inserted"> Banco
                                                    Pactual</option>
                                                <option _ngcontent-xvm-c52="" value="39" class="ng-star-inserted"> Banco
                                                    Matone</option>
                                                <option _ngcontent-xvm-c52="" value="40" class="ng-star-inserted"> Banco
                                                    Arbi</option>
                                                <option _ngcontent-xvm-c52="" value="41" class="ng-star-inserted"> Banco
                                                    Dibens</option>
                                                <option _ngcontent-xvm-c52="" value="42" class="ng-star-inserted"> Banco
                                                    Joh Deere</option>
                                                <option _ngcontent-xvm-c52="" value="43" class="ng-star-inserted"> Banco
                                                    Bonsucesso</option>
                                                <option _ngcontent-xvm-c52="" value="44" class="ng-star-inserted"> Banco
                                                    Calyon Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="45" class="ng-star-inserted"> Banco
                                                    Fibra</option>
                                                <option _ngcontent-xvm-c52="" value="46" class="ng-star-inserted"> Banco
                                                    Brascan</option>
                                                <option _ngcontent-xvm-c52="" value="47" class="ng-star-inserted"> Banco
                                                    Cruzeiro</option>
                                                <option _ngcontent-xvm-c52="" value="48" class="ng-star-inserted">
                                                    Unicard</option>
                                                <option _ngcontent-xvm-c52="" value="49" class="ng-star-inserted"> Banco
                                                    GE Capital</option>
                                                <option _ngcontent-xvm-c52="" value="50" class="ng-star-inserted">
                                                    Bradesco</option>
                                                <option _ngcontent-xvm-c52="" value="51" class="ng-star-inserted"> Banco
                                                    Clássico</option>
                                                <option _ngcontent-xvm-c52="" value="52" class="ng-star-inserted"> Banco
                                                    Stock Máxima</option>
                                                <option _ngcontent-xvm-c52="" value="53" class="ng-star-inserted"> Banco
                                                    ABC Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="54" class="ng-star-inserted"> Banco
                                                    Boavista Interatlântico</option>
                                                <option _ngcontent-xvm-c52="" value="55" class="ng-star-inserted">
                                                    Investcred Unibanco</option>
                                                <option _ngcontent-xvm-c52="" value="56" class="ng-star-inserted"> Banco
                                                    Schahin</option>
                                                <option _ngcontent-xvm-c52="" value="57" class="ng-star-inserted">
                                                    Fininvest</option>
                                                <option _ngcontent-xvm-c52="" value="58" class="ng-star-inserted">
                                                    Paraná Banco</option>
                                                <option _ngcontent-xvm-c52="" value="59" class="ng-star-inserted"> Banco
                                                    Cacique</option>
                                                <option _ngcontent-xvm-c52="" value="60" class="ng-star-inserted"> Banco
                                                    Fator</option>
                                                <option _ngcontent-xvm-c52="" value="61" class="ng-star-inserted"> Banco
                                                    Cédula</option>
                                                <option _ngcontent-xvm-c52="" value="62" class="ng-star-inserted"> Banco
                                                    de la Nación Argentina</option>
                                                <option _ngcontent-xvm-c52="" value="63" class="ng-star-inserted"> Banco
                                                    BMG</option>
                                                <option _ngcontent-xvm-c52="" value="64" class="ng-star-inserted"> Banco
                                                    Industrial e Comercial</option>
                                                <option _ngcontent-xvm-c52="" value="66" class="ng-star-inserted"> Itau
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="67" class="ng-star-inserted">
                                                    Sudameris</option>
                                                <option _ngcontent-xvm-c52="" value="68" class="ng-star-inserted"> Banco
                                                    Santander</option>
                                                <option _ngcontent-xvm-c52="" value="69" class="ng-star-inserted"> Banco
                                                    Santander Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="65" class="ng-star-inserted"> ABN
                                                    Amro Real</option>
                                                <option _ngcontent-xvm-c52="" value="70" class="ng-star-inserted"> Banco
                                                    Societe Generale Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="71" class="ng-star-inserted"> Banco
                                                    WestLB</option>
                                                <option _ngcontent-xvm-c52="" value="72" class="ng-star-inserted"> JP
                                                    Morgan</option>
                                                <option _ngcontent-xvm-c52="" value="73" class="ng-star-inserted"> Banco
                                                    Mercantil do Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="74" class="ng-star-inserted"> Banco
                                                    Mercantil de Crédito</option>
                                                <option _ngcontent-xvm-c52="" value="75" class="ng-star-inserted"> HSBC
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="76" class="ng-star-inserted">
                                                    Unibanco</option>
                                                <option _ngcontent-xvm-c52="" value="77" class="ng-star-inserted"> Banco
                                                    Capital</option>
                                                <option _ngcontent-xvm-c52="" value="78" class="ng-star-inserted"> Banco
                                                    Safra</option>
                                                <option _ngcontent-xvm-c52="" value="79" class="ng-star-inserted"> Banco
                                                    Rural</option>
                                                <option _ngcontent-xvm-c52="" value="80" class="ng-star-inserted"> Banco
                                                    Tokyo Mitsubishi UFJ</option>
                                                <option _ngcontent-xvm-c52="" value="81" class="ng-star-inserted"> Banco
                                                    Sumitomo Mitsui Brasileiro</option>
                                                <option _ngcontent-xvm-c52="" value="82" class="ng-star-inserted">
                                                    Citibank</option>
                                                <option _ngcontent-xvm-c52="" value="83" class="ng-star-inserted">
                                                    Itaubank (antigo Bank Boston)</option>
                                                <option _ngcontent-xvm-c52="" value="84" class="ng-star-inserted">
                                                    Deutsche Bank</option>
                                                <option _ngcontent-xvm-c52="" value="85" class="ng-star-inserted"> Banco
                                                    Morgan Guaranty</option>
                                                <option _ngcontent-xvm-c52="" value="86" class="ng-star-inserted"> Banco
                                                    NMB Postbank</option>
                                                <option _ngcontent-xvm-c52="" value="87" class="ng-star-inserted"> Banco
                                                    la República Oriental del Uruguay</option>
                                                <option _ngcontent-xvm-c52="" value="88" class="ng-star-inserted"> Banco
                                                    La Provincia de Buenos Aires</option>
                                                <option _ngcontent-xvm-c52="" value="89" class="ng-star-inserted"> Banco
                                                    Credit Suisse</option>
                                                <option _ngcontent-xvm-c52="" value="90" class="ng-star-inserted"> Banco
                                                    Luso Brasileiro</option>
                                                <option _ngcontent-xvm-c52="" value="91" class="ng-star-inserted"> Banco
                                                    Industrial</option>
                                                <option _ngcontent-xvm-c52="" value="92" class="ng-star-inserted"> Banco
                                                    VR</option>
                                                <option _ngcontent-xvm-c52="" value="93" class="ng-star-inserted"> Banco
                                                    Paulista</option>
                                                <option _ngcontent-xvm-c52="" value="94" class="ng-star-inserted"> Banco
                                                    Guanabara</option>
                                                <option _ngcontent-xvm-c52="" value="95" class="ng-star-inserted"> Banco
                                                    Pecunia</option>
                                                <option _ngcontent-xvm-c52="" value="96" class="ng-star-inserted"> Banco
                                                    Panamericano</option>
                                                <option _ngcontent-xvm-c52="" value="97" class="ng-star-inserted"> Banco
                                                    Ficsa</option>
                                                <option _ngcontent-xvm-c52="" value="98" class="ng-star-inserted"> Banco
                                                    Intercap</option>
                                                <option _ngcontent-xvm-c52="" value="99" class="ng-star-inserted"> Banco
                                                    Rendimento</option>
                                                <option _ngcontent-xvm-c52="" value="100" class="ng-star-inserted">
                                                    Banco Triângulo</option>
                                                <option _ngcontent-xvm-c52="" value="101" class="ng-star-inserted">
                                                    Banco Sofisa</option>
                                                <option _ngcontent-xvm-c52="" value="102" class="ng-star-inserted">
                                                    Banco Prosper</option>
                                                <option _ngcontent-xvm-c52="" value="103" class="ng-star-inserted">
                                                    Banco Pine</option>
                                                <option _ngcontent-xvm-c52="" value="104" class="ng-star-inserted"> Itaú
                                                    Holding Financeira</option>
                                                <option _ngcontent-xvm-c52="" value="105" class="ng-star-inserted">
                                                    Banco Indusval</option>
                                                <option _ngcontent-xvm-c52="" value="106" class="ng-star-inserted">
                                                    Banco A.J. Renner</option>
                                                <option _ngcontent-xvm-c52="" value="107" class="ng-star-inserted">
                                                    Banco Votorantim</option>
                                                <option _ngcontent-xvm-c52="" value="108" class="ng-star-inserted">
                                                    Banco Daycoval</option>
                                                <option _ngcontent-xvm-c52="" value="109" class="ng-star-inserted">
                                                    Banif</option>
                                                <option _ngcontent-xvm-c52="" value="110" class="ng-star-inserted">
                                                    Banco Credibel</option>
                                                <option _ngcontent-xvm-c52="" value="111" class="ng-star-inserted">
                                                    Banco Gerdau</option>
                                                <option _ngcontent-xvm-c52="" value="112" class="ng-star-inserted">
                                                    Banco Pottencial</option>
                                                <option _ngcontent-xvm-c52="" value="113" class="ng-star-inserted">
                                                    Banco Morada</option>
                                                <option _ngcontent-xvm-c52="" value="114" class="ng-star-inserted">
                                                    Banco Galvão de Negócios</option>
                                                <option _ngcontent-xvm-c52="" value="115" class="ng-star-inserted">
                                                    Banco Barclays</option>
                                                <option _ngcontent-xvm-c52="" value="116" class="ng-star-inserted"> BRP
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="117" class="ng-star-inserted">
                                                    Banco Semear</option>
                                                <option _ngcontent-xvm-c52="" value="118" class="ng-star-inserted">
                                                    Banco Citibank</option>
                                                <option _ngcontent-xvm-c52="" value="119" class="ng-star-inserted">
                                                    Banco Modal</option>
                                                <option _ngcontent-xvm-c52="" value="120" class="ng-star-inserted">
                                                    Banco Rabobank International</option>
                                                <option _ngcontent-xvm-c52="" value="121" class="ng-star-inserted">
                                                    Banco Cooperativo Sicredi</option>
                                                <option _ngcontent-xvm-c52="" value="122" class="ng-star-inserted">
                                                    Banco Simples</option>
                                                <option _ngcontent-xvm-c52="" value="123" class="ng-star-inserted">
                                                    Dresdner Bank</option>
                                                <option _ngcontent-xvm-c52="" value="124" class="ng-star-inserted"> BNP
                                                    Paribas</option>
                                                <option _ngcontent-xvm-c52="" value="125" class="ng-star-inserted">
                                                    Banco Comercial Uruguai</option>
                                                <option _ngcontent-xvm-c52="" value="126" class="ng-star-inserted">
                                                    Banco Merrill Lynch</option>
                                                <option _ngcontent-xvm-c52="" value="127" class="ng-star-inserted">
                                                    Banco Cooperativo do Brasil</option>
                                                <option _ngcontent-xvm-c52="" value="128" class="ng-star-inserted"> KEB
                                                </option>
                                                <option _ngcontent-xvm-c52="" value="129" class="ng-star-inserted">
                                                    Banco Unicred</option><!---->
                                            </select></div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Conta</label><input _ngcontent-xvm-c52="" type="text"
                                            formcontrolname="account"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-4 col-lg-4 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Agência</label><input _ngcontent-xvm-c52=""
                                            type="text" formcontrolname="agency"
                                            class="form-control ng-untouched ng-pristine ng-valid"></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Tipo de
                                            conta</label>
                                        <div _ngcontent-xvm-c52="" class="form-group"><select _ngcontent-xvm-c52=""
                                                formcontrolname="type"
                                                class="custom-select ng-untouched ng-pristine ng-valid">
                                                <option _ngcontent-xvm-c52="" value="1">Corrente</option>
                                                <option _ngcontent-xvm-c52="" value="2">Poupança</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-xvm-c52="" class="card">
                        <div _ngcontent-xvm-c52="" class="container mt-2">
                            <p _ngcontent-xvm-c52="" style="font-weight: bold;">DOCUMENTOS</p>
                            <div _ngcontent-xvm-c52="" class="row">
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">CPF/RG</label>
                                        <div _ngcontent-xvm-c52="" class="row"><!----><!---->
                                            <div _ngcontent-xvm-c52="" data-toggle="dropzone"
                                                data-dropzone-url="http://"
                                                class="col-md-8 col-lg-8 col-sm-12 dropzone dropzone-single dz-clickable">
                                                <div _ngcontent-xvm-c52="" class="dz-preview dz-preview-single"></div>
                                                <div class="dz-default dz-message"><span>Selecione o arquivo.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Declaração de imposto de renda</label>
                                        <div _ngcontent-xvm-c52="" class="row"><!----><!---->
                                            <div _ngcontent-xvm-c52="" data-toggle="dropzone"
                                                data-dropzone-url="http://"
                                                class="col-md-8 col-lg-8 col-sm-12 dropzone dropzone-single class-declaracao dz-clickable">
                                                <div _ngcontent-xvm-c52=""
                                                    class="dz-preview dz-preview-single declaracao"></div>
                                                <div class="dz-default dz-message"><span>Selecione o arquivo.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Comprovante de residência</label>
                                        <div _ngcontent-xvm-c52="" class="row"><!----><!---->
                                            <div _ngcontent-xvm-c52="" data-toggle="dropzone"
                                                data-dropzone-url="http://"
                                                class="col-md-8 col-lg-8 col-sm-12 dropzone dropzone-single class-residencia dz-clickable">
                                                <div _ngcontent-xvm-c52=""
                                                    class="dz-preview dz-preview-single residencia"></div>
                                                <div class="dz-default dz-message"><span>Selecione o arquivo.</span>
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
                    <div _ngcontent-xvm-c52="" class="card">
                        <div _ngcontent-xvm-c52="" class="container mt-2">
                            <p _ngcontent-xvm-c52="" style="font-weight: bold;">CADASTRO USUÁRIO</p>
                            <div _ngcontent-xvm-c52="" class="row">
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-lg-12 col-sm-12 mb-3">
                                    <div _ngcontent-xvm-c52="" class="custom-control custom-checkbox"><input
                                            _ngcontent-xvm-c52="" type="checkbox" id="customCheck3"
                                            class="custom-control-input"><label _ngcontent-xvm-c52="" for="customCheck3"
                                            class="custom-control-label" style="font-size: 15px;"> Desejo criar meu
                                            login para o <b _ngcontent-xvm-c52="">PREGÃO ONLINE</b>.</label></div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label
                                            _ngcontent-xvm-c52="">Telefone<span _ngcontent-xvm-c52=""
                                                class="text-danger">*</span></label><input _ngcontent-xvm-c52=""
                                            mask="(00) 00000-0000" type="text" formcontrolname="phone"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-6 col-lg-6 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Email
                                            <span _ngcontent-xvm-c52="" class="text-danger">*</span></label><input
                                            _ngcontent-xvm-c52="" type="email" formcontrolname="email"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-3 col-lg-3 col-sm-12">
                                    <div _ngcontent-xvm-c52="" class="form-group"><label _ngcontent-xvm-c52="">Senha
                                            <span _ngcontent-xvm-c52="" class="text-danger">*</span></label><input
                                            _ngcontent-xvm-c52="" type="password" autocomplete="false"
                                            formcontrolname="password"
                                            class="form-control ng-untouched ng-pristine ng-invalid"><small
                                            _ngcontent-xvm-c52="">*Mínimo 8 caracteres.</small><app-validation-message
                                            _ngcontent-xvm-c52="" _nghost-xvm-c51=""><!----></app-validation-message>
                                    </div>
                                </div>
                                <div _ngcontent-xvm-c52="" class="col-md-12 col-sm-12 col-lg-12 mb-4 pb-4">
                                    <div _ngcontent-xvm-c52="" class="custom-control custom-checkbox"><input
                                            _ngcontent-xvm-c52="" type="checkbox" id="customCheck1"
                                            class="custom-control-input"><label _ngcontent-xvm-c52="" for="customCheck1"
                                            class="custom-control-label" style="font-size: 15px;">Estou de acordo com os
                                            <a _ngcontent-xvm-c52=""
                                                href="https://bid365.app/storage/termos-condicoes.pdf" target="_blank"
                                                rel="noopener noreferrer"
                                                style="text-decoration: underline; font-weight: bold;">Termos de Uso</a>
                                            apresentados acima e quero prosseguir com meu cadastro.</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-xvm-c52="" class="d-flex mb-5"
                        style="justify-content: center; align-items: center; display: flex;"><button
                            _ngcontent-xvm-c52="" type="button"
                            class="btn-icon btn-4 btn btn-secondary text-dark mt-4 button ng-star-inserted"
                            disabled=""><span _ngcontent-xvm-c52="" class="btn-inner--text">ENVIAR
                                CADASTRO</span></button><!----><!----></div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class='row'>
                <div class='col-5 pt-5 pb-5 ms-5'>
                    <div class="card">
                        <h2>Dados pessoais</h2>

                        <label required>Nome</label>
                        <input type="text">


                    </div>

                </div>
                <div class='col-5 pt-5 pb-5 ms-5'>
                    <div class="card">
                        <h2>Dados Bancários</h2>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            tipoForm: "PF",
        }
    }
}
</script>

<style scoped>
.row {
    margin-right: 0;
    background-color: var(--color-background-html);
}

h1 {
    font-family: 'Lato Regular';
    font-size: 30px;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 5%;
    margin-top: 5%;

}

h2 {
    font-family: 'Lato Regular';
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 5%;
    margin-top: 5%;

}

.title span {
    font-family: 'Lato Light';
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
</style>
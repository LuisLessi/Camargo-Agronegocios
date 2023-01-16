<template>
    <div class='row '>
    <div class="title">
    <h1>Formulário para cadastro</h1>
    <span>Para realizar seu cadastro junto a Camargo Agronegócios, preencha todo formulário abaixo.</span>
        
    <div v-if="tipoForm == 'PF'">
        <span>Após o preenchimento, favor anexar os documentos para o andamento do cadastro: cópia de RG e CPF,
        comprovante de &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspresidência e declaração do imposto de renda. Ou envie para o e-mail:
        <a href="mailto:atendimento@camargoagronegocios.com.br">atendimento@camargoagronegocios.com.br</a></span>
    </div>
    <div v-else>
        <span>Após o preenchimento, favor anexar os documentos para o andamento do cadastro: cópia de RG e CPF
        do responsável, &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcontrato social e faturamento da empresa devidamente assinado pelo contador.
        Ou envie para o e-mail: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a 
        href="mailto:atendimento@camargoagronegocios.com.br">atendimento@camargoagronegocios.com.br</a></span>
    </div>

    </div>
    <div class="input-block" style="margin-left: 5%;">
               <label
                  >Pessoa Física &nbsp<input
                  v-model="tipoForm"
                    name="tipoConta"
                    id="options"
                    type="radio"
                    value="PF"
                /></label>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <label>Pessoa juridica &nbsp
                <input v-model="tipoForm" name="tipoConta" id="options" type="radio"
                value="PJ"/></label>
                </div>
                <div>
                    
                </div>
                <div v-if="tipoForm == 'PF'">
                    <div class='row'>
                    <div class='col-5 pt-5 pb-5 ms-5'>
                    <div class="card" >
                        <h2>Dados pessoais</h2>

                        <label style="margin-left: 5%;">Nome</label>
                        <div class="col-sm-10">
                        <input type="text"  class="form-control" aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm" style="margin-left: 5%;">
                    </div>
                    
                        <label style="margin-left: 5%;">CPF</label>
                        <div class="col-sm-5">
                        <input type="text"  class="form-control" aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm" style="margin-left: 10%;">
                    </div>
                    
                    <label style="margin-left: 5%;">RG</label>
                        <div class="col-sm-5">
                        <input type="text"  class="form-control" aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm" style="margin-left: 10%;">
                    </div>
                    </div>
                    
                </div>
                <div class='col-5 pt-5 pb-5 ms-5'>
                    <div class="card">
                        <h2>Dados Bancários</h2>

                    </div>
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
    return  {
    tipoForm: "PF",
} 
  } 
}
</script>

<style scoped>

.row{
  margin-right: 0;
  background-color: var(--color-background-html);
}
h1{
  font-family: 'Lato Regular';
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 5%;
  margin-top: 5%;

}
h2{
  font-family: 'Lato Regular';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 5%;
  margin-top: 5%;

}
.title span{
    font-family: 'Lato Light';
    font-size: 25px;
    margin-left: 5%;
}
a:-webkit-any-link {
    text-decoration: none;
}


.bancario{
    margin-left: 90%;
}

</style>
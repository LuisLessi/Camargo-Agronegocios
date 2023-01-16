<template>
    <div class='row ' >
    <div class='col-6 pt-5 pb-5'>
  <div class="card register" style="width: 36rem;">
  <h1>Olá, seja bem vindo a nossa <br>plataforma de negócios.</h1><br>
  <p>Faça o seu cadastro para realizar grandes negócios<br> nos nossos leilões e pregões.</p>
  <p style="font-weight: lighter;">É simples e rápido, basta clicar no botão.</p>
  <div class="div_register">
    <router-link to="/register"><button class="button_register btn btn-success btn-lg">Quero cadastrar</button></router-link>
</div>
</div>
</div>
<div class='col-6'>
<div class="card pt-5 pb-5 login" style="width: 36rem;">
  <h1 style="color: black;" class="h1_login">Já sou cadastrado</h1><br>
  <p style="font-weight: lighter;">Informe os dados para acessar</p>
  <div class="container">
  <div class="card-body">
  <label for="Email">Email</label>
  <div class="input-group mb-3">
  <input v-model="email" type="text" class="form-control" aria-label="Large" 
  aria-describedby="inputGroup-sizing-sm">

</div>
  <label for="Senha">Senha</label>
  <div class="input-group mb-3">
  <input v-model="senha" type="password" class="form-control" aria-label="Small" 
  aria-describedby="inputGroup-sizing-sm">
</div>
<a href="" class="text-end"><p style="font-weight: lighter;" >Esqueceu a senha ?</p></a>
<div class="text-center">

<button class="button_register btn btn-success btn-lg ">Acessar</button>
</div>
  </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style scoped>
.register{
  background-color: var(--color-background-navbar2);
  margin-left: 20%;
  color: white;
  border-radius: 5%;
}
h1{
  font-family: 'Lato';
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 20%;
  margin-top: 5%;

}
p{
  margin-left: 20%;
}
.login{
  border-radius: 5%;
  margin-left: 4%;
  margin-top: 7%;
  height: 83%;

}
.h1_login{
margin-top: -3%;
}
.row{
  margin-right: 0;
  background-color: var(--color-background-html);
}
.button_register{
  background-color: var(--color-background-button);
  color: black;
  font-family: 'Laro';
  font-weight: bold;
}
.button_register:hover{
  background-color: var(--color-background-button);

}
a:-webkit-any-link {
  text-decoration: none;
  color: black;
}
.div_register{
  margin-top: 5%;
  margin-left: 35%;
  margin-bottom: 20%;
  max-width: 80%;

}
</style>

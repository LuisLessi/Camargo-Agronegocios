<template>
  <div class="header-color">
   <span class="header">(49) 98402-3763 | atendimento@camargoagronegocios.com.br
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
   <a class="icons" target="_blank" href="https://www.facebook.com/camargoagronegocios">
    <font-awesome-icon :icon="['fa-brands', 'fa-facebook']" /></a>
    &nbsp&nbsp&nbsp
    <a class="icons" target="_blank" href="https://www.instagram.com/camargoagronegocios/">
    <font-awesome-icon :icon="['fa-brands', 'fa-instagram']" /></a>
    &nbsp&nbsp&nbsp
    <a class="icons" target="_blank" href="https://www.youtube.com/channel/UCXhV15UcX9CMUBvYNC9xCSQ">
    <font-awesome-icon :icon="['fa-brands', 'fa-youtube']" /></a>
  </span>
    </div>
     <nav class="navbar navbar-expand-lg navbar-light nav-color">
  <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo" class="logo">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <li class="nav-item">
        <router-link to="/auctionSchedule"><a class="nav-link" href="auctionSchedule">Agenda de Leilões</a></router-link>
      </li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <li class="nav-item">
        <router-link to="/onlineAuction"><a class="nav-link" href="onlineAuction">Pregão Online</a></router-link>
      </li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <li class="nav-item">
        <router-link to="/results"><a class="nav-link" href="#">Resultados</a></router-link>
      </li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <li class="nav-item">
        <router-link to="/login"> <a class="nav-link" href="login">Meu Cadastro</a></router-link>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<style scoped>
.nav-color{
  background-color: var(--color-background-navbar1);
}
.header-color{

  background-color: var( --color-background-navbar2);
  height: 35px;

}
.header{
  margin:auto; 
  display:table;
  color: white;
  font-family: 'Lato regular';
  font-size: 20px;
  

}
a:-webkit-any-link {
  text-decoration: none;
  color: white;
}

.logo{
max-width: 60%;
margin-left: 28%;
}

li{
  font-family: 'Lato regular';
  font-size: 15px;
     float: left;
     margin: 15px; 
     border-bottom: -10px;
}
li:hover{
  background-color: var(--color-background-button);
  border-radius: 5%;
  height: 100%;
}
@media only screen and (max-width: 1024px) {
  .header{
    font-size: 13px;

  }
  
}
</style>
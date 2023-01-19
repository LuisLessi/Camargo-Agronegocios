<template>

    <footer id="footer">
        <div class="container pt-5 pb-5">
        <div class="row">
        <div  class="container logo_sub">
        <img src="../assets/logo-rodape.png" alt="logo" class="logo">
        <br>
        <span class="sub-title">A visão do agronegócio que você conhece <br> e o resultado executado por quem você confia!</span>
        </div>
        <div  class="container mapa">
            <span class="title_map">MAPA DO SITE</span><br><br>
           <a href="#"><span>Home</span></a><br>
            <router-link to="/auctionSchedule"><a href=""><span>Agenda de leilões</span></a></router-link><br>
            <router-link to="/onlineAuction"><a href=""><span>Pregão online</span></a></router-link><br>
            <router-link to="/results"><a href=""><span>Resultados</span></a><br></router-link>
            <router-link to="/contacts"><a href=""><span>Contato</span></a></router-link>
         </div> 
         <div  class="container info">
            <span class="title_map">LINKS ÚTEIS</span><br><br>
           <a href="https://mail.hostinger.com/" target="_blank"><span>Webmail</span></a><br>
           <a href="https://bid365.app/login" target="_blank"><span>Painel de acesso</span></a><br>
           <a href="https://bid365.app/storage/termos-condicoes.pdf" target="_blank"><span>Política de privacidade</span></a><br>
         </div> 
        </div>  
    </div>
    </footer>
    </template>
    
    <script>
    export default {
    name: 'Footer',

}
    </script>
    
    <style scoped>

    #footer{
        position: relative;
        height: 410px;
        background-color: #0A0816;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
    }
    .logo{
    max-width: 15%;
    margin-bottom: 2%;
}
    a:-webkit-any-link {
        text-decoration: none;
        color: white;
        cursor: pointer;
      }
    .icons:hover{
        cursor:"pointer"
    }
    a:-webkit-any-link:hover{
        color: var(--color-background-button);
    }
    
    
    .sub-title{
        font-family: "Poppins";
        font-size: 15px;
    }
   .logo_sub{
    margin-bottom: 10%;

   }
   .mapa{
    width: 20%;
    height: 1px;
    
    margin-left: 40%;
    margin-top: -20%;
   }
   .title_map{
    font-weight: bold;
    font-size: 20px;
   }
   
   .info{
    width: 20%;
    height: 1px;
    margin-top: -20%;
   }
   @media only screen and (max-width: 1024px) {
    .logo{
        max-width: 40%;
    }
    .logo_sub{
        margin-top: -90%;
        margin-bottom: -20%;
    }
    .mapa{
        margin-left: 0%;
    }
    #footer{
        height: 740px;
        margin-bottom: -20%;
    }
}
    </style>
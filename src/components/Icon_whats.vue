<template>
    <a href="//wa.me/5563992523908" target="_blank" rel="Numero">
       <font-awesome-icon class="whats-link" :icon="['fab', 'whatsapp']"/>
   </a>

</template>

<script>
export default {
  name: 'IconWhats',

}
</script>

<style scoped>
.whats-link{
position: fixed;
width: 60px;
height: 60px;
bottom: 40px;
right: 40px;
z-index: 100;
background-color: #25d366;
color: #fff;
border-radius: 50px;
text-align: center;
box-shadow: 1px 1px 2px #888;

}
.whats-link:hover{
background-color: rgba(0,0,0,0);
color: #25d366;
box-shadow: inset 0 0 0 3px #009c3d;
}
@media only screen and (max-width: 1024px) {
.whats-link{
position: fixed;
width: 45px;
height: 45px;
bottom: 40px;
right: 30px;
z-index: 100;
background-color: #25d366;
color: #fff;
border-radius: 50px;
text-align: center;
box-shadow: 1px 1px 2px #888;
}
}
</style>
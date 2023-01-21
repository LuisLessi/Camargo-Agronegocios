<template>
      <Navbar/>
  <IconWhats/>
  <RouterView/>

    <Footer/>

</template>

<script>
import './styles/global.css'
import HomeView from "./views/HomeView.vue";
import Login from "./views/Login.vue";
import Navbar from './components/Navbar.vue'
import IconWhats from "./components/Icon_whats.vue"
import Footer from './components/Footer.vue'

export default{
  /* eslint-disable no-eval */

  components: {
    HomeView,
    Login,
    Navbar,
    IconWhats,
    Footer
  },

}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body{
    background-color: var(--color-background-html);
  }
</style>

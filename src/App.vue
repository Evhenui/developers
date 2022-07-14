<template>
 <div class="main-wrapper">
    <Header/>
    <Main/>
    <Footer/>
 </div>  
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Main, Footer
  }
}
</script>

<style lang="scss">
.main-wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

</style>

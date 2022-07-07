<template>
 <div class="main-wrapper">
    <Header/>
    <Main/>
 </div>  
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header, Main
  }
}
</script>

<style lang="scss">
.main-wrapper {
  max-width: 1920px;
  margin: 0 auto;
}

</style>

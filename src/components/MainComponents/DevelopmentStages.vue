<template>
  <section class="development-stages">
    <div class="development-stages__wrapper">
      <h1 class="development-stages__title title">
        Этапы разработки интернет-магазина
      </h1>
    </div>  
    <div class="development-stages__carusele-wrapper">
      <Carousel class="carousel-section"/>
    </div>
  </section>
</template>

<script>
import Carousel from '../Carousel/Carousel.vue'
export default {
  components: { Carousel },
}
</script>

<style lang="scss">
.development-stages {
  min-height: 785px;

		&__wrapper {
      margin: 0 0 5.25em 0;
		}

		&__title {
      text-align: center;
      font-weight: 800;
		}

    &__carusele-wrapper {
      padding: 0 290px;
      position: relative;
      &::after, &::before {
        content: '';
        background-repeat: no-repeat;
        position: absolute;
        
      }
      &::before {
      background-image: url('../../assets/shape-sphere-carousel.png');
      width: 72px;
      height: 72px;
      top: -20%;
      left: 5%;
      }
      &::after {
      background-image: url('../../assets/shape-wave-carousel.png');
      width: 190px;
      height: 70px;
      bottom: -10%;
      right: 4%;
      }
    }
    
}
</style>

<template>
  <section class="development-stages">
    <div class="development-stages__wrapper">
      <h1 class="development-stages__title title">
        Этапы разработки интернет-магазина
      </h1>
    </div>
    <div class="development-stages__carusele-wrapper">
      <CarouselOurServices />
    </div>
  </section>
</template>

<script>
import Carousel from "../Carousel/Carousel.vue";
import CarouselOurServices from "../Carousel/CarouselOurServices.vue";
export default {
  components: { Carousel, CarouselOurServices },
};
</script>

<style lang="scss">
.development-stages {
  min-height: 785px;
  padding: 123px 20px 128px 20px;
  &__wrapper {
    margin: 0 0 5.25em 0;
  }

  &__title {
    text-align: center;
    font-weight: 800;
  }

  &__carusele-wrapper {
    margin: 0 auto;
    position: relative;
    &::after,
    &::before {
      content: "";
      background-repeat: no-repeat;
      position: absolute;
    }
    &::before {
      background-image: url("../../assets/shape-sphere-carousel.png");
      width: 72px;
      height: 72px;
      top: -20%;
      left: 5%;
    }
    &::after {
      background-image: url("../../assets/shape-wave-carousel.png");
      width: 190px;
      height: 70px;
      bottom: -10%;
      right: 4%;
    }
  }
}
@media (max-width: 991.98px) {
  .development-stages {
    &__carusele-wrapper {
      &::before {
        left: -8%;
      }
    }
  }
}
@media (max-width: 767.98px) {
  .development-stages {
    min-height: 785px;
    padding: 42px 20px 45px 20px;
    &__wrapper {
      margin: 0 0 2em 0;
    }

    &__title {
      font-size: 1.4375rem;
      line-height: 150%;
    }

    &__carusele-wrapper {
      margin: 0 auto;
      position: relative;
      &::before {
        background-image: url("../../assets/mobile-img/shape-sphere-accardion.png");
        width: 39.86px;
        height: 39.86px;
        top: -17%;
        left: -6%;
      }
      &::after {
        background-image: none;
        width: 0;
        height: 0;
      }
    }
  }
}
@media (max-width: 480.98px) {
  .development-stages {
    &__carusele-wrapper {
      &::before {
        top: -18%;
        left: -11%;
      }
    }
  }
}
</style>

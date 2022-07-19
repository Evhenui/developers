<template>
  <Carousel>
    <template v-slot:body>
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in CAROUSEL_OUR_SERVICES_ITEMS"
        :key="index"
      >
        <div class="slider-item">
          <div class="slider-item__wrapper">
            <section class="slider-item__text-section">
              <h1 class="slider-item__title title">{{ item.title }}</h1>
              <p class="slider-item__subtitle description">
                {{ item.subtitle }}
              </p>
            </section>
            <section class="slider-item__img section-img">
              <img :src="item.img" alt="slider image" />
            </section>
            <section class="slider-item__img-mobile section-img">
              <img :src="item.imgMobile" alt="slider image" />
            </section>
          </div>
        </div>
      </swiper-slide>
    </template>
  </Carousel>
</template>

<script>
import Carousel from "./Carousel.vue";
import { mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: { Carousel, SwiperSlide, Swiper },
  computed: { ...mapGetters(["CAROUSEL_OUR_SERVICES_ITEMS"]) },
};
</script>

<style lang="scss">
.swiper-slide {
  display: flex;
  height: auto;
}
.slider-item {
  min-height: 389px;
  max-width: 672px;
  border: 2px solid #67aefc;
  border-radius: 15px;

  &__wrapper {
    display: flex;
    padding: 53px 33px 12px 70px;
  }

  &__title {
    font-size: 1.3125rem;
    margin-bottom: 21px;
  }

  &__subtitle {
    font-size: 1.125rem;
    line-height: 140%;
  }
  &__img-mobile {
    display: none;
  }
}
@media (max-width: 1300.98px) {
  .slider-item {
    &__wrapper {
      display: flex;
      flex-direction: column;
      padding: 27px 12px 12px 33px;
    }
    &__subtitle {
      margin-bottom: 21px;
    }
    &__img {
      margin: 0 auto;
    }
  }
}
@media (max-width: 991.98px) {
  .slider-item {
    &__title {
      font-size: 1.0625rem;
    }

    &__subtitle {
      font-size: 1.0625rem;
      line-height: 175%;
    }
    &__img {
      display: none;
    }
    &__img-mobile {
      display: block;
      max-width: 220px;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
@media (max-width: 480.98px) {
  .slider-item {
    max-width: 335px;
    &__wrapper {
      padding: 27px 19px 12px 27px;
    }
  }
}
@media (max-width: 370.98px) {
  .slider-item {
    max-width: 250px;
    &__wrapper {
      padding: 27px 10px 12px 10px;
    }
  }
}
</style>

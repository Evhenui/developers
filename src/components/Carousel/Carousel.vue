<template>
  <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnIneraction: false,
    }"
    :pagination="{ clickable: true }"
    class="swiper"
    :navigation="{ nextEl: '.next-arrow', prevEl: '.prev-arrow' }"
    :breakpoints="{
      250: { slidesPerView: 1 },
      320: { slidesPerView: 1 },
      480: { slidesPerView: 1 },
      992: { slidesPerView: 2 },
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in CAROUSEL_ITEMS"
      :key="index"
    >
      <div class="slider-item">
        <div class="slider-item__wrapper">
          <section class="slider-item__text-section">
            <h1 class="slider-item__title title">{{ item.title }}</h1>
            <p class="slider-item__subtitle description">{{ item.subtitle }}</p>
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
    <div class="slider-buttons">
      <div class="slider-buttons__nav-inducator prev-arrow">
        <svg
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 25L1 13L13 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="slider-buttons__nav-inducator next-arrow">
        <svg
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 25L13 13L1 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { mapGetters } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: { ...mapGetters(["CAROUSEL_ITEMS"]) },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.swiper {
  max-width: 1369px;
  .swiper-wrapper {
    margin-bottom: 84px;
  }
}
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
.slider-buttons {
  display: flex;
  justify-content: center;
  column-gap: 30px;
  &__nav-inducator {
    border: 2px solid #67aefc;
    border-radius: 15px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    position: relative;
    svg {
      position: absolute;
      top: 25%;
      left: 20px;
    }
    &:active {
      background: #67aefc;
      svg {
        path {
          stroke: white;
        }
      }
    }
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
  .swiper {
    max-width: 445px;
    .swiper-wrapper {
    margin-bottom: 25px;
  }
  }
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
  .swiper {
    max-width: 335px;
  }

  .slider-item {
    max-width: 335px;
  &__wrapper {
    padding: 27px 19px 12px 27px;
  }
}
}
@media (max-width: 370.98px) {
  .swiper {
    max-width: 250px;
  }
  .slider-item {
    max-width: 250px;
  &__wrapper {
    padding: 27px 10px 12px 10px;
  }
}
}
</style>

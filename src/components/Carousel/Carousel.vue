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
    <slot name="body">
      <h1>Error</h1>
    </slot>
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

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
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

@media (max-width: 991.98px) {
  .swiper {
    max-width: 445px;
    .swiper-wrapper {
    margin-bottom: 25px;
  }
  }
}
@media (max-width: 480.98px) {
  .swiper {
    max-width: 335px;
  }
}
@media (max-width: 370.98px) {
  .swiper {
    max-width: 250px;
  }
}
</style>

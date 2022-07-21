<template>
  <Carousel>
    <template v-slot:body>
      <swiper-slide class="swiper-slide-examples">
        <div
          class="slider-examples-item"
          v-for="(item, index) in halfSwiper(EXAMPLES_CARD, 'odd')"
          :key="index"
        >
          <div class="slider-examples-item__wrapper">
            <div class="examples__block-img">
              <div class="examples__container-img">
                <div
                  class="examples__container-transit-images"
                  :style="{ backgroundImage: 'url(' + item.imgMobile + ')' }"
                >
                  <a class="examples__text-inside-hover" href="#">
                    <h1 class="examples__inside-hover-title title">
                      {{ item.title }}
                    </h1>
                    <p class="examples__inside-hover-subtitle description">
                      {{ item.subtitle }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide-examples">
        <div
          class="slider-examples-item"
          v-for="(item, index) in halfSwiper(EXAMPLES_CARD, 'even')"
          :key="index"
        >
          <div class="slider-examples-item__wrapper">
            <div class="examples__block-img">
              <div class="examples__container-img">
                <div
                  class="examples__container-transit-images"
                  :style="{ backgroundImage: 'url(' + item.imgMobile + ')' }"
                >
                  <a class="examples__text-inside-hover" href="#">
                    <h1 class="examples__inside-hover-title title">
                      {{ item.title }}
                    </h1>
                    <p class="examples__inside-hover-subtitle description">
                      {{ item.subtitle }}
                    </p>
                  </a>
                </div>
              </div>
            </div>
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
  computed: { ...mapGetters(["EXAMPLES_CARD"]) },
  methods: {
    halfSwiper: function (arr, part) {
      if(part === 'odd') {
        return arr.filter((item, index) => index % 2 === 0);
      } else if (part === 'even') {
        return arr.filter((item, index) => index % 2 != 0);
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.swiper-slide-examples {
  flex-direction: column;
}
.slider-examples-item {
  margin-bottom: 15.56px;
  &:last-child {
    margin-bottom: 0;
  }
}
.slider-buttons {
  column-gap: 107px;
}


</style>

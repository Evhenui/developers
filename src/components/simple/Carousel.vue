<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus hic adipisci perferendis ratione, minus necessitatibus exercitationem dolore recusandae. Ratione, numquam! Necessitatibus aliquam soluta voluptatibus, voluptates nobis nesciunt dolor nulla.</p>
    </swiper-slide>
    <swiper-slide>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus hic adipisci perferendis ratione, minus necessitatibus exercitationem dolore recusandae. Ratione, numquam! Necessitatibus aliquam soluta voluptatibus, voluptates nobis nesciunt dolor nulla.</p>
    </swiper-slide>
    <swiper-slide>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus hic adipisci perferendis ratione, minus necessitatibus exercitationem dolore recusandae. Ratione, numquam! Necessitatibus aliquam soluta voluptatibus, voluptates nobis nesciunt dolor nulla.</p>
    </swiper-slide>
    <swiper-slide>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus hic adipisci perferendis ratione, minus necessitatibus exercitationem dolore recusandae. Ratione, numquam! Necessitatibus aliquam soluta voluptatibus, voluptates nobis nesciunt dolor nulla.</p>
    </swiper-slide>
    <swiper-slide>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus hic adipisci perferendis ratione, minus necessitatibus exercitationem dolore recusandae. Ratione, numquam! Necessitatibus aliquam soluta voluptatibus, voluptates nobis nesciunt dolor nulla.</p>
    </swiper-slide>

  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/a11y';
  import 'swiper/css/navigation';
  

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style lang="scss">
.swiper-wrapper {
  min-height: 533px;
}

.swiper-button-next, .swiper-button-prev{
  border: 2px solid #67AEFC;
  border-radius: 15px;
  width: 60px;
  height: 60px;
  &::after {
    content: '';
    background-image: url('../../assets/arr-right.svg');
    background-repeat: no-repeat;
    width: 15px;
    height: 26px;
  }
}
.swiper-button-prev{ 
  &::after {
    background-image: url('../../assets/arr-left.svg');
  }
}
</style>
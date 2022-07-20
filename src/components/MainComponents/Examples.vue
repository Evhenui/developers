<template>
  <section class="examples">
    <h1 class="examples__title title">Примеры онлайн-магазинов</h1>
    <section class="examples__cards">
      <div 
        class="examples__block-img"
        v-for="(item,index) in EXAMPLES_CARD"
        :key="index"
      >
        <div class="examples__container-img">
          <div 
            class="examples__container-transit-images"
            :style="{ backgroundImage: 'url(' + item.img + ')' }"
          >
            <a class="examples__text-inside-hover" href="#">
              <h1 class="examples__inside-hover-title title">{{item.title}}</h1>
              <p class="examples__inside-hover-subtitle description">
                {{item.subtitle}}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <CarouselExamples class="carousel-examples"></CarouselExamples>
  </section>
</template>

<script>
import Carousel from "../Carousel/Carousel.vue";
import CarouselExamples from "../Carousel/CarouselExamples.vue";
import { mapGetters } from 'vuex';
export default {
   components: { Carousel, CarouselExamples },
  computed: {...mapGetters(['EXAMPLES_CARD'])}
};
</script>

<style lang="scss">
.examples {
  padding: 121px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #daecff;
  min-height: 400px;
  margin-bottom: 136px;
  position: relative;
  &::after, &::before {
      content: '';
      background-repeat: no-repeat;
      position: absolute;
    }
  &::after {
      background-image: url('../../assets/shape-sphere-card.png');
      bottom: 249px;
      right: 101.73px;
      width: 111.44px;
      height: 111.44px;
    }
    &::before {
      background-image: url('../../assets/shape-wave-card.png');
      top: 270px;
      left: 27px;
      width: 233.96px;
      height: 189.92px;
    }
  &__title {
    font-weight: 800;
    margin-bottom: 51px;
  }

  &__cards {
    margin: 0 auto;
    max-width: 1158.92px;
    gap: 39px 32.94px;
    display: flex;
    flex-wrap: wrap;  
  }

  &__block-img {
    max-width: 562.99px;
    width: 100%;
  }

  &__container-img {
    max-width: 562.99px;
    min-height: 447px;
    background: #436f9e;
    display: flex;
    border-radius: 15px;
  }

  &__container-transit-images {
    display: flex;
    width: 100%;
    border-radius: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #daecff;
    transition: transform 0.5s;
  }
  &__container-img:hover &__container-transit-images {
    transform: translate(-10px, -10px);
    transition: transform 0.5s;
  }

  &__text-inside-hover {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #67AEFC;
    text-decoration: none;
    display: flex;
    visibility: hidden;
    opacity: 0;
    border-radius: 15px;
    
  }
  &__container-img:hover &__text-inside-hover {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s;
  }
  &__inside-hover-subtitle {
    margin: 0;
  }
  .carousel-examples {
    display: none;
  }
}
@media (max-width: 1650.98px) { 
  .examples {
    &::after, &::before {
      width: 0;
      height: 0;
    }
    &__cards {
      max-width: 922.92px;
      gap: 20px 20.94px;
    }
    &__block-img {
      max-width: 450.99px;
    }
    &__container-img{
      max-width: 450.99px;
      min-height: 399px;
    }
  }
}
@media (max-width: 991.98px) {
  .examples { 
     &::before {
      top: 200px;
      left: 0;
      width: 233.96px;
      height: 189.92px;
    }
    &::after {
      right: 90px;
      width: 111.44px;
      height: 111.44px;
    }

    &__cards {
    display: none;
  }
   .carousel-examples {
    display: block;
    max-width: 335px;
  }
    &__block-img {
      max-width: 335px;
    }
    &__container-img{
      max-width: 335px;
      min-height: 260px;
    }
    &__container-img:hover &__container-transit-images {
    transform: translate(0px, 0px);
  }
  }
 }
@media (max-width: 767.98px) { }
</style>

<template>
  <section class="our-services">
    <h1 class="our-services__title title">
      Что входит в услугу по созданию дизайна интернет-магазина?
    </h1>
    <section class="our-services__services-wrapper">
      <accordion/>
    </section>
  </section>
</template>

<script>
import Accordion from "../MainAccordion/Accordion.vue";
export default {
  components: { Accordion },
};
</script>

<style lang="scss">
.our-services {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #daecff;
  padding: 120px 0;
  margin: 0 0 123px 0;
  
  &__title {
    text-align: center;
    font-weight: 800;
    margin: 0 0 75px 0;
    position: relative;
    &::after {
    content: '';
    width: 133px;
    height: 148px;
    background-repeat: no-repeat;
    background-image: url('../../assets/bag.png');
    position: absolute;
    top: 344px;
    right: -254px;
  }
  }

  &__services-wrapper {
    max-width: 1169px;
    width: 100%;
  }
}
@media (max-width: 1645.98px) {
  .our-services {
  &__title {
    &::after {
    right: -182px;
  }
  }
}
}
@media (max-width: 1500.98px) {
  .our-services {
  &__title {
    &::after {
      width: 0;
      height: 0;
      background-image: none;
  }
  }
}
}
@media (max-width: 1195.98px) {
   .our-services {
    padding: 120px 1.53%;
   }
}
@media (max-width: 767.98px) {
  .our-services {
    padding: 16px 20px;
  .our-services__title {
    font-size: 1.4375rem;
    line-height: 150%;
    margin-bottom: 17px;
    max-width: 390px;
    width: 100%;
  }
}
}
@media (max-width: 380.98px) {
  .our-services {
  .our-services__title {
    max-width: 290px;
  }
}
}
</style>

<template>
  <section class="our-services">
    <h1 class="our-services__title title">
      Что входит в услугу по созданию дизайна интернет-магазина?
    </h1>
    <section class="our-services__services-wrapper">
      <Accordion />
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
  display: none;//flex
  flex-direction: column;
  align-items: center;
  background: #daecff;
  padding: 120px 0;
  margin: 0 0 123px 0;
  
  &__title {
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

</style>

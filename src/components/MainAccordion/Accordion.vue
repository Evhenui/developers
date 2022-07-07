<template>
  <div class="accordions">
    
    <dl
      v-for="(item, index) in ACCORDION_ITEMS"
      :key="'item' + index"
      class="accordions__fiels"
      @click="active = !active"
    >
      <dt @click="item.open = !item.open" class="accordions__title description">
        {{ item.title }}
        <div 
            class="accordions__arrow"
            :class="{'active' : item.open}"
        ></div>
      </dt>
      <dd v-if="item.open" class="accordions__description description">
        {{ item.subtitle }}
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data(){
        return {
            active: false
        }
    },
  computed: { ...mapGetters(["ACCORDION_ITEMS"]) },
};
</script>

<style lang="scss">
.accordions {
  &__fiels {
    background: #ffffff;
    border-radius: 15px;
    padding: 14px 0 15px 96px;
    max-width: 1169px;
    width: 100%;
    cursor: pointer;
  }

  &__title {
    font-size: 1.125rem;
    line-height: 175%;
    position: relative;
    &::before {
      content: "";
      width: 24px;
      height: 24px;
      background: #75e169;
      position: absolute;
      border-radius: 50%;
      top: 7%;
      left: -5%;
    }
  }
  &__arrow {
    display: block;
    position: absolute;
    width: 24.38px;
    height: 30px;
    top: 15px;
    right: 40px;
    
    &::before {
      content: "";
      background: #000000;
      width: 100%;
      height: 2px;
      position: absolute;
      left: -6px;
      transform: rotate(45deg);
      transition: all .1s;
    }
    &::after {
      content: "";
      background: #000000;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 10px;
      transform: rotate(-45deg);
      transition: all 0.1s;
    }
  }
  .active {
    &::after {
        transform: rotate(45deg);
    }
    &::before {
        transform: rotate(-45deg);
        
    }
  }

  &__description {
  }
}
.description {
}
</style>

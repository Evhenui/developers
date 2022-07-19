<template>
  <div class="accordions">
    <dl
      v-for="(item, index) in ACCORDION_ITEMS"
      :key="'item' + index"
      class="accordions__fiels"
      @click="active = !active"
    >
      <dt
        @click="item.open = !item.open"
        class="accordions__title description"
        :class="{ 'active-circle': item.open }"
      >
        {{ item.title }}
        <div class="accordions__arrow" :class="{ active: item.open }">
          <svg
            width="26"
            height="14"
            viewBox="0 0 26 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3362 13.2888C12.4233 13.3761 12.5268 13.4454 12.6406 13.4926C12.7545 13.5399 12.8766 13.5642 13 13.5642C13.1233 13.5642 13.2454 13.5399 13.3593 13.4926C13.4732 13.4454 13.5766 13.3761 13.6637 13.2888L24.9137 2.03878C25.0897 1.86275 25.1886 1.62399 25.1886 1.37503C25.1886 1.12608 25.0897 0.887321 24.9137 0.711284C24.7377 0.535246 24.4989 0.43635 24.25 0.43635C24.001 0.43635 23.7622 0.535246 23.5862 0.711284L13 11.2994L2.41371 0.711284C2.23768 0.535246 1.99892 0.43635 1.74996 0.43635C1.50101 0.43635 1.26225 0.535246 1.08621 0.711284C0.910176 0.887321 0.811279 1.12608 0.811279 1.37503C0.811279 1.62399 0.910176 1.86275 1.08621 2.03878L12.3362 13.2888Z"
              fill="black"
            />
          </svg>
        </div>
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
  data() {
    return {
      active: false,
    };
  },
  computed: { ...mapGetters(["ACCORDION_ITEMS"]) },
};
</script>

<style lang="scss">
.accordions {
  &__fiels {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: #ffffff;
    border-radius: 15px;
    padding: 14px 23.44px 15px 96px;
    max-width: 1169px;
    width: 100%;
    margin: 0 0 10px 0;
    cursor: pointer;
  }

  &__title {
    font-size: 1.125rem;
    line-height: 175%;
    position: relative;
    transition: all 0.2s;
    &::before {
      content: "";
      width: 24px;
      height: 24px;
      background: #75e169;
      position: absolute;
      border-radius: 50%;
      top: 0.3em;
      left: -5%;
    }
  }
  .active-circle {
    font-weight: 700;
    font-size: 1.3125rem;
    margin: 0 0 41px 0;
    transition: all 0.3s;
    &::before {
      background: #67aefc;
    }
  }
  &__arrow {
    display: block;
    position: absolute;
    top: 0px;
    right: 9px;
    transition: all 0.3s;
  }
  .active {
    transform: rotate(0.5turn);
  }
  &__description {
    max-width: 1004px;
    width: 100%;
    position: relative;
    line-height: 175%;
    font-size: 1.125rem;
    margin: 0 0 39px 0;
    &::before {
      content: "";
      width: 1px;
      height: 100%;
      background-color: rgb(0, 0, 0);
      position: absolute;
      top: 0;
      left: -4%;
    }
  }
}
@media (max-width: 767.98px) {
  .accordions {
    &__fiels {
      padding-left: 63px;
    }
    &__title {
      font-size: 1.0625rem;
      &::before {
        width: 15px;
        height: 15px;
        top: 0.4em;
        left: -5%;
      }
    }
    .active-circle {
      margin-bottom: 19px;
      font-size: 1.0625rem;
    }
    &__description {
      font-size: 1.0625rem;
      margin-bottom: 46px;
      &::before {
        left: -4%;
      }
    }
  }
}
@media (max-width: 535.98px) {
  .accordions {
    &__fiels {
      padding: 14px 60px 15px 50px;
    }
    &__title {
      &::before {
        top: 0.4em;
        left: -11%;
      }
    }
    &__arrow {
      right: -30px;
    }

    &__description {
      &::before {
        left: -9%;
      }
    }
  }
}

</style>

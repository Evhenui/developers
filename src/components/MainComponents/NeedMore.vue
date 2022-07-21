<template>
  <section class="need-more section">
    <section class="need-more__left-section section__left-info">
      <div class="need-more__img-top-wrapper section__img-top-wrapper">
        <img
          src="../../assets/shape-sphere.png"
          alt="decore shape sphere"
          width="52.57"
          height="52.57"
        />
      </div>
    </section>
    <section class="need-more__central-section section__central-block">
      <h1 class="need-more__title section__title title">
        Необходимо больше информации?
      </h1>
      <div class="need-more__img-mobile">
        <img
          src="../../assets/mobile-img/orders-mobile.png"
          alt="basket picture"
          width="260"
          height="182"
        />
      </div>

      <p class="need-more__subtitle section__subtitle description">
        Если Вы владелец онлайн-магазина или только начинаете свой путь в
        электронной коммерции и вам нужен уникальный дизайн онлайн магазина для
        стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий
        период времени, он поможет визуализировать ваш веб проект.
      </p>
      <button class="need-more__btn section__btn btn">Оставить заявку</button>
    </section>
    <section class="need-more__right-section section__right-block">
      <div class="need-more__img-wrapper section__img-wrapper">
        <img
          class="need-more__img"
          src="../../assets/orders.png"
          alt="basket picture"
          width="689.51"
          height="483"
        />
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.need-more {
  display: flex;
  flex-direction: row;
  padding: 136px 144.88px 140px 153px;
  column-gap: 48px;
  &__left-section {
    margin: 0 114.8px 0 0;
  }
  &__img-mobile {
    display: none;
  }
  &__img-top-wrapper {
    padding-top: 13px;
    max-width: 53px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }

  &__central-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 78px;
  }

  &__title {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 53px;
  }

  &__subtitle {
    max-width: 669.65px;
    font-size: 1.125rem;
    margin-bottom: 45px;
  }

  &__btn {
    padding: 21px 55.63px;
    font-size: 0.9375rem;
  }

  &__img-wrapper {
    max-width: 689.51px;
  }
}
@media (max-width: 1500.98px) {
  .need-more {
    padding: 100px 40.88px 100px 40px;
    &__left-section {
      margin: 0 22.8px 0 0;
    }
    &__right-section {
      padding-top: 100px;
    }
  }
}
@media (max-width: 991.98px) {
  .need-more {
    padding: 43px 40.88px 100px 40px;
    &__central-section {
      padding: 0;
    }
    &__left-section {
      display: none;
    }
    &__right-section {
      padding-top: 100px;
    }
  }
}
@media (max-width: 767.98px) {
  .need-more {
    padding: 43px 20px 50px 20px;
    &__left-section,
    &__right-section {
      display: none;
    }
    &__img-mobile {
      display: block;
      max-width: 260px;
      width: 100%;
      margin-bottom: 29px;
      img {
        width: 100%;
        height: auto;
      }
    }

    &__central-section {
      align-items: center;
      position: relative;
      &:after {
        content: '';
        background-repeat: no-repeat;
        background-image: url('../../assets/mobile-img/shape-sphere-accardion.png');
        width: 41px;
        height: 41px;
        position: absolute;
        top: -9%;
        right: 3%;
      }
    }

    &__title {
      text-align: center;
      font-size: 1.4375rem;
      line-height: 150%;
      margin-bottom: 27px;
    }

    &__subtitle {
      font-size: 1.0625rem;
      line-height: 175%;
    }

    &__btn {
      padding: 21px 87.63px;
    }

    &__img-wrapper {
      display: none;
    }
  }
}
</style>

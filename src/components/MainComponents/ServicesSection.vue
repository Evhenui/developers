<template>
  <section class="services section">
    <section class="services__left-section section__left-info">
      <div class="services__img-top-wrapper section__img-top-wrapper">
        <img
          src="../../assets/shape-sphere.png"
          alt="decore shape sphere"
          width="52.57"
          height="52.57"
        />
      </div>
      <div class="services__img-bottom-wrapper">
        <img
          src="../../assets/Ellipse.png"
          alt="some figures"
          width="147"
          height="183"
        />
      </div>
    </section>
    <section
      class="services__central-section section__central-block section__central-block-mobile"
    >
      <h1 class="services__title section__title title">
        Разработка интернет-магазина с нуля за неделю
      </h1>
      <p class="services__subtitle section__subtitle description">
        Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета -
        от фирменного стиля до пользовательского интерфейса в сжатые сроки с
        командой Virtual Designers
      </p>
      <button class="services__btn section__btn btn">Заказать</button>
    </section>
    <section class="services__right-section section__right-block">
      <div class="services__img-wrapper section__img-wrapper">
        <img
          src="../../assets/Ellipse-right.png"
          alt="basket picture"
          width="609.5"
          height="548"
        />
      </div>
    </section>
    <section class="services__bottom-section-mobile">
      <div class="services__mobile-img-wrapper-left">
        <img src="../../assets/mobile-img/elipse.png" alt="elipese" />
      </div>
      <div class="services__mobile-img-wrapper-center">
        <img
          src="../../assets/mobile-img/basket-cart-mobile.png"
          alt="basket picture"
          width="209"
          height="204"
        />
      </div>
      <div class="services__mobile-img-wrapper-right">
        <img src="../../assets/mobile-img/ellipse-main.png" alt="" />
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.services {
  display: flex;
  min-height: 766px;
  &__img-top-wrapper {
    padding: 38px 0 0 239px;
    margin: 0 83.43px 0 0;
  }
  &__left-section {
    display: flex;
  }
  &__img-bottom-wrapper {
    font-size: 0;
    position: relative;
    padding: 0px 0 123px 0px;
    &::after {
      content: "";
      width: 171px;
      height: 63px;
      background-repeat: no-repeat;
      background-image: url("../../assets/figures.png");
      position: absolute;
      top: 23%;
      left: 22%;
    }
  }

  &__central-section {
    padding: 89px 0 0 0;
    margin: 0 19.42% 0 0;
    align-items: flex-start;
    flex-direction: column;
  }

  &__title {
    font-weight: 900;
    font-size: 3.125rem;
    line-height: 125%;
    margin: 0 0 20px 0;
    max-width: 570px;
    width: 100%;
  }

  &__subtitle {
    font-size: 1rem;
    margin: 0 0 58px 0;
    max-width: 425px;
  }

  &__btn {
    padding: 23px 92px 22px 92px;
  }

  &__right-section {
    font-size: 0;
    position: relative;
    &::after {
      content: "";
      width: 776px;
      height: 614px;
      background-repeat: no-repeat;
      background-image: url("../../assets/basket-cart.png");
      position: absolute;
      top: 30px;
      left: -50%;
    }
    &::before {
      content: "";
      width: 115px;
      height: 57px;
      background-repeat: no-repeat;
      background-image: url("../../assets/shape-cylinder.png");
      position: absolute;
      top: 10px;
      left: -81px;
    }
  }
  &__bottom-section-mobile {
    display: none;
  }
  &__img-wrapper {
    max-width: 609.5px;
  }
}
@media (max-width: 1710.98px) {
  .services {
    &__central-section {
      margin-right: 15%;
    }
    &__img-top-wrapper {
      padding-left: 170px;
    }
  }
}
@media (max-width: 1550.98px) {
  .services {
    padding-left: 10.53%;
    min-height: 680px;
    &__left-section {
      display: none;
    }
    &__central-section {
      padding: 0;
    }
    &__right-section {
      &::before {
        width: 100px;
        height: 40px;
        left: -10%;
        top: 10%;
        background-size: 74%;
      }
      &::after {
        width: 410px;
        height: 264px;
        left: -10%;
        top: 13%;
        background-size: 74%;
      }
    }
  }
}
@media (max-width: 1180.98px) {
  .services {
    padding-left: 5.53%;
    min-height: 650px;
    &__central-section {
    }
  }
}
@media (max-width: 991.98px) {
  .services {
    padding-left: 1.53%;
    &__right-section {
      &::before {
        width: 87px;
        left: -3%;
        top: 6%;
      }
      &::after {
        width: 310px;
        height: 264px;
        left: -10%;
        top: 10%;
        background-size: 74%;
      }
    }
  }
}
@media (max-width: 767.98px) {
  .services {
    flex-direction: column-reverse;
    padding: 35px 0 0 0;

    .services__central-section {
      margin: 0;
      padding: 0 20px;
      display: flex;
      align-items: center;
      margin: 0 0 51px 0;
    }

    &__bottom-section-mobile {
      display: flex;
      margin-bottom: 40px;
      justify-content: space-between;
    }

    &__mobile-img-wrapper-left,
    &__mobile-img-wrapper-center,
    &__mobile-img-wrapper-right {
      position: relative;
      &::after {
        content: "";
        background-repeat: no-repeat;
        position: absolute;
      }
      &::before {
        content: "";
        background-repeat: no-repeat;
        position: absolute;
      }
    }
    &__mobile-img-wrapper-left {
      &::after {
        top: 0;
        left: 146px;
        width: 47px;
        height: 22px;
        background-image: url('../../assets/mobile-img/elipse-shape-cylinder-before.png');
      }
      &::before {
        top: 208.95px;
        left: 0;
        width: 67px;
        height: 26px;
        background-image: url('../../assets/mobile-img/elipse-wave-after.png');
      }
    }

    &__mobile-img-wrapper-center {
      padding-top: 52px;
      z-index: 2;
      position: absolute;
      left: 82px;
      img {
        position: relative;
      }
      &::after {
        top: 81px;
        right: -45px;
        width: 91px;
        height: 33px;
        background-image: url('../../assets/mobile-img/basket-wave-after.png');
      }
      &::before {
        z-index: 0;
        top: 124px;
        left: -30px;
        width: 78px;
        height: 28px;
        background-image: url('../../assets/mobile-img/basket-wave-before.png');
      }
    }

    &__mobile-img-wrapper-right {
      padding-top: 7px;
      img {
        position: relative;
        z-index: 1;
      }
      &::after {
        z-index: 1;
        top: 131px;
        left: 110px;
        width: 24px;
        height: 23px;
        background-image: url('../../assets/mobile-img/main-elipse-shape-sphere-after.png');
      }
      &::before {
        top: 239px;
        left: 134px;
        width: 26px;
        height: 26px;
        background-image: url('../../assets/mobile-img/main-elipse-shape-sphere-before.png');
      }
    }

    &__title {
      font-size: 1.6875rem;
      line-height: 120%;
      max-width: 317px;
      margin-bottom: 22px;
    }

    &__subtitle {
      max-width: 317px;
      margin-bottom: 34px;
    }

    .services__btn {
      border-radius: 10px;
      padding: 23px 115px 22px 115px;
    }

    &__right-section {
      display: none;
    }
  }
}
@media (max-width: 339.98px) {
  .services {
    &__mobile-img-wrapper-center {
      left: 35px;
    }
    .services__btn {
          padding: 23px 90px 22px 90px;
    }
  }
}
</style>

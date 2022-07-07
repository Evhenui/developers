<template>
  <section class="services">
    <section class="services__left-section">
      <div class="services__img-top-wrapper">
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
    <section class="services__central-section">
      <h1 class="services__title title">
        Разработка интернет-магазина с нуля за неделю
      </h1>
      <p class="services__subtitle description">
        Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета -
        от фирменного стиля до пользовательского интерфейса в сжатые сроки с
        командой Virtual Designers
      </p>
      <button class="services__btn btn">Заказать</button>
    </section>
    <section class="services__right-section">
      <div class="services__img-wrapper">
        <img
          src="../../assets/Ellipse-right.png"
          alt="basket picture"
          width="609.5"
          height="548"
        />
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
  &__left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 83.43px 0 0;
  }

  &__img-top-wrapper {
    font-size: 0;
    padding: 38px 0 0 239px;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 373px 0 0;
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
    line-height: 140%;
    margin: 0 0 58px 0;
    max-width: 425px;
    width: 100%;
  }

  &__btn {
    padding: 23px 92px 22px 92px;
    &:hover {
      outline: 2px solid #67aefc;
    }
    &:active {
      background: #67aefc;
    }
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
  }
}
</style>

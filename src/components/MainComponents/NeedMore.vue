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
      <p class="need-more__subtitle section__subtitle description">
        Если Вы владелец онлайн-магазина или только начинаете свой путь в 
        электронной коммерции и вам нужен уникальный дизайн онлайн магазина
         для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену
         и короткий период времени, он поможет  визуализировать ваш веб проект.
      </p>
      <button class="need-more__btn section__btn btn">Оставить заявку</button>
    </section>
    <section class="need-more__right-section section__right-block">
      <div class="need-more__img-wrapper section__img-wrapper">
        <img
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
export default {

}
</script>

<style lang="scss">
.need-more {
   padding: 0 144.88px 0 153px;
		&__left-section {
      margin: 0 162.8px 0 0;
		}

    &__img-top-wrapper {
      padding-top: 13px;
    }

		&__central-section {
      padding-top: 78px;
      margin-right: 48px;
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
</style>
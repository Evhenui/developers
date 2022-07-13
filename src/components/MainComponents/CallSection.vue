<template>
  <section class="call">
    <section class="call__left-section">
      <img
        src="../../assets/phone-call.png"
        alt="call"
        width="329"
        height="339"
      />
    </section>
    <section class="call__central-section">
      <h1 class="call__title title">Обсудить проект</h1>
      <p class="call__subtitle description">
        Расскажите о своих бизнес-целях и мы поможем вам в их достижении
      </p>
      <form action="" class="call__form" @submit.prevent="checkForm">
        <div class="call__input-login">
          <input
            type="text"
            class="call__login"
            placeholder="Имя"
            v-model.trim="form.login"
            @keydown.space.prevent
            maxlength="20"
            minlength="4"
            :class="v$.form.login.$error ? 'is-invalid' : ''"
          />
          <span
            class="input-error"
            v-if="v$.form.login.$dirty && v$.form.login.required.$invalid"
            >Ошибка! Поле не должно быть пустым!
          </span>
          <span
            class="input-error"
            v-if="v$.form.login.$dirty && v$.form.login.minLength.$invalid"
          >
            Не менее 4 букв!
          </span>
          <span
            class="input-error"
            v-if="
              v$.form.login.$dirty &&
              v$.form.login.letter.$invalid
            "
          >
            Только латинские буквы!
          </span>
        </div>

        <div class="call__input-login">
          <input
            type="text"
            class="call__social-networks"
            placeholder="Telegram/Viber"
            v-model.trim="form.socialNetworks"
            @keydown.space.prevent
            :class="v$.form.socialNetworks.$error ? 'is-invalid' : ''"
          />
          <span
            class="input-error"
            v-if="
              v$.form.socialNetworks.$dirty &&
              v$.form.socialNetworks.required.$invalid
            "
            >Ошибка! Поле не должно быть пустым!
          </span>
          <span
            class="input-error"
            v-if="
              v$.form.socialNetworks.$dirty &&
              v$.form.socialNetworks.minLength.$invalid
            "
          >
            Не менее 8 символов!
          </span>
          <span
            class="input-error"
            v-if="
              v$.form.socialNetworks.$dirty &&
              v$.form.socialNetworks.letter.$invalid
            "
          >
            Только латинские буквы!
          </span>
          <span
            class="input-error"
            v-if="
              v$.form.socialNetworks.$dirty &&
              v$.form.socialNetworks.telegram.$invalid
            "
          >
            Введите корректную ссылку на социальную сеть!
          </span>
        </div>
        <div class="call__input-login">
          <input
            type="email"
            class="call__email test"
            placeholder="Email"
            v-model.trim="form.email"
            @keydown.space.prevent
            :class="v$.form.email.$error ? 'is-invalid' : ''"
          />
          <span
            class="input-error"
            v-if="
              v$.form.email.$dirty &&
              v$.form.email.required.$invalid
            "
            >Ошибка! Поле не должно быть пустым!
          </span>
          <span
            class="input-error"
            v-if="
              v$.form.email.$dirty &&
              v$.form.email.email.$invalid
            "
          >
            Введите корректный email!
          </span>
        </div>
        <button class="call__btn btn" type="submit" >Отправить</button>
      </form>
    </section>
    <section class="call__right-section">
      <img src="../../assets/shape-wave-call.png" alt="figure" />
    </section>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";


const letter = helpers.regex(/^[a-zA-Z][^\s]*$/)
const telegram = (value) => !helpers.req(value) || value.startsWith('t.me/');

export default {
  data: () => ({
    v$: useVuelidate(),
    form: {
      login: "",
      socialNetworks: "",
      email: "",
    },

  }),
  validations() {
    return {
      form: {
        login: { required, minLength: minLength(4), letter },
        socialNetworks: { required, minLength: minLength(8), letter, telegram },
        email: { required, email },
      },
    };
  },
  methods: {
    checkForm() {
      this.v$.$validate();
      if(this.v$.$error) {
        alert('Ошибка')
      } else {
        alert('Данные отправлены')
        location.reload();
      }
    },
  },
};
</script>

<style lang="scss">
.call {
  padding: 180px 232px 0 232px;
  background-color: #daecff;
  min-height: 774px;
  display: flex;
  justify-content: space-between;
  &__left-section {
  }

  &__central-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-weight: 800;
    font-size: 2rem;
    line-height: 125%;
    margin-bottom: 10px;
  }

  &__subtitle {
    text-align: center;
    max-width: 500px;
    width: 100%;
    font-size: 1.125rem;
    line-height: 175%;
    margin-bottom: 27px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__input-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 25px;
    }
    .input-error {
      font-family: "Montserrat", sans-serif;
      color: #484848;
    }
    input {
      border: 1px solid #67aefc;
      border-radius: 10px;
      padding: 19px 420px 19px 14px;
      margin-bottom: 5px;
      &::placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: #939393;
      }
      &:focus,
      &:active,
      &:read-only,
      &:read-write {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: #292929;
      }
      &:focus,
      &:active {
        outline: 2px solid #67aefc;
        &::placeholder {
          color: #292929;
        }
      }
    }
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
  }
  .is-invalid {
    border: 1px solid red;
  }
}
</style>

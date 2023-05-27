<template>
  <section class="registForm">
    <v-sheet class="aling-center content pa-10">
      <v-form ref="form">
        <h2>Регистрация</h2>
        <v-text-field
          v-model="username"
          class="nickName"
          :counter="30"
          :rules="nameRules"
          label="Введите никнейм"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          class="email"
          :rules="emailRules"
          label="Введите почту"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          class="password"
          type="password"
          :rules="passwordRules"
          label="Введите пароль"
          required
        ></v-text-field>
  
        <div class="d-flex flex-column">
          <v-btn
            color="rgba(69, 39, 160, 1)"
            style="color: white"
            class="mt-4"
            block
            @click="validate"
          >
            Зарегистрироваться
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </section>
  </template>
  
  <script>
  export default {
    components: {
      
    },
    data: () => ({
      valid: true,
        username: '',
        email: '',
        password: '',
        nameRules: [
          value => !!value || 'Введите никнейм',
          value => (value && value.length <= 30) || 'Никнейм не должен быть длиннее 30 символов',
        ],
        emailRules: [
            value => {
                if (value && /.+@.+\..+/.test(value)) return true

                return 'Ваедите валидную почту вида mail@mail.ru'
            }
        ],
        passwordRules: [
          value => {
            if (value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/) return true

            return 'Ведите пароль корректно'
          },
        ],
      }),
  
      methods: {
        async validate () {
          const { valid } = await this.$refs.form.validate()
  
          if (valid) alert('Данные отправлены')
        },
      },
  }
  </script>
  
  <style scoped>
  .registForm {
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 10%;
  }
  .content{
    width: 50%;
    background: #7E57C2;
    margin: 0 auto;
  }
  h2{
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
  }
  .nickName, .password, .email{
    color: rgba(255, 255, 255, 1);
  } 
  </style>
  
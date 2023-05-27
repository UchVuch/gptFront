<template>
  <section class="formLogin">
    <v-sheet class="aling-center content pa-10" >
    <v-form ref="form">
      <h2>Аутентификация</h2>
      <v-text-field
        class="nickName"
        v-model="username"
        :counter="30"
        :rules="nameRules"
        label="Введите никнейм"
        required
      ></v-text-field>
      <v-text-field
        class="password"
        v-model="password"
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
          height=52px
          width=150px
        >
          Войти
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
      password: '',
      nameRules: [
        value => !!value || 'Зведите никнейм',
        value => (value && value.length <= 30) || 'Никнейм не должен быть длиннее 30 символов',
      ],
      passwordRules: [
        value => !!value || 'Введите пароль'
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
.formLogin {
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
.nickName, .password{
  color: white;
}
h2{
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: white;
  margin-bottom: 20px;
}
</style>

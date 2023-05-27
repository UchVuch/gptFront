<template>
    <v-sheet width="300" class="mx-auto">
      <v-form ref="form">
        <v-text-field
          v-model="username"
          :counter="30"
          :rules="nameRules"
          label="Введите никнейм"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Введите почту"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          :rules="passwordRules"
          label="Введите пароль"
          required
        ></v-text-field>
  
        <div class="d-flex flex-column">
          <v-btn
            color="primary"
            class="mt-4"
            block
            @click="validate"
          >
            Зарегистрироваться
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
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
  
  </style>
  
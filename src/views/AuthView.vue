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
          Войти
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

</style>

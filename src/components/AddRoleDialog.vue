<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <div class="content">
        <h3>Создание роли</h3>
        <v-text-field v-model="nameRole" :rules="nameRoleRules" label="Название роли" required></v-text-field>
        <v-text-field v-model="description" :rules="descriptionRules" label="Введите описание роли"
          required></v-text-field>
        <v-text-field v-model="prompt" :rules="promtRules" label="Введите промт" required></v-text-field>

        <v-card-actions class="d-flex align-center">
          <v-btn color="rgba(69, 39, 160, 1)" variant="tonal"
           style="color: white" @click="hideDialog" class="mr-1">Отмена</v-btn>
          <v-btn color="rgba(69, 39, 160, 1)" variant="tonal"
           style="color: white" @click="hideDialog" class="ml-1">Создать</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'add-role-dialog',
  data: () => ({
    dialog: false,
    // двустороннее связывание с полями формы, правила валидации
    nameRole: '',
    nameRoleRules: [
      value => {
        if (value) return true

        return 'Название не должно быть пустым.'
      },
    ],
    description: '',
    descriptionRules: [
      value => {
        if (value) return true

        return 'Описание роли не должно быть пустым.'
      },
    ],
    prompt: '',
    promtRules: [
      value => {
        if (value) return true

        return 'Содержание промта не должно быть пустым.'
      },
    ],
  }),

  methods: {
    hideDialog() {
      this.$emit('hide')
    }
  },
}
</script>

<style scoped>
.content {
  background: #7E57C2;
  padding: 20px;
}

h3 {
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
}
</style>

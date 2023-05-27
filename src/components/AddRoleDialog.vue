<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >

      <v-card>
        <div class="content">
            <h3>Название роли</h3>
        <v-text-field
          v-model="nameRole"
          :rules="nameRoleRules"
          label="Название роли"
          required
        ></v-text-field>
        <h3>Содержание промта</h3>
        <v-text-field
          v-model="prompt"
          :rules="promtRules"
          label="Название роли"
          required
        ></v-text-field>
        
        <v-card-actions>
            <v-btn variant="outlined" @click="hideDialog">Отмена</v-btn>
            <v-btn variant="outlined" @click="hideDialog">Создать</v-btn>
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
    .content{
        padding: 20px;
    }
</style>

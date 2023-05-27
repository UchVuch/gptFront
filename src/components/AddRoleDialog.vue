<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Создать роль
        </v-btn>
      </template>

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
          v-model="promt"
          :rules="promtRules"
          label="Название роли"
          required
        ></v-text-field>
        
        <v-card-actions>
            <v-btn variant="outlined">Отмена</v-btn>
            <v-btn variant="outlined">Создать</v-btn>
        </v-card-actions>
        </div> 
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data: () => ({
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
    dialog: false,
  })
}
</script>

<style scoped>
    .content{
        padding: 20px;
    }
</style>

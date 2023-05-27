<template>
  <section class="profile">
    <div class="profile__left">
      <div class="user-card">
        <div class="user-card__left">
          <img  class="user-card__image" src="@/assets/user-avatar.png" width="48" height="48" alt="Ваше фото">
        </div>
        <div class="user-card__right">
          <h3 class="user-card__title">Ваши данные</h3>
          <ul class="user-card__list">
            <li class="user-card__item">
              <span>Логин</span>
              <v-text-field 
                v-model="userInfo.username" 
                variant="outlined" 
                density="compact" 
                hide-details
                :disabled="!editUser"
              >
              </v-text-field>
            </li>
            <li class="user-card__item">
              <span>Почта</span>
              <v-text-field 
                v-model="userInfo.mail" 
                variant="outlined" 
                density="compact" 
                hide-details
                :disabled="!editUser"
              >
              </v-text-field>
            </li>
            <li class="user-card__item">
              <span>Ваше имя</span>
              <v-text-field 
                v-model="userInfo.name" 
                variant="outlined" 
                density="compact" 
                hide-details
                :disabled="!editUser"
              >
              </v-text-field>
            </li>
          </ul>
          <v-btn 
            v-if="!editUser"
            color="primary" 
            width="100%" 
            @click="editUser = true"
          >
            Изменить
          </v-btn>
          <v-btn 
            v-if="editUser"
            class="mr-4"
            @click="editUser = false"
          >
            Назад
          </v-btn>
          <v-btn 
            v-if="editUser" 
            color="primary"
          >
            Сохранить
          </v-btn>
        </div>
      </div>
    </div>
    <div class="profile__right">
      <div class="profile__content">
        <v-btn
          color="primary"
          @click="addRole = true"
        >
          Сохранить
        </v-btn>
        <add-role-dialog v-model="addRole" @hide="addRole = false"></add-role-dialog>
        <v-tabs
          v-model="currentTab"
          fixed-tabs
          bg-color="transparent"
          color="primary"
          class="mt-2 mb-5"
        >
          <v-tab value="1">
            показать избранное  
          </v-tab>
          <v-tab value="2"> 
            искать роли
          </v-tab>
        </v-tabs>

        <v-window v-model="currentTab">
          <v-window-item value="1">
            <ul class="role__list">
              <template v-for="role in roleList">
                <li class="role__item">
                  <v-card variant="outlined" class="text-left role__card">
                    <v-icon
                        @click="addRoleToFavorites"
                        icon="mdi-star"
                        size="small"
                        class="role__star"
                      ></v-icon>
                    <v-card-title>
                      Название роли
                    </v-card-title>
                    <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" width="48%">Убрать</v-btn>
                      <v-btn color="primary" width="48%">Выбрать</v-btn>
                    </v-card-actions>
                  </v-card>
                </li>
              </template>
            </ul>
          </v-window-item>
          <v-window-item value="2">
            <div class="role__controls">
              <v-btn color="primary" height="56">От А до Я</v-btn>
              <v-btn color="primary" height="56">От Я до А</v-btn>
              <v-text-field
                v-model="searchRolesNames"
                loading
                placeholder="Поиск.."
                hide-details="auto"
              >
                <template v-slot:loader>
                  <v-progress-linear
                    :active="loadingRoles"
                    color="primary"
                    absolute
                    height="3"
                    indeterminate
                  ></v-progress-linear>
                </template>
              </v-text-field>
            </div>
              <ul class="role__list">
              <template v-for="role in roleList">
                <li class="role__item">
                  <v-card variant="outlined" class="text-left role__card">
                    <v-icon
                      @click="addRoleToFavorites"
                      icon="mdi-star"
                      size="small"
                      class="role__star"
                    ></v-icon>
                    <v-card-title>Название роли</v-card-title>
                    <v-card-text>Greyhound divisively hello coldly wonderfully marginally far upon excluding.</v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" width="48%">Убрать</v-btn>
                      <v-btn color="primary" width="48%">Выбрать</v-btn>
                    </v-card-actions>
                  </v-card>
                </li>
              </template>
            </ul>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </section>
</template>
<script>
import AddRoleDialog from '../components/AddRoleDialog.vue'
export default {
  components: {AddRoleDialog},
  mounted() {
    // this.getUserInfo()
  },

  data: () => ({
    // :model-value="progress" (было в лоадере, но без него тоже работает вроде)
    addRole: false,
    editUser: false,
    loadingRoles: true,
    searchRolesNames: '',
    currentTab: '1',
    tabs: ['1', '2'],
    userInfo: {username: 'user', mail: 'mail@mail.ru', name: 'Илья'},
    roleList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
  }),

  methods: {
    async getUserInfo() {
      console.log(true)
      try {
        const req = await fetch('http://192.168.100.166/users/add_test')
        const data = await req.json()
        console.log(data.data)
      } catch (err) {
        console.log(err)
      }      
    },
    addRoleToFavorites() {
      console.log('Добавить в избранное')
    },
  }
}
</script>

<style scoped>
.role__card{
  position: relative;
}
.role__star{
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 20;
  cursor: pointer;
}
.role__controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.role__list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
}
.role__item {
  width: 242px;
}
.profile {
  display: flex;
  gap: 20px;
  padding-bottom: 65px;
}
.profile__left {
  max-width: 320px;
  width: 100%;
}
.profile__right {
  width: 100%;
}
.user-card {
  display: flex;
  gap: 10px;
  padding: 25px 20px;
  background-color: #7E57C2;
  border-radius: 4px;
}
.user-card__right {
  flex: 1 0 auto;
  color: #FFFFFF;
}
.user-card__title {
  display: inline-block;
  border-bottom: 1px solid #fff;
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.user-card__list {
  list-style-type: none;
  text-align-last: left;
  margin-bottom: 15px;
}
.user-card__item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.user-card__item:last-child {
  margin-bottom: 0;
}
.user-card__text {
  font-size: 14px;
}
</style>

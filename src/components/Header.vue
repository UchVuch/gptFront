<template>
  <header class="d-flex flex-row justify-space-between align-center py-2">
    <router-link to="/" class="naming d-flex flex-row align-center">
      <img class="mr-2" src="@/assets/Logo.svg" alt="(-:-)">
      <p class="gradient">notFive-GPT</p>
    </router-link>
    <nav class="d-flex flex-row align-center">
      <router-link class="mr-3" to="/possibility">Возможности</router-link>
      <hr class="mr-3" style="height: 32px; border: none; border-right: 1px solid#D1C4E9;">
      <router-link class="mr-3" to="/auth" v-if=" ($route.name === 'register' || $route.name === 'home')  && isAuth === false">Войти</router-link>
      <router-link class="mr-3" to="/register" v-if=" ($route.name === 'home' || $route.name === 'auth') && isAuth === false">Зарегистрироваться</router-link>
      <router-link class="mr-3" to="/profile" v-if="$route.name === 'home' && isAuth ">Профиль</router-link>
      <router-link class="mr-3" to="/" v-if="$route.name === 'profile' && isAuth ">Перейти к чатам</router-link>
      <router-link to="/" v-if="$route.name === 'home' && isAuth ">Выйти</router-link>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'pinia';
import { useAuthStore } from '../plugins/store/auth';
export default {

  props: {
    adress: {
      type: String,
    },
  },
  methods: {
    openDetail() {
      this.showDetail = !this.showDetail;
    },
  },

  computed: {
    ...mapState(useAuthStore, {
      isAuth: 'isAuth'
    })
  },

}
</script>

<style scoped>
  header{
    padding-right: 5%;
    padding-left: 5%;
  }
  .gradient{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    background: linear-gradient(180deg, #B388FF 0%, #6200EA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  nav{
    color: #311B92;
  }
</style>
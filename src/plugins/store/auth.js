import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuth: true,
      isAdmin: false
    }
  },
  getters: {
    getIsAuth: (state) => state.isAuth,
    getIsAdmin: (state) => state.isAdmin
  },
  actions: {
    authLogin() {
      this.isAuth = true
      this.isAdmin = true
    },
    authLogout() {
      this.isAuth = false
      this.isAdmin = false
    }
  }
})
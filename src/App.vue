<template>
  <v-app class="d-flex flex-column h-100">
    <Header :url="$route.name" :isAuth = false />
    <main style="padding-right: 5%; padding-left: 5%;">
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
import Header from './components/Header.vue';
export default {
    components: {
      Header,
    },
    mounted() {
    },
    data: () => ({
    }),
}
</script>
<style scoped>
  main{
    width: 100%;
    flex: 1 0 auto;
    background-color: #EDE7F6;  
  }
  header, footer{
    background-color: #EDE7F6;
  }
</style>

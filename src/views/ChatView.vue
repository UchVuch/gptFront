<template>
  <section class="d-flex flex-row justify-space-around">
    <div class="roleAndDialog">
      <h2 class="mb-3">Роли и диалоги</h2>
      <hr>
      <v-btn height="40px" color="rgba(69, 39, 160, 1)" style="color: white" class="mt-4" block @click="redirectToPage">
        Управление ролями
      </v-btn>
      <RoleCard class="my-5" v-for="(item, index) in listMessange" :answer=item.answer :bodyMessange=item.body
        :role=currentRole :name=name />
    </div>
    <div class="chat d-flex flex-column">
      <h2>Чат</h2>
      <hr>
      <MessageCard class="my-5" v-for="(item, index) in listMessange" :answer=item.answer :bodyMessange=item.body
        :role=currentRole :name=name />
      
    </div>
  </section>
</template>

<script>
import MessageCard from '../components/MessageCard.vue'
import RoleCard from '../components/RoleCard.vue'
export default {
  components: {
    MessageCard,
    RoleCard
  },
  data: () => ({
    name: 'Вася',
    currentRole: 'Программист',
    listMessange: [{ answer: true, body: 'Я Вася красавчик' }, { answer: false, body: 'Нет Вася ты дурак, разговариваешь сам с собой' },],
    roles: ['Повар', 'Певец', 'Дотер', 'Программист'],
  }),

  methods: {
    redirectToPage() {
      this.$router.push('/profile') // здесь указывается путь к странице, на которую нужно перейти
    },
    async sendUserMessage() {
      console.log(true)
      try {
        console.log({
          role: 'user',
          login: 'login',
          prompt: `${this.messange}`
        })
        console.log(JSON.stringify({
          role: 'user',
          login: 'login',
          prompt: `${this.messange}`
        }))
        const req = await fetch('http://192.168.100.166/chat', {
          method: 'POST',
          body: JSON.stringify({
            role: 'user',
            login: 'login',
            prompt: `${this.messange}`
          })
        })

        const data = await req.json()

        // const req = await fetch('http://192.168.100.166/chat/test')
        // const data = await req.json()
        // console.log(data.message)
      } catch (err) {
        console.log(err)
      }
    },
  }
}
</script>

<style scoped>
.roleAndDialog {
  display: flex;
  flex-direction: column;
  width: 40%;
  background: #7E57C2;
  padding: 3% 2% 3% 2%;

}

.chat {
  display: flex;
  flex-direction: column;
  width: 50%;
  background: #7E57C2;
  padding: 3% 2% 3% 2%;
}
</style>
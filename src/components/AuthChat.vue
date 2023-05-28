<template>
  <section class="d-flex flex-row justify-space-around pb-10" style="height: 100%;">
    <div class="roleAndDialog">
      <h2 class="mb-3">Роли и диалоги</h2>
      <hr>
      <v-btn max-height="40px" min-height="40px" color="rgba(69, 39, 160, 1)" style="color: white" class="mt-4" block
        @click="redirectToPage">
        Управление ролями
      </v-btn>
      <RoleCard class="mt-5" v-for="(item, index) in listChat" :title=item.role :detail=item.detail />
    </div>
    <div class="chat d-flex flex-column">
      <div class="title__chat">
        <h2 class="mb-3">Чат</h2>
        <hr>
      </div>
      <div class="massege__wraper">
        <MessageCard class="my-5" v-for="(item, index) in listMessange" :answer=item.answer :bodyMessange=item.body
        :role=currentRole :name=name />
      </div>
        
      <div class="action">
        <hr>
        <input v-model="messange" class="messageInput" type="text" color=white name="textField"
          placeholder="Введите ваше сообщение">
        
        <v-btn  color="rgba(69, 39, 160, 1)" height="40px" style="color: white" @click="sendUserMessage">
          Отправить
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import MessageCard from '../components/MessageCard.vue'
import RoleCard from '../components/RoleCard.vue'
export default {
  name: 'auth-chat',
  components: {
    MessageCard,
    RoleCard
  },
  data: () => ({
    messange: '',
    name: 'Вася',
    currentRole: 'Программист',
    listMessange: [{ answer: true, body: 'Привет, я программист и готов тебе помочь с написанием кода' }, { answer: false, body: 'Хорошо, теперь буду знать' },],
    roles: ['Повар', 'Певец', 'Дотер', 'Программист'],
    // Переменная для отображения списка чатов. Структура устроена на вход множество состоящие из роли и списка достпуных чатов с этой ролью
    listChat: [{ role: 'Повар', detail: ['Блинчики с мясом', 'Рыбные котлеты'] }, { role: 'Певец', detail: ['За деньги ДА'] }]

  }),

  methods: {
    redirectToPage() {
      this.$router.push('/profile')
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
.action {
  height: 40px;
  display: flex;
  padding-left: 58px;
}
.roleAndDialog {
  height: fit-content;
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
  height: 100%;
  background: #7E57C2;
  padding: 3% 2% 3% 2%;
}

.messageInput {
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding-left: 1%;
  border-radius: 4px;
  margin-right: 2%;
}

.action {
  display: flex;
  flex-direction: row;
}
h2{
  font-weight: 700;
  font-size: 28px;
  color: #EDE7F6;
}
.massege__wraper{
  flex: 1 0;
}
</style>
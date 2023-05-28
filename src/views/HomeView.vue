<template>
  <section class="d-flex flex-column ">
    <div class="aboutProduct d-flex flex-row">
      <div class="tellBloc d-flex flex-column px-5">
        <h2 class="mb-2 mt-6 white">Общайтесь</h2>
        <hr>
        <p class="d-flex pb-5 pt-3 px-3 white">Воспользуйтесь возможностями модели GPT-3.5-turbo, чтобы развлечься или чему-нибудь научиться</p>
      </div>
      <div class="createBloc d-flex flex-column px-10">
        <h2 class="mb-2 mt-6 white">Создавайте</h2>
        <hr>
        <p class="d-flex pb-5 pt-3 px-3 white">Создавайте свои, заготовленные или чужие роли: поболтайте с футбольным комментатором или стендап комиком</p>
      </div>
    </div>
    <div class="tryChat">
      <h2 class="mb-3 white">Попробуйте!</h2>
      <MessageCard class="mb-5" v-for="(item, index) in listMessange" :answer=item.answer :bodyMessange=item.body
        :role=currentRole :name=name />
      <div class="action mt-5">
        <input v-model="messange" class="messageInput" type="text" color=white name="textField" placeholder="Введите ваше сообщение">
        <v-btn color="rgba(69, 39, 160, 1)"  class="mx-5" height="40px" style="color: white">
          Роль
        </v-btn>
        <v-btn color="rgba(69, 39, 160, 1)"  height="40px" style="color: white" @click="sendUserMessage">
          Отправить
        </v-btn>
      </div>
    </div>

    <div class="footerBloc d-flex flex-row">
      <div class="inviteBloc d-flex flex-column px-5">
        <h2 class="mb-2 mt-6 white">Понравилось? Присоединяйся!</h2>
        <hr>
        <div class="authAction d-flex flex-row mt-3">
          <v-btn color="rgba(69, 39, 160, 1)" height="52px" width=40% style="color: white">
              Зарегистрироваться
          </v-btn>
          <p class="white mx-5">или</p>
          <v-btn color="rgba(69, 39, 160, 1)" height="52px" width=40% style="color: white">
            Войти
          </v-btn>
        </div>
      </div>
      <div class="copyrightBloc d-flex flex-column px-10">
        <h2 class="mb-3 mt-10 colorfulH2">Про нас</h2>
        <hr>
        <p class="mt-4 colorfulP">Команда notFive (C) 2023</p>
        <p class="my-2 colorfulP">Возможности - GitHub</p>
      </div>
    </div>
  </section>
</template>
<script>
import MessageCard from '../components/MessageCard.vue'
export default {
  components: {
    MessageCard,
  },
  data: () => ({
    dialog: false,
    name: 'Вася',
    currentRole: 'Программист',
    listMessange: [{ answer: true, body: 'Я Вася красавчик' }, { answer: false, body: 'Нет Вася ты дурак, разговариваешь сам с собой' },],
    roles: ['Повар', 'Певец', 'Дотер', 'Программист'],
    valid: false,
    messange: '',
    messangeFormRules: [
      value => {
        if (value) return true

        return 'Ваше сообщение пустое.'
      },
    ],
    nameRole: '',
    nameRoleRules: [
      value => {
        if (value) return true

        return 'Название не должно быть пустым.'
      },
    ],
  }),

  methods: {
    async sendUserMessage() {
      console.log(true)
      try {
        console.log({
            role:'user', 
            login: 'login', 
            prompt: `${this.messange}`
          })
          console.log(JSON.stringify({
            role:'user', 
            login: 'login', 
            prompt: `${this.messange}`
          }))
        const req = await fetch('http://192.168.100.166/chat', {
          method: 'POST',
          body: JSON.stringify({
            role:'user', 
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
hr{
  background-color: rgba(209, 196, 233, 0.5);
}
.white {
  color: rgba(255, 255, 255, 1);
}
.colorfulH2{
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #7E57C2;
}
.colorfulP{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #7E57C2;
}
.messageInput {
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  padding-left: 1%;
  border-radius: 4px;
}
.action {
  height: 40px;
  display: flex;
  padding-left: 58px;
}
.tryChat{
  background: #7E57C2;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-right: 15%;
  padding-left: 15%;
  border-radius: 4px;
}
.aboutProduct, .footerBloc{
  margin-top: 3%;
  margin-bottom: 3%;
}
.tellBloc, .createBloc, .inviteBloc{
  width: 100%;
  background:#7E57C2;
  border-radius: 4px;
}
.tellBloc, .inviteBloc {
  margin-right: 1%;
}
.createBloc, .copyrightBloc{
  margin-left: 1%;
}
.copyrightBloc{
  width: 100%;
  border-radius: 4px;
}
.authAction{
  display: flex;
  align-items: center;
  height: 52px;
  width: 100%;
  justify-content: center;
}
</style>

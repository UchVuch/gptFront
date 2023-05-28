<template>
    <section class="formLogin">
      <v-sheet class="aling-center content pa-10" >
      <v-form ref="form">
        <h2>Здесь будут возможности</h2>
      </v-form>
    </v-sheet>
    </section>
  </template>
  
  <script>
  export default {
    components: {
      
    },
    data: () => ({
      valid: true,
        username: '',
        password: '',
        nameRules: [
          value => !!value || 'Зведите никнейм',
          value => (value && value.length <= 30) || 'Никнейм не должен быть длиннее 30 символов',
        ],
        passwordRules: [
          value => !!value || 'Введите пароль'
        ],
      }),
  
      methods: {
        async validate () {
          const { valid } = await this.$refs.form.validate()
  
          if (valid) alert('Данные отправлены')
        },
      },
  }
  </script>
  
  <style scoped>
  .formLogin {
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 10%;
  }
  .content{
    width: 50%;
    background: #7E57C2;
    margin: 0 auto;
  }
  .nickName, .password{
    color: white;
  }
  h2{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 24px;
    color: white;
    margin-bottom: 20px;
  }
  </style>
  
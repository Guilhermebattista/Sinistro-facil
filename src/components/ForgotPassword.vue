<template>
    <div class="forgot-password-page">
      <img src="../assets/image.png" alt="Logo" class="logo" />
      <h1>Recuperar Senha</h1>
      <p class="description">Digite seu e-mail para receber instruções de recuperação</p>
      <form @submit.prevent="sendResetLink">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input
            type="email"
            v-model="email"
            required
            placeholder="Digite seu e-mail"
          />
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div class="link-container">
      <button @click="goToLogin" class="back-button">Voltar para login</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        errorMessage: '',
      };
    },
    methods: {
  sendResetLink() {
    console.log("Enviar link de recuperação para:", this.email);
    // Lógica para enviar o link de recuperação
  },
  goToLogin() {
    this.$router.push('/'); // Redireciona para a página de login
  },
},
  };
  </script>
  
  <style scoped>
  .forgot-password-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .logo {
    max-width: 100px; /* Ajuste conforme necessário */
    margin-bottom: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
    color: #162930;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"] {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  
  .error {
    color: red;
    margin-top: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #7CA6B4; 
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #36a374; /* Cor ao passar o mouse */
    color: #f0f0f0;
  }
  
  .link-container {
    margin-top: 20px;
  }
  .description {
  margin-bottom: 10px;
  text-align: center; /* Centraliza o texto */
  font-size: 10px;
  margin-bottom: 20px;
  color: #162930;
}
.back-button {
  background-color: #ffff; /* Cor do botão "Voltar para login" */
  color: #2f445a; /* Cor do texto */
  border: 1px solid #ccc; /* Borda do botão */
  margin-top: 15px; /* Espaçamento acima do botão */
  width: 300px;
  font-weight: bold;
}
  </style>
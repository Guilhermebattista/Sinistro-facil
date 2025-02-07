<template>
    <div class="registration">
      <h1>Cadastro de Usuários</h1>
      <form @submit.prevent="registerUser">
        <div>
          <label for="name">Nome:</label>
          <input type="text" v-model="user.name" required />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input type="email" v-model="user.email" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" v-model="user.password" required />
        </div>
        <div>
          <label for="phone">Telefone:</label>
          <input type="text" v-model="user.phone" required />
        </div>
        <div>
          <label for="profilePicture">Foto de Perfil:</label>
          <input type="file" @change="onFileChange" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          phone: '',
        },
        profilePicture: null,
        errorMessage: '',
      };
    },
    methods: {
      onFileChange(event) {
        this.profilePicture = event.target.files[0];
      },
      registerUser() {
        if (this.validateForm()) {
          console.log("Usuário cadastrado:", this.user);
          this.resetForm();
        }
      },
      validateForm() {
        if (!this.user.name || !this.user.email || !this.user.password || !this.user.phone) {
          this.errorMessage = "Todos os campos são obrigatórios.";
          return false;
        }
        this.errorMessage = '';
        return true;
      },
      resetForm() {
        this.user = {
          name: '',
          email: '',
          password: '',
          phone: '',
        };
        this.profilePicture = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .registration {
    max-width: 400px;
    margin: auto;
  }
  .error {
    color: red;
  }
  </style>
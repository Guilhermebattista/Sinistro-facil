<template>
  <div class="login-page">
    <div class="login-container">
      <div class="image-wrapper">
        <img src="../assets/imgcar.png" alt="Imagem de exemplo" class="login-image" />
        <div class="info-text"> 
          <p class="main-text">Cuidamos do seu sinistro, você cuide do que importa!</p>
          <p class="sub-text">Sua segurança e tranquilidade em primeiro lugar. Resolva tudo online com poucos cliques!</p>
        </div>
      </div>
      <div class="login-form-container">
        <img src="../assets/image.png" alt="Logo" class="logo" />
        <div class="login-header">
          <h1 class="bem-vindo">Bem-vindo</h1>
          <p class="description">Faça login para gerenciar sua conta ou verificar cadastros de sinistros</p>
        </div>
        <form @submit.prevent="loginUser" class="login-form">
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" v-model="credentials.email" required placeholder="Digite seu e-mail" />
          </div>
          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" v-model="credentials.password" required placeholder="Digite sua senha" />
          </div>
          <div class="forgot-password-link">
            <router-link to="/forgot-password">Esqueci minha senha</router-link>
          </div>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          <button type="submit">Entrar</button>
          <div class="register-link">
            <p>Ainda não tem uma conta? <router-link to="/register">Criar conta</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    loginUser() {
      if (this.validateForm()) {
        console.log("Usuário logado:", this.credentials);
        this.resetForm();
      }
    },
    validateForm() {
      if (!this.credentials.email || !this.credentials.password) {
        this.errorMessage = "Todos os campos são obrigatórios.";
        return false;
      }
      this.errorMessage = '';
      return true;
    },
    resetForm() {
      this.credentials = {
        email: '',
        password: '',
      };
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 514px;
  width: 100%;
  background-color: #f8f8f8; /* Cor de fundo opcional */
  border-radius: 10px;
}

.login-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: flex-start; /* Alinha a imagem e o formulário no topo */
  background-color: #f8f8f8; 
  padding: 20px;
  border-radius: 10px; /* Bordas arredondadas */
  width: 80%; /* Reduz a largura total do contêiner */
  max-width: 1000px; /* Limita a largura máxima */
  margin: 0 auto; /* Centraliza o contêiner no meio da tela */
  overflow: hidden; /* Oculta qualquer conteúdo que ultrapasse o contêiner */
}

.image-wrapper {
  position: relative;
  max-width: 40%; /* Aumenta a largura da imagem */
  overflow: hidden; /* Esconde o que ultrapassa o contêiner */
  margin-right: 20px; /* Espaço entre a imagem e o formulário */
}

.login-image {
  width: 100%; /* A imagem ocupa 100% do contêiner */
  height: auto; /* Mantém a proporção da imagem */
  display: block; /* Remove espaços em baixo da imagem */
  opacity: 0.84;
  margin-bottom: 20px;
}

.info-text {
  position: absolute; /* Posiciona o texto abaixo da imagem */
  bottom: 0; /* Posiciona o texto na parte inferior da imagem */
  left: 0; /* Alinha o texto à esquerda */
  background-color: #f8f8f8; /* Fundo leve para o texto */
  padding: 10px; /* Espaçamento interno */
  width: 100%; /* Largura total do contêiner da imagem */
  text-align: left; /* Alinha o texto à esquerda */
}

.main-text {
  font-size: 16px; /* Aumenta o tamanho da fonte da frase principal */
  line-height: 1.5; /* Aumenta o espaçamento entre as linhas */
  color: #2f445a; /* Cor do texto */
  margin-bottom: 10px; /* Remove margens padrão */
  font-weight: bold;
}

.sub-text {
  font-size: 13px; /* Diminui o tamanho da fonte da frase secundária */
  line-height: 1.5; /* Aumenta o espaçamento entre as linhas */
  color: #2f445a; /* Cor do texto secundário */
  margin: 0; /* Remove margens padrão */
}

.login-form-container {
  flex: 1; /* Ocupa o restante do espaço */
  display: flex;
  flex-direction: column; /* Empilha logo e conteúdo em coluna */
  align-items: center; /* Centraliza horizontalmente */
  text-align: center; /* Centraliza o texto */
  max-width: 50%; /* Limita a largura do formulário */
}

.logo {
  max-width: 15%; /* Ajuste o tamanho do logo conforme necessário */
  max-height: 10%;
  margin-bottom: 0px; /* Espaçamento abaixo do logo */
}

.login-header {
  margin-bottom: 5px; /* Ajuste para espaçamento */
}

.form-group {
  margin-bottom: 15px;
  width: 100%; /* Para garantir que os inputs ocupem toda a largura */
}

label {
  display: block;
  margin-bottom: 5px;
  text-align: left; /* Alinha o texto da label à esquerda */
}

input[type="email"],
input[type="password"] {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  margin-top: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #7CA6B4; /* Cor do botão */
  color: white;
  border: 1px solid #464545;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s;
}


button:hover {
  background-color: #6b95a3; 
}
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.register-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.bem-vindo {
  font-size: larger; /* Tamanho da fonte do cabeçalho */
  margin-bottom: 20px;
  color: #2f445a;
}

.forgot-password-link {
  text-align: center;
  margin-top: 10px; /* Espaçamento acima do link */
  font-size: 14px; /* Tamanho da fonte do link */
  color: #7CA6B4;

 
}

.description {
  margin-bottom: 10px;
  text-align: center; /* Centraliza o texto */
  font-size: 10px;
  margin-bottom: 20px;
  color: #162930;
}
</style>
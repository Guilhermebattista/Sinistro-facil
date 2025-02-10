<template>
  <div class="page-container">
    <div class="registration">
      <!-- Seção do Formulário -->
      <div class="form-section">
        <div class="header">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.1">
          <img src="../assets/image.png" alt="Logo" class="logo" />
          <h1 class="title">Bem vindo(a)</h1>
          <p class="subtitle">Preencha os dados abaixo para criar sua conta.</p>
        </div>

        <form @submit.prevent="registerUser" class="form">
          <!-- Dados Pessoais -->
          <div class="input-group">
            <label for="name">Nome:</label>
            <input
              id="name"
              type="text"
              v-model="user.name"
              required
              placeholder="Digite seu nome completo"
              class="input"
            />
          </div>

          <div class="input-group">
            <label for="email">E-mail:</label>
            <input
              id="email"
              type="email"
              v-model="user.email"
              required
              placeholder="Digite seu e-mail"
              class="input"
            />
          </div>

          <div class="input-group">
            <label for="phone">Telefone:</label>
            <input
              id="phone"
              type="tel"
              v-model="user.phone"
              required
              placeholder="Digite seu telefone"
              class="input"
              v-mask="'(##) #####-####'"
            />
          </div>

          <div class="input-group">
            <label for="password">Senha:</label>
            <input
              id="password"
              type="password"
              v-model="user.password"
              required
              placeholder="Digite sua senha"
              class="input"
            />
          </div>

          <!-- Upload de Foto -->
          <div class="profile-section">
            <label class="text-perfil">Foto de Perfil</label>
            <div class="profile-upload">
              <div class="profile-preview" @click="triggerFileInput">
                <img 
                  :src="profilePictureUrl || defaultProfilePicture" 
                  alt="Foto de Perfil"
                  class="preview-image"
                />
                <div class="overlay">
                  <span class="upload-icon">📷</span>
                </div>
              </div>
              <input 
                type="file"
                id="profilePicture"
                ref="fileInput"
                @change="onFileChange"
                accept="image/*"
                class="file-input"
              />
              <p class="upload-text" v-if="!profilePictureUrl">
                Clique para adicionar uma foto
              </p>
            </div>
          </div>

          <!-- Botão e Mensagens -->
          <div class="form-actions">
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            <button type="submit" class="submit-button">
              {{ isLoading ? 'Cadastrando...' : 'Cadastrar' }}
            </button>
            <router-link to="/" class="login-link">
              Voltar para login
            </router-link>
          </div>
        </form>
      </div>

      <!-- Seção da Imagem -->
      <div class="image-section">
        <div class="image-container">
          <img src="../assets/cadastro.png" alt="Carro com sinistro" class="feature-image" />
          <div class="image-text">
            <h2 class="image-title">Bem vindo ao sinistro fácil</h2>
            <p class="image-description">
              Crie sua conta agora mesmo e comece a aproveitar todos os benefícios da nossa plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        phone: '',
      },
      profilePicture: null,
      profilePictureUrl: '',
      errorMessage: '',
      isLoading: false,
      defaultProfilePicture: require('../assets/user.jpg'),
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    onFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        if (file.size > 5000000) { // 5MB
          this.errorMessage = 'A imagem deve ter menos que 5MB'
          return
        }
        this.profilePicture = file
        this.profilePictureUrl = URL.createObjectURL(file)
      }
    },
    async registerUser() {
      try {
        if (!this.validateForm()) return

        this.isLoading = true
        this.errorMessage = ''

        // Simulação de envio para API
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Aqui você implementaria a chamada real para sua API
        console.log('Dados do cadastro:', {
          ...this.user,
          profilePicture: this.profilePicture
        })

        this.resetForm()
        // Redirecionar ou mostrar mensagem de sucesso
      } catch (error) {
        this.errorMessage = 'Erro ao realizar cadastro. Tente novamente.'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
    validateForm() {
      if (!this.user.name || !this.user.email || !this.user.password || !this.user.phone) {
        this.errorMessage = 'Todos os campos são obrigatórios.'
        return false
      }
      if (!this.validateEmail(this.user.email)) {
        this.errorMessage = 'E-mail inválido.'
        return false
      }
      if (this.user.password.length < 6) {
        this.errorMessage = 'A senha deve ter no mínimo 6 caracteres.'
        return false
      }
      return true
    },
    validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    resetForm() {
      this.user = {
        name: '',
        email: '',
        password: '',
        phone: '',
      }
      this.profilePicture = null
      this.profilePictureUrl = ''
      this.errorMessage = ''
    },
  },
}
</script>

<style scoped>

.page-container {
  min-height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 10px;
}

.registration {
  display: flex;
  min-height: 320px; 
  width: 800px;
  max-width: 800px;
  background: #ffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: visible;
}

.form-section {
  flex: 0.8;
  height: auto;
  padding: 0.5rem;
  max-width: 500px; /* Reduzido significativamente */
}


/* Ajuste para dispositivos móveis */
@media (max-width: 640px) {
  .page-container {
    padding: 1rem;
    min-height: 100vh;
  }

  .registration {
    min-height: auto;
    height: auto;
  }

  .form-section {
    padding: 1.5rem;
    height: auto;
  }
}

.header {
  text-align: center;
  margin-bottom: 10px;
}



.title {
  font-size: larger; /* Tamanho da fonte do cabeçalho */
  margin-bottom: 10px;
  color: #2f445a;
}

.subtitle {
  color: #666;
  font-size: 10px;
}



.input-group {
  margin-bottom: 0.68rem;
  padding-left:  30px;
  padding-right: 30px;
}

.input-group label {
  display: block;
  margin-bottom: 0.4rem;
  color: #162930;
  font-size: 13px;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 12px;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: #7CA6B4;
  box-shadow: 0 0 0 2px rgba(124, 166, 180, 0.2);
}

.profile-section {
  text-align: center;
  margin: 1rem 0;
}

.profile-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
}


.profile-preview {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #7CA6B4;
  cursor: pointer;
  position: relative;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.logo {
  max-width: 23%; /* Ajuste o tamanho do logo conforme necessário */
  max-height: 20%;
  margin-bottom: 0px; /* Espaçamento abaixo do logo */
  margin-top: 0px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.profile-preview:hover .overlay {
  opacity: 1;
}

.upload-icon {
  font-size: 1.5rem;
  color: white;
}

.file-input {
  display: none;
}

.upload-text {
  color: #666;
  font-size: 10px
}

.form-actions {
  text-align: center;
}

.error-message {
  color: #dc2626;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #7CA6B4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 13;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #6b95a3;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-link {
  display: block;
  margin-top: 1rem;
  color: #7CA6B4;
  text-decoration: none;
  font-size: 0.9rem;
}

.login-link:hover {
  text-decoration: underline;
}
.text-perfil{
  font-size: 13px;
  color: #444242;
 
}

.image-section {
  flex: 0.9;
  background-color: #f8f8f8;
  padding: 10px;
  display: flex;
  align-items:  flex-start;
  justify-content: center;
}

.image-container {
  text-align: center;
}

.feature-image {
  max-width: 80%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-text {
  max-width: 400px;
  margin: 0 auto;
}

.image-title {
  font-size: 20px;
  color: #2f445a;
  margin-bottom: 50px;
  margin-top: 20px;
}

.image-description {
  color: #2f445a;
  font-size: 12px;
  line-height: 1.5;
}

/* Responsividade */
@media (max-width: 1024px) {
  .registration {
    flex-direction: column;
  }

  .form-section {
    max-width: 100%;
  }

  .image-section {
    padding: 2rem 1rem;
  }
}

@media (max-width: 640px) {
  .page-container {
    padding: 1rem;
  }

  .registration {
    border-radius: 8px;
  }

  .form-section {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .image-section {
    display: none;
  }
}
</style>
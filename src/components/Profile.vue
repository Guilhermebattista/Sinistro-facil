<template>
  <div>
    <button class="button" @click="toggleModal">
      <div class="button-content">
        <img :src="profilePictureUrl || require('../assets/user.png')" alt="photo-user">
        <span>minha conta</span>
      </div>
    </button>

    <transition name="fade">
      <div v-if="isModalOpen" class="overlay" @click="toggleModal"></div>
    </transition>

    <transition name="slide">
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="toggleModal">&times;</span>
          <h2 class="modal-title">minha conta</h2>

          <!-- Profile Photo Section -->
          <div class="profile-section">
            <div class="profile-background" :class="{ 'editing-background': isEditing }">
              <div class="profile-preview" @click="triggerFileInput">
                <img 
                  :src="profilePictureUrl || require('../assets/user.jpg')" 
                  class="preview-image"
                  alt="Profile"
                />
                <div class="profile-overlay">
                  <span class="upload-icon">📷</span>
                </div>
              </div>
              <!-- Greeting Message -->
              <div class="greeting-message">
                Olá, {{ firstName }}
              </div>
            </div>
          </div>

          <!-- Background for Form -->
          <div class="form-background">
            <!-- User Information Form -->
            <form @submit.prevent="handleSubmit" class="form-container">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    v-model="user.name"
                    :disabled="!isEditing"
                    :class="{ 'light-text': !isEditing }"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div class="form-group">
                  <label>Telefone</label>
                  <input
                    type="tel"
                    v-model="user.phone"
                    :disabled="!isEditing"
                    :class="{ 'light-text': !isEditing }"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  v-model="user.email"
                  :disabled="!isEditing"
                  :class="{ 'light-text': !isEditing }"
                  placeholder="seu@email.com"
                />
              </div>

              <div class="form-group">
                <label>Endereço</label>
                <input
                  type="text"
                  v-model="user.address"
                  :disabled="!isEditing"
                  :class="{ 'light-text': !isEditing }"
                  placeholder="Rua, número"
                />
              </div>

              <div class="form-row three-columns">
                <div class="form-group">
                  <label>Cidade</label>
                  <input
                    type="text"
                    v-model="user.city"
                    :disabled="!isEditing"
                    :class="{ 'light-text': !isEditing }"
                    placeholder="Sua cidade"
                  />
                </div>
                <div class="form-group">
                  <label>Estado</label>
                  <input
                    type="text"
                    v-model="user.state"
                    :disabled="!isEditing"
                    :class="{ 'light-text': !isEditing }"
                    placeholder="UF"
                  />
                </div>
                <div class="form-group">
                  <label>CEP</label>
                  <input
                    type="text"
                    v-model="user.zip"
                    :disabled="!isEditing"
                    :class="{ 'light-text': !isEditing }"
                    placeholder="00000-000"
                  />
                </div>
              </div>
            </form>
          </div>

          <!-- Action Buttons -->
          <div class="button-container">
            <transition name="fade" mode="out-in">
              <template v-if="isEditing">
                <div class="button-group">
                  <button @click="handleSubmit" class="primary-button">
                    Salvar Alterações
                  </button>
                  <button @click="isEditing = false" class="secondary-button">
                    Cancelar
                  </button>
                </div>
              </template>
              <template v-else>
                <div class="button-group">
                  <button @click="isEditing = true" class="primary-button">
                    Editar Perfil
                  </button>
                  <button @click="changePassword" class="secondary-button">
                    <span class="lock-icon">🔒</span>
                    Alterar Senha
                  </button>
                </div>
              </template>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      isEditing: false,
      profilePictureUrl: null,
      user: {
        name: "Seu nome",
        phone: "(11) 99999-9999",
        email: "exemplo@email.com",
        address: "Rua Exemplo, 123",
        city: "São Paulo",
        state: "SP",
        zip: "00000-000",
      },
    };
  },
  computed: {
    firstName() {
      return this.user.name.split(' ')[0];
    }
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      if (this.isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePictureUrl = URL.createObjectURL(file);
      }
    },
    changePassword() {
      alert("Funcionalidade de alterar senha");
    },
    handleSubmit() {
      console.log('Saving user data:', this.user);
      this.isEditing = false;
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* Base styles */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 500px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  overflow-y: auto;
  padding: 1rem;
}

.modal-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 0px;
  color: #6f6b6b;
  margin-top: 0;
  text-align: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 900;
}

/* Animation transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Profile section styles */
.profile-background {
  background-color: #e7f3f5;
  padding: 0.3rem;
  border-radius: 15px;
  text-align: center;
  width: 100%;
  height: 120px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  transition: background-color 0.3s ease;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profile-upload {
  width: 70px;
  height: 70px;
  position: relative;
}

.profile-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;  /* Ajuste o tamanho conforme necessário */
  height: 70px; /* Ajuste o tamanho conforme necessário */
  border-radius: 50%; /* Mantém o círculo */
  overflow: hidden;
  cursor: pointer;
  border: 3px solid #598d96;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.profile-preview:hover {
  transform: scale(1.05);
  border-color: #456b72;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.2s ease;
}

.profile-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-preview:hover .profile-overlay {
  opacity: 1;
}

.greeting-message {
  font-size: 13px;
  color: #374151;
  margin-top: 0.3rem;
  transition: transform 0.3s ease;
}

/* Form styles */
.form-background {
  background-color: #f8f8f8;
  padding: 0.5rem;
  border-radius: 13px;
  margin-top: -0.5rem;
  transition: background-color 0.3s ease;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-row.three-columns {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.form-group label {
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
  transition: color 0.2s ease;
}

.form-group input {
  padding: 0.70rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;
  color: #374151;
  background-color: white;
  transition: all 0.2s ease;
}

.form-group input:focus {
  border-color: #598d96;
  box-shadow: 0 0 0 2px rgba(89, 141, 150, 0.1);
  outline: none;
}

.form-group input.light-text {
  color: #9ca3af;
}

.form-group input:disabled {
  background-color: #f9fafb;
  cursor: not-allowed;
}

/* Button styles */
.button-container {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.primary-button {
  flex: 1;
  padding: 0.75rem;
  background-color: #598d96;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 40px;
}

.primary-button:hover {
  background-color: #456b72;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.secondary-button {
  flex: 1;
  padding: 0.75rem;
  background-color: white;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 40px;
}

.secondary-button:hover {
  background-color: #f9fafb;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: #598d96;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  color: white;
  height: 40px;
  transition: all 0.2s ease;
}

.button:hover {
  background-color: #456b72;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.button-content img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.button-content:hover img {
  transform: scale(1.05);
}

.button-content span {
  font-size: 0.75rem;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}
</style>
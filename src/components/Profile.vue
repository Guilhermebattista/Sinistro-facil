<template>
  <div>
    <button class="button" @click="toggleModal">
      <div class="button-content">
        <img src="../assets/user.png" alt="photo-user">
        <span>Minha Conta</span>
      </div>
    </button>

    <!-- Fundo escurecido quando o modal estiver aberto -->
    <div v-if="isModalOpen" class="overlay" @click="toggleModal"></div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="toggleModal">&times;</span>
        <p>This is a modal on the right side of the screen!</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(4px); /* Aplica desfoque */
  z-index: 900;
}


.modal {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh; /* Ocupa a altura total */
  width: 500px; 
  background-color: #598d96;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1001; /* Acima do overlay */
}
/* Estilização do conteúdo do modal */
.modal-content {
  padding: 20px;
  color: white;
}

/* Botão de fechar */
.close {
  cursor: pointer;
  font-size: 24px;
  float: right;
}

/* Botão de abrir o modal */
.button {
  background-color: #598d96;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  border: none;
  color: white;
  font-size: 12px;
  cursor: pointer;
}

/* Centralização do conteúdo do botão */
.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Ajuste da imagem do botão */
.button img {
  width: 40px;
  height: 40px;
}
</style>

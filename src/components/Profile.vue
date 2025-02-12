<template>
  <Transition name="slide">
    <div v-if="isOpen" class="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6 overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Meu Perfil</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <span class="text-2xl">&times;</span>
        </button>
      </div>
      <p>Conteúdo do perfil aqui...</p>
      <button @click="closeModal" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Fechar</button>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      console.log("Modal is closing"); // Log para depuração
      this.$emit('close');
    }
  },
  mounted() {
    console.log("Profile modal mounted with isOpen:", this.isOpen); // Log para depuração
  }
};
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px; /* ou ajuste conforme necessário */
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Para garantir que o modal esteja acima de outros elementos */
}
</style>
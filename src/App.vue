<template>
  <div id="app">
    <header class="heade" v-if="isInternalRoute">
      <div class="heade-content">
        <router-link to="/incident-list" class="logo">
          <img src="../src/assets/image.png" alt="Logo da Aplicação" />
        </router-link>
        <nav class="nav-links">
          <router-link to="/incident-form" class="nav-link">Home</router-link>
          <router-link to="/incident-list" class="nav-link">Consultas de Ocorrências</router-link>
        </nav>
        <Profile/>
      </div>
    </header>
    <main>
      <router-view />
      <ProfileModal v-if="isProfileOpen" @close="isProfileOpen = false" />
    </main>
  </div>
</template>

<script>

import Profile from './components/Profile.vue';

export default {
  name: 'App',
  components: {
    Profile,
  },
  data() {
    return {
      isProfileOpen: false, // Estado para controlar o modal
    };
  },
  computed: {
    isInternalRoute() {
      return this.$route.path === '/incident-list' || this.$route.path === '/incident-form';
    },
  },
  methods: {
    openProfileModal() {
        console.log("Abrindo modal"); // Debug
        this.isProfileOpen = true; // Opens the profile modal
    console.log("Abrindo modal"); // Debug
      console.log("Abrindo modal"); // Debug
      // this.isProfileOpen = false; // Prevents the profile modal from opening
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.heade {
  background-color: #598d96; /* Cor azul da barra */
  color: white; /* Cor do texto na barra */
  padding: 10px 20px; /* Espaçamento na barra */
  display: flex; /* Ativa o flexbox */
  justify-content: space-between; /* Distribui os elementos */
  align-items: center;
}

.heade-content {
  display: flex;
  flex: 1; /* Permite que o conteúdo ocupe o espaço disponível */
  align-items: center;
  justify-content: space-between; /* Distribui os elementos */
}

.nav-links {
  display: flex; /* Flexbox para os links de navegação */
  justify-content: center; /* Centraliza os links */
  flex: 1; /* Permite que ocupem o espaço disponível */
}

.logo img {
  height: 40px; /* Altura do logo */
}

.nav-link {
  display: flex;
  align-items: center;
  color: white; /* Cor do texto */
  text-decoration: none; /* Remove sublinhado */
  margin: 0 20px; /* Espaço entre os links */
  transition: color 0.3s; /* Efeito de transição para hover */
}

.nav-link:hover {
  color: #d1e9ee; /* Cor ao passar o mouse */
}

.profile {
  display: flex;
  flex-direction: column; /* Alinha os elementos em coluna */
  align-items: center; /* Centraliza os itens */
}

.profile-image {
  height: 40px; /* Altura da foto de perfil */
  border-radius: 50%; /* Tornar a imagem circular */
}

.username {
  color: white; /* Cor do texto */
  font-size: 12px; /* Tamanho da fonte */
}
</style>

<template>
  <div id="app">
    <header class="navbar">
      <nav>
        <router-link to="/">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  margin: 0; /* Remove margens padrão de todos os elementos */
  padding: 0; /* Remove preenchimento padrão de todos os elementos */
  box-sizing: border-box; /* Inclui bordas e preenchimentos nas dimensões do elemento */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f8f8f8; /* Cor de fundo igual à da navbar */
  min-height: 100vh; /* Altura do viewport */
}

.navbar {
  display: flex;
  justify-content: center; /* Centraliza os links */
  align-items: center; /* Centraliza verticalmente */
  height: 40px; /* Ajuste a altura da barra de navegação */
  background-color: #f8f8f8; /* Cor de fundo da barra */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra opcional */
}

.navbar nav {
  display: flex;
  gap: 20px; /* Espaço entre os links */
}

.navbar a {
  text-decoration: none; /* Remove sublinhado */
  color: #333; /* Cor do texto */
}

.navbar a:hover {
  color: #007bff; /* Cor ao passar o mouse */
}

main {
  padding: 20px; /* Espaçamento no conteúdo principal */
  background-color: #ffff; /* Cor de fundo igual à da navbar */
  min-height: calc(100vh - 40px); /* Garante que o main ocupe o espaço restante */
}
</style>
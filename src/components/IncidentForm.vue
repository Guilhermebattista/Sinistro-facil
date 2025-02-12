<template>
    <div class="incident-form">
      
  
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="incidentType">Selecione o tipo de ocorrência:</label>
          <select v-model="form.incidentType" id="incidentType" required>
            <option value="" disabled>Selecione uma opção</option>
            <option value="sinistro">Sinistro</option>
            <option value="acidente">Acidente</option>
            <option value="roubo">Roubo</option>
            <option value="furto">Furto</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="location">Selecione sua localização:</label>
          <input type="text" v-model="form.location" id="location" placeholder="Digite sua localização" required />
        </div>
  
        <div class="form-group">
          <label for="date">Selecione a data:</label>
          <input type="date" v-model="form.date" id="date" required />
        </div>
  
        <div class="form-group">
          <label for="time">Selecione a hora:</label>
          <input type="time" v-model="form.time" id="time" required />
        </div>
  
        <div class="form-group">
          <label for="description">Descreva o ocorrido:</label>
          <textarea v-model="form.description" id="description" placeholder="Digite sua descrição" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="images">Anexe as imagens:</label>
          <input type="file" id="images" @change="onFileChange" multiple />
        </div>
  
        <button type="submit">Registrar ocorrência</button>
      </form>
  
      <footer class="footer">
        <p>Sinistro rápido - 2025</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          incidentType: '',
          location: '',
          date: '',
          time: '',
          description: '',
          images: [],
        },
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar o formulário
        console.log("Formulário enviado:", this.form);
      },
      onFileChange(event) {
        this.form.images = Array.from(event.target.files);
      },
    },
  };
  </script>
  
  <style scoped>
  .incident-form {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f8f8f8; /* Cor de fundo */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .account-link {
    text-align: right;
    margin-bottom: 15px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="date"],
  input[type="time"],
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
    height: 100px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #7CA6B4; /* Cor do botão */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #36a374; /* Cor ao passar o mouse */
  }
  
  .footer {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
    color: #666;
  }
  </style>
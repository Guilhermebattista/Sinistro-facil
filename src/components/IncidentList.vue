<template>
    <div class="incident-list">
      <h2>Seus Registros de Ocorrências</h2>
  
      <div class="filters">
        <div class="filter-type">
          <label>
            <input type="radio" value="sinistro" v-model="selectedType" />
            Sinistro
          </label>
          <label>
            <input type="radio" value="roubo" v-model="selectedType" />
            Roubo
          </label>
          <label>
            <input type="radio" value="acidente" v-model="selectedType" />
            Acidente
          </label>
          <label>
            <input type="radio" value="furto" v-model="selectedType" />
            Furto
          </label>
        </div>
  
        <div class="filter-date">
          <label for="filter-date">Filtrar pela Data:</label>
          <input type="date" v-model="filterDate" />
        </div>
  
        <button @click="filterRecords">Filtrar</button>
      </div>
  
      <h3>Registros</h3>
      <ul>
        <li v-for="record in filteredRecords" :key="record.id">
          {{ record.type }} - {{ record.date }}
          <button @click="viewDetails(record.id)">Exibir detalhes</button>
        </li>
      </ul>
  
      <button @click="registerNewIncident">Registrar Nova Ocorrência</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IncidentList',
    data() {
      return {
        selectedType: '',
        filterDate: '',
        records: [
          { id: 1, type: 'Acidente', date: '2025-01-08' },
          { id: 2, type: 'Roubo', date: '2025-01-07' },
          { id: 3, type: 'Furto', date: '2025-01-06' },
        ],
      };
    },
    computed: {
      filteredRecords() {
        return this.records.filter(record => {
          const matchesType = this.selectedType ? record.type.toLowerCase() === this.selectedType : true;
          const matchesDate = this.filterDate ? record.date === this.filterDate : true;
          return matchesType && matchesDate;
        });
      },
    },
    methods: {
      filterRecords() {
        // A lógica de filtragem já é feita na computed property
      },
      viewDetails(recordId) {
        // Lógica para exibir detalhes do registro
        console.log(`Exibindo detalhes do registro: ${recordId}`);
      },
      registerNewIncident() {
        // Lógica para registrar uma nova ocorrência
        console.log('Registrar nova ocorrência');
      },
    },
  };
  </script>
  
  <style>
  .incident-list {
    padding: 20px;
  }
  
  .filters {
    margin-bottom: 20px;
  }
  
  .filter-type {
    margin-bottom: 10px;
  }
  
  h2 {
    margin-bottom: 10px;
  }
  
  h3 {
    margin-top: 20px;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
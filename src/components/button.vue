<template>
    <div>
      <router-link v-if="to" :to="to" class="custom-button-link">
        <button :class="['custom-button', buttonType]">
          <slot></slot>
        </button>
      </router-link>
      <button v-else :class="['custom-button', buttonType]" @click="onClick">
        <slot></slot>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      buttonType: {
        type: String,
        default: 'primary', // default ke primary
      },
      to: {
        type: String,
        default: null, // jika ada, digunakan untuk navigasi
      },
    },
    methods: {
      onClick() {
        this.$emit("click");
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-button {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  /* Variasi warna untuk tombol */
  .custom-button.primary {
    background-color: #007bff;
    color: white;
  }
  
  .custom-button.primary:hover {
    background-color: #0056b3;
  }
  
  .custom-button.secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .custom-button.secondary:hover {
    background-color: #565e64;
  }
  
  .custom-button.success {
    background-color: #28a745;
    color: white;
  }
  
  .custom-button.success:hover {
    background-color: #218838;
  }
  
  .custom-button.danger {
    background-color: #dc3545;
    color: white;
  }
  
  .custom-button.danger:hover {
    background-color: #c82333;
  }
  
  .custom-button.warning {
    background-color: #ffc107;
    color: black;
  }
  
  .custom-button.warning:hover {
    background-color: #e0a800;
  }
  
  /* Tambahan efek transisi */
  .custom-button:active {
    transform: scale(0.95);
  }
  
  .custom-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
  
  .custom-button-link {
    text-decoration: none;
  }
  </style>
  
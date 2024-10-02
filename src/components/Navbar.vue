<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">MyWebsite</a>
        <button class="navbar-burger" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ active: isActive }">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/services">Services</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.isActive = !this.isActive;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  .navbar-brand .navbar-item {
    font-size: 1.5em;
    color: white;
    text-decoration: none;
  }
  
  .navbar-burger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .navbar-burger span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 4px;
    background-color: white;
  }
  
  .navbar-menu {
    display: flex;
  }
  
  .navbar-menu.active {
    display: block;
  }
  
  .navbar-item {
    color: white;
    padding: 10px;
    text-decoration: none;
  }
  
  .navbar-item:hover {
    background-color: #575757;
  }
  
  @media (max-width: 768px) {
    .navbar-burger {
      display: block;
    }
  
    .navbar-menu {
      display: none;
      flex-direction: column;
      background-color: #333;
      width: 100%;
    }
  
    .navbar-menu.active {
      display: flex;
    }
  
    .navbar-item {
      padding: 10px 15px;
    }
  }
  </style>
  
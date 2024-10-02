<script setup>
import Button from '../button.vue';
</script>
<template>
    <div class="content">
      <h1>Welcome to MyWebsite</h1>
      <p>This is the home page content.</p>
      <Button buttonType="primary" to="/quiz">Soal</Button>
      <Button buttonType="danger" to="/quizf">Soal</Button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    components: {
    Button,
  },
  };
  </script>
  
<template>
  <div id="app">
    <Navbar />
    <section class="section">
      <div class="container">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.section {
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

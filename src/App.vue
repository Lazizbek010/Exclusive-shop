<template>
  <div class="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>


<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

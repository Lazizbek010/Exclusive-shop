<template>
  <div>
    <section class="services container">
      <ServicesComponent v-for="feruza in 3" :key="feruza" />
    </section>
  </div>
</template>

<script setup>
import ServicesComponent from "../components/ServiceComponent.vue";
</script>

<style lang="scss" scoped>
</style>
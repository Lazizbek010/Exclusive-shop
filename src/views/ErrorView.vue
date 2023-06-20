<template>
  <div class="error">
    <div class="container">
      <div class="breadcrumb">
        <ul class="breadcrumb__list">
          <li>
            <router-link to="/" class="pop-14-21-400">Home</router-link>
          </li>
          <li>
            <router-link to="/error" class="pop-14-21-400 active"
              >404 Error</router-link
            >
          </li>
        </ul>
      </div>
      <div class="error__content">
        <h1>404 Not Found</h1>
        <p class="pop-16-24-400 ">Your visited page not found. You may go home page.</p>
        <router-link to="/">
          <button class="btn">Back to home page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
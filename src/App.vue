<template>
  <div class="app">
    <router-view />
    <main>
      <MainEnd/>
    </main>
  </div>
</template>

<script>
import MainEnd from './components/main_end.vue'
export default{
  data() {
    return {
      
    }
  },
  components:{
    MainEnd
  }
}

</script>

<style lang="scss" scoped>

</style>
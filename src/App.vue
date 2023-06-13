<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import MainEnd from './components/main_end.vue'
import HomeView from './views/HomeView.vue'
export default{
  data() {
    return {
      
    }
  },
  components:{
    MainEnd,
    HomeView
  }
}

</script>

<style lang="scss" scoped>

</style>
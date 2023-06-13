<template>
  <div>
    <header>Header</header>
    <main>
      <section id="arrival">
        <div class="container">
          <div class="arrival__content">
            <div class="arrival-content__top">
              <SectionTop />
            </div>
            <div class="arrival-content__bottom">
              <div class="arrival-bottom__left">
                <img class="arrival-bottom__img" src="../assets/images/png/Play-station.png" alt="">
                <div class="arrival-bottom__text">
                  <h3 class="arrival-bottom__h3">PlayStation 5</h3>
                  <p class="arrival-bottom__p">Black and White version of the PS5 coming out on sale.</p>
                  <a href="#" class="arrival-bottom__a">Shop Now</a>
                </div>
              </div>
              <div class="arrival-bottom__right">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script setup>
import SectionTop from '../components/SectionTop.vue';

</script>

<style lang="scss" scoped></style>
<template>
  <div class="home">
    <main class="main-categories__parent">
      <div class="main-left__child">
        <h1>Categories</h1>
        <p>Enhance Your Music Experience</p>
        <p>Enhance Your Music Experience</p>
        <div class="hours-items">
          <span>23 <br />Hours</span>
          <br />
          <span>05 <br />Days </span>
          <br />
          <span>59 <br />Minutes </span>
          <br />
          <span>35 <br />Seconds </span>
          <br />
          <button>Buy Now!</button>
        </div>
      </div>
      <div class="main-right__child">
        <img src="../assets/images/png/kalonka.png" alt="" />
      </div>

      <section id="arrival">
        <div class="container">
          <div class="arrival__content">
            <div class="arrival-content__top">
            </div>

            <div class="arrival-content__bottom">
              <div class="arrival-bottom__card bottom__card1">
                <img src="../assets/images/png/Play-station.png" alt="" />
                <div class="text">
                  <h3 class="inter-24-24-600">PlayStation 5</h3>
                  <p class="pop-14-21-400">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <a href="" class="pop-16-24-400-secondary-white">Shop Now</a>
                </div>
              </div>

              <div class="arrival-bottom__left">
                <img
                  class="arrival-bottom__img"
                  src="../assets/images/png/Play-station.png"
                  alt=""
                />
                <div class="arrival-bottom__text">
                  <h3 class="arrival-bottom__h3">PlayStation 5</h3>
                  <p class="arrival-bottom__p">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <a href="#" class="arrival-bottom__a">Shop Now</a>
                </div>
              </div>

              <div class="arrival-bottom__card bottom__card2">
                <img src="../assets/images/png/black-woman.png" alt="" />
                <div class="text">
                  <h3 class="inter-24-24-600">Women’s Collections</h3>
                  <p class="pop-14-21-400">
                    Featured woman collections that give you another vibe.
                  </p>
                  <a href="" class="pop-16-24-400-secondary-white">Shop Now</a>
                </div>
              </div>

              <div class="arrival-bottom__card bottom__card3">
                <img src="../assets/images/png/small-kalonka.png" alt="" />
                <div class="text">
                  <h3 class="inter-24-24-600">Speakers</h3>
                  <p class="pop-14-21-400">Amazon wireless speakers</p>
                  <a href="" class="pop-16-24-400-secondary-white">Shop Now</a>
                </div>
              </div>

              <div class="arrival-bottom__card bottom__card4">
                <img src="../assets/images/png/gucci-perfume.png" alt="" />
                <div class="text">
                  <h3 class="inter-24-24-600">Perfume 5</h3>
                  <p class="pop-14-21-400">GUCCI INTENSE OUD EDP</p>
                  <a href="" class="pop-16-24-400-secondary-white">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services container">
        <ServicesComponent v-for="card in 3" :key="card" />
      </section>
    </main>
  </div>
</template>

<script setup>
import ServicesComponent from "../components/ServiceComponent.vue";
</script>



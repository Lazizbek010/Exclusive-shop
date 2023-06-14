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
              <SectionTop />
            </div>
            <div class="arrival-content__bottom">
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
              <div class="arrival-bottom__right">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesComponent />
    </main>
  </div>
</template>

<script setup>
import SectionTop from "../components/SectionTop.vue";
import ServicesComponent from "../components/ServiceComponent.vue";
</script>



<template>
    <div>
      <header></header>
      <main class="main-categories__parent">
        <div class="main-left__child">
          <h1>Categories</h1>
          <p>Enhance Your
             Music Experience</p>
             <!-- <div class="hours-items">
              <span>23 
                <br>Hours</span>
                <br>
               <span>05 
                <br>Days
               </span>
               <br>
               <span>59
                <br>Minutes </span>
                <br>
                <span>35
                  <br>Seconds </span>
                  <br>
                  <button>Buy Now!</button>
                
             </div> -->
        </div>
        <div class="main-right__child">
          <img src="../assets/images/png/kalonka.png" alt="">

        </div>

      </main>
      <footer>
      </footer>
    </div>
  <div class="home">
    <header>
      <div class="top-header">
        <div class="container">
          <div class="top-header__info">
            <h1 class="top-header__heading pop-14-21-400">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <a href="#" class="top-header__link"> ShopNow </a>
          </div>
          <div class="top-header__lang">
            <h3 class="pop-14-21-400">English</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                fill="#fff"
                d="M12.364 12.95 17.314 8l1.414 1.414-6.364 6.364L6 9.414 7.414 8l4.95 4.95Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <nav></nav>
    </header>
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
      <MainEnd />
    </main>
    <footer></footer>

  </div>
</template>

<script setup>
import SectionTop from '../components/SectionTop.vue';
import MainEnd from '../components/MainEnd.vue';


</script>



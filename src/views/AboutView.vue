<template>
  <div class="about">
    <div class="container">
      <div class="breadcrumb">
        <ul class="breadcrumb__list">
          <li>
            <router-link to="/" class="pop-14-21-400">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="pop-14-21-400 active"
              >About</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <section class="story">
      <div class="container">
        <div class="story__info">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div class="story__img">
          <img
            src="../assets/images/png/About_page-img.jpg"
            alt=""
            width="220px"
            height="300px"
          />
        </div>
      </div>
    </section>
    <section class="info">
      <div class="container">
        <div class="info__item" v-for="item in 4" :key="item">
          <div class="info__item-img">
            <img src="../assets/images/png/Sallary_img-about.jpg" alt="">
          </div>
          <h1 class="inter-32-30-700">10.5k </h1>
          <p class="pop-16-24-400">Sallers active our site</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServicesComponent from "../components/ServiceComponent.vue";
</script>


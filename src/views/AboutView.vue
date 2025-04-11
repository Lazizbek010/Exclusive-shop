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
          <img src="../assets/images/png/About_page-img.png" alt="" />
        </div>
      </div>
    </section>
    <section class="info">
      <div class="container">
        <div class="info__item" v-for="item in 4" :key="item">
          <div class="info__item-img">
            <svg
              class="bg"
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
                fill="#2F2E30"
              />
              <circle cx="40.5" cy="40" r="29" fill="black" />
            </svg>
            <svg
            class="icon"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.6416 5H27.9883L28.8216 13.3333C28.8216 13.3333 30.4883 15 32.9883 15C34.3006 15.0017 35.5684 14.524 36.5533 13.6567C36.6574 13.5594 36.735 13.4372 36.7787 13.3016C36.8224 13.166 36.8309 13.0214 36.8033 12.8817L35.6266 5.83333C35.5873 5.60049 35.4668 5.38909 35.2865 5.23656C35.1062 5.08404 34.8778 5.00024 34.6416 5V5Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M27.9883 5L28.8216 13.3333C28.8216 13.3333 27.1549 15 24.6549 15C22.1549 15 20.4883 13.3333 20.4883 13.3333V5H27.9883Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M20.4886 5V13.3333C20.4886 13.3333 18.8219 15 16.3219 15C13.8219 15 12.1553 13.3333 12.1553 13.3333L12.9886 5H20.4886Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M12.9883 5H6.3366C6.09993 4.99991 5.87089 5.08377 5.69023 5.23666C5.50957 5.38955 5.38899 5.60157 5.34994 5.835L4.17494 12.8833C4.14747 13.0231 4.15601 13.1676 4.19974 13.3032C4.24348 13.4387 4.32097 13.5609 4.42494 13.6583C4.9716 14.1417 6.19327 15.0017 7.98827 15.0017C10.4883 15.0017 12.1549 13.335 12.1549 13.335L12.9883 5.00167V5Z"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M5.5 15V31.6667C5.5 32.5507 5.85119 33.3986 6.47631 34.0237C7.10143 34.6488 7.94928 35 8.83333 35H32.1667C33.0507 35 33.8986 34.6488 34.5237 34.0237C35.1488 33.3986 35.5 32.5507 35.5 31.6667V15"
                stroke="#FAFAFA"
                stroke-width="2"
              />
              <path
                d="M25.2217 35V25C25.2217 24.1159 24.8705 23.2681 24.2454 22.6429C23.6202 22.0178 22.7724 21.6666 21.8883 21.6666H18.555C17.671 21.6666 16.8231 22.0178 16.198 22.6429C15.5729 23.2681 15.2217 24.1159 15.2217 25V35"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-miterlimit="16"
              />
            </svg>
          </div>
          <h1 class="inter-32-30-700">10.5k</h1>
          <p class="pop-16-24-400">Sallers active our site</p>
        </div>
      </div>
    </section>
    <section class="team container">
      <swiper
        :pagination="true"
        :modules="modules"
        :space-between="30"
        :slides-per-view="3"
      >
        <swiper-slide class="slide" v-for="slide in 7" :key="slide">
          <TeamComponent />
        </swiper-slide>
      </swiper>
    </section>
    <section class="services container">
      <ServicesComponent v-for="service in 3" :key="service" />
    </section>
  </div>
</template>

<script setup>
import ServicesComponent from "../components/ServiceComponent.vue";
import TeamComponent from "../components/TeamComponent.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
</script>


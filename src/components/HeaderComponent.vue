<template>
  <div>
    <div class="header-top">
      <div class="container">
        <div class="header-top__info">
          <h1 class="pop-14-21-400">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <a href="#"> ShopNow </a>
        </div>
        <div class="header-top__lang">
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
    <nav class="nav">
      <div class="container">
        <div class="nav__logo inter-24-24-700">Exclusive</div>
        <ul class="nav__list">
          <li>
            <router-link :to="{ name: 'home' }" class="active"
              >Home</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'sign-up' }">Sign Up</router-link>
          </li>
        </ul>
        <div class="nav__menu">
          <div class="nav__menu-search">
            <input
              class="pop-12-18-400"
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for?"
              autocomplete="off"
            />
            <img src="../assets/images/svg/search-icon.svg" alt="" />
          </div>
          <div class="nav__menu-icon">
            <router-link :to="{ name: 'wishlist' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="none"
              >
                <circle cx="17" cy="17" r="17" fill="#fff" />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10c-2.209 0-4 1.74-4 3.886 0 1.732.7 5.845 7.59 10.001a.8.8 0 0 0 .82 0C24.3 19.73 25 15.618 25 13.886 25 11.74 23.209 10 21 10s-4 2.355-4 2.355S15.209 10 13 10Z"
                />
              </svg>
            </router-link>

            <router-link :to="{ name: 'cart' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
              >
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M11 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM25 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 5h4l3 17h16"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 16.667h15.59a.501.501 0 0 0 .49-.402l1.8-9a.5.5 0 0 0-.49-.598H8"
                />
              </svg>
            </router-link>

            <button @click="user = !user">
              <svg
                v-if="user"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
              >
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M24 27v-2.667c0-1.414-.478-2.77-1.328-3.77C21.822 19.561 20.67 19 19.467 19h-7.934c-1.202 0-2.355.562-3.205 1.562-.85 1-1.328 2.357-1.328 3.771V27M16.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
                />
              </svg>
              <svg
                v-else
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#DB4444" />
                <path
                  d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <AccountComponent />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue"
import AccountComponent from "./AccountComponent.vue";
const user = ref(true);
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="account-modal">
    <div class="account-modal__content" v-for="item in 5" :key="item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
      >
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M24 27v-2.667c0-1.414-.478-2.77-1.328-3.77C21.822 19.561 20.67 19 19.467 19h-7.934c-1.202 0-2.355.562-3.205 1.562-.85 1-1.328 2.357-1.328 3.771V27M16.5 14a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        />
      </svg>
      <span class="pop-14-21-400">Manage My Account</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.account-modal {
  position: fixed;
  right: 134px;
  top: 129px;
  min-width: 225px;
  padding: 18px 12px 10px 20px;
  background: rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(75px);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  z-index: 500;
  &__content {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
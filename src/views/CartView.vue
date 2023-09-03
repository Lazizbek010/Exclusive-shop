<template>
  <div class="cart">
    <div class="container">
      <div class="breadcrumb">
        <ul class="breadcrumb__list">
          <li>
            <router-link to="/" class="pop-14-21-400">Home</router-link>
          </li>
          <li>
            <router-link to="/contact" class="pop-14-21-400 active"
              >Cart</router-link
            >
          </li>
        </ul>
      </div>
      <div class="cart__main">
        <ul class="cart__section-header parent">
          <li class="pop-16-24-400">Product</li>
          <li class="pop-16-24-400">Price</li>
          <li class="pop-16-24-400">Quantity</li>
          <li class="pop-16-24-400">Subtotal</li>
        </ul>
        <div class="cart__section-item parent" v-for="item in 2" :key="item">
          <div class="product">
            <div class="img">
              <img src="../assets/images/svg/Cart-Small-Monitor.svg" alt="" />
            </div>
            <h5 class="monitor__text pop-16-24-400">LCD Monitor</h5>
          </div>
          <p class="price pop-16-24-400">$650</p>
          <div class="quantity">
            <input type="number" :value="`${0}` + 1">
            <!-- <p class="zero">0</p>
            <div class="icons__cart">
              <img
                class="icons__cart__img__1"
                src="../assets/images/svg/Cart-top.svg"
                alt=""
              />
              <img
                class="icons__cart__img__2"
                src="../assets/images/svg/Cart-bottom.svg"
                alt=""
              />
            </div> -->
          </div>
          <p class="subtotal pop-16-24-400">$650</p>
        </div>
      </div>
      <div class="cart__section-btns">
        <button class="return btn-white">Return To Shop</button>
        <button class="btn update">Update Cart</button>
      </div>
      <div class="cart__total">
        <div class="left">
          <input id="cart__input" type="text" placeholder="Coupon Code" />
          <button class="btn">Apply Coupon</button>
        </div>
        <div class="right">
          <h2 class="cart__page__text">Cart Total</h2>
          <div class="cart__bottom__right__child__aside hr">
            <h4>Subtotal:</h4>
            <p class="cart__page__price">$1750</p>
          </div>
          <div class="cart__bottom__right__child__aside hr">
            <h4>Shipping:</h4>
            <p class="cart__page__price">Free</p>
          </div>
          <div class="cart__bottom__right__child__aside">
            <h4>Total:</h4>
            <p class="cart__page__price">$1750</p>
          </div>
          <button class="btn checkout">Procees to checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
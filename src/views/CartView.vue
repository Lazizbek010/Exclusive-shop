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

      <div class="cart__menu">
        <div class="cart__header">
          <ul>
            <li><a href="#">Product</a></li>
            <li class="cart__title__text"><a href="#">Price</a></li>
            <li class="cart__title__text"><a href="#">Quantity</a></li>
            <li class="cart__title__text"><a href="#">Subtotal</a></li>
          </ul>
        </div>
        <div class="cart__title__main">
          <img src="../assets/images/svg/Cart-Small-Monitor.svg" alt="" />
          <h5 class="monitor__text">LCD Monitor</h5>
          <p class="monitor__price left__mar__1">$650</p>
          <div class="zero__parent">
            <p class="zero">0</p>
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
            </div>
          </div>
          <p class="total__price left__mar">$650</p>
        </div>
        <div class="cart__title__main">
          <img src="../assets/images/svg/Cart-Small-Gamepad.svg" alt="" />
          <h5 class="monitor__text">H1 Gamepad</h5>
          <p class="monitor__price left__mar__2">$550</p>
          <div class="zero__parent">
            <p class="zero">0</p>
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
            </div>
          </div>
          <p class="total__price left__mar">$1100</p>
        </div>
        <div class="cart__title__btn">
          <button class="cart__title__btn__1">Return To Shop</button>
          <button class="cart__title__btn__1">Update Cart</button>
        </div>
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom__left">
          <input id="cart__input" type="text" placeholder="Coupon Code" />
          <button class="cart__bottom__left__btn">Apply Coupon</button>
        </div>
        <div class="cart__bottom__right">
          <div class="cart__bottom__right__child">
            <p class="cart__page__text">Cart Total</p>
            <div class="cart__bottom__right__child__aside cart__page__hr">
              <h4>Subtotal:</h4>
              <p class="cart__page__price">$1750</p>
            </div>
            <div class="cart__bottom__right__child__aside cart__page__hr">
              <h4>Shipping:</h4>
              <p class="cart__page__price">Free</p>
            </div>
            <div class="cart__bottom__right__child__aside">
              <h4>Total:</h4>
              <p class="cart__page__price">$1750</p>
            </div>
            <button class="cart__page__btn">Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
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
          <li class="item pop-16-24-400">Product</li>
          <li class="item pop-16-24-400">Price</li>
          <li class="item pop-16-24-400">Quantity</li>
          <li class="item pop-16-24-400">Subtotal</li>
        </ul>
        <div class="cart__section-item parent" v-for="item in 2" :key="item">
          <div class="product item">
            <div class="img">
              <img src="../assets/images/svg/Cart-Small-Monitor.svg" alt="" />
              <div class="remove-btn">
                <img src="../assets/icons/icon-cancel.svg" alt="cancel">
              </div>
            </div>
            <div class="pop-16-24-400">LCD Monitor</div>
          </div>
          <p class="price pop-16-24-400 item">$650</p>
          <div class="quantity item">
            <button class="prev" @click="prevQuantityValue()"></button>
            <input type="number" v-model="quantityValue">
            <button class="next" @click="nextQuantityValue()"></button>
          </div>
          <p class="subtotal pop-16-24-400 item">$650</p>
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
import {ref} from 'vue';
const quantityValue = ref(0 );

function prevQuantityValue(){
  if(quantityValue.value>0){
    if(quantityValue.value <10){
      quantityValue.value = "0" + (quantityValue.value - 1) 
    }else{
      quantityValue.value--
    }
  }
}
function nextQuantityValue(){
  quantityValue.value++
  // if(quantityValue.value <10){
  //     quantityValue.value = "0" + (quantityValue.value + 1) 
  //   }else{
  //     quantityValue.value++
  //   }
}

</script>

<style lang="scss" scoped>
</style>
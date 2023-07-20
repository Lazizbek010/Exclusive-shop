<template>
  <div class="checkout">
    <div class="container">
      <div class="breadcrumb">
        <ul class="breadcrumb__list">
          <li>
            <router-link to="/" class="pop-14-21-400">Account</router-link>
          </li>
          <li>
            <router-link to="/contact" class="pop-14-21-400"
              >My Account</router-link
            >
          </li>
           <li>
            <router-link to="/" class="pop-14-21-400">Product</router-link>
          </li>
           <li>
            <router-link to="/" class="pop-14-21-400">View Cart</router-link>
          </li>
           <li>
            <router-link to="/" class="pop-14-21-400 active">CheckOut</router-link>
          </li>
        </ul>
      </div>
      <h1 class="checkout__title">Billing Details</h1>
      <div class="checkout__menu">
        <form action="#" class="checkout__form pop-16-24-400">
          <div class="checkout__form-input">
            <label for="fname">First Name <span>*</span></label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div class="checkout__form-input">
            <label for="compname">Company Name</label>
            <input type="text" id="compname" name="compname" />
          </div>
          <div class="checkout__form-input">
            <label for="address">Street Address <span>*</span></label>
            <input type="text" id="address" name="address" />
          </div>
          <div class="checkout__form-input ">
            <label for="apartment">Apartment, floor, etc. (optional)</label>
            <input type="text" id="apartment" name="apartment" />
          </div>
          <div class="checkout__form-input">
            <label for="city">Town/City <span>*</span></label>
            <input type="text" id="city" name="city" />
          </div>
          <div class="checkout__form-input">
            <label for="phone">Phone Number <span>*</span></label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div class="checkout__form-input">
            <label for="email">Email Address <span>*</span></label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="checkout__form-checked">
            <input type="checkbox" id="save" value="checked"/>
            <label class="pop-16-24-400" for="save"
              >Save this information for faster check-out next time</label
            >
          </div>
        </form>
        <div class="checkout__price">
          <div class="checkout__price-products">
            <div class="checkout__price-item" v-for="item in 2" :key="item">
              <div class="img">
                <img src="/img/Gamepad-Cart-Small.png" alt="" />
              </div>
              <div class="price">
                <p class="pop-16-24-400">LCD Monitor</p>
                <p class="pop-16-24-400">$650</p>
              </div>
            </div>
          </div>
          <div class="checkout__price-total">
            <div class="item pop-16-24-400">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div class="item pop-16-24-400">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div class="item pop-16-24-400">
              <p>Total:</p>
              <p>$1750</p>
            </div>
          </div>
          <div class="checkout__price-bank">
            <div class="check">
              <input type="radio" id="Bank" name="Bank" />
              <label class="pop-16-24-400" for="Bank">Bank</label>
            </div>
            <div class="carts">
              <div class="carts__img">
                <img src="/img/Bkash.svg" alt="Bkash" />
              </div>
              <div class="carts__img">
                <img src="/img/Visa.svg" alt="Bkash" />
              </div>
              <div class="carts__img">
                <img src="/img/Mastercard.svg" alt="Bkash" />
              </div>
              <div class="carts__img">
                <img src="/img/Nagad.svg" alt="Bkash" />
              </div>
            </div>
          </div>
          <div class="checkout__price-cash">
            <input type="radio" id="cash" name="cash" />
            <label class="pop-16-24-400" for="cash">Cash on delivery</label>
          </div>
          <div class="checkout__price-apply">
            <button class="btn btn-white">Coupon Code</button>
            <button class="btn">Apply Coupon</button>
          </div>
          <div class="checkout__price-order">
            <button class="btn">Place Order</button>
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
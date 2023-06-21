<template>
  <div class="contact">
    <div class="container">
      <div class="breadcrumb">
        <ul class="breadcrumb__list">
          <li>
            <router-link to="/" class="pop-14-21-400">Home</router-link>
          </li>
          <li>
            <router-link to="/contact" class="pop-14-21-400 active"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
      <div class="contact__menu">
        <div class="contact__info">
          <div class="contact__img">
            <img src="../assets/images/svg/icons-phone.svg" alt="" />
            <span class="pop-16-24-500">Call To Us</span>
          </div>
          <p class="pop-14-21-400">We are available 24/7, 7 days a week.</p>
          <p class="pop-14-21-400">Phone: +998906310977</p>
          <div class="line"></div>
          <div class="contact__img">
            <img src="../assets/images/svg/icons-mail.svg" alt="" />
            <span class="pop-16-24-500">Write To US</span>
          </div>
          <p class="pop-14-21-400">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p class="pop-14-21-400">Emails: customer@exclusive.com</p>
          <p class="pop-14-21-400">Emails: support@exclusive.com</p>
        </div>
        <div class="contact__form">
          <form action="#">
            <div class="a">
              <input class="pop-16-24-400" type="text" placeholder="Your Name *" />
            </div>
            <div class="b">
              <input class="pop-16-24-400" type="email" placeholder="Your Email *" />
            </div>
            <div class="c">
              <input class="pop-16-24-400" type="tel" placeholder="Your Phone *" />
            </div>
            <div class="d">
              <textarea class="pop-16-24-400" name="" id="" placeholder="Your Message"></textarea>
            </div>
            <button class="f btn" type="submit">Send Massage</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

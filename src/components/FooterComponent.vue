<template>
  <div class="footer">
    <div class="container footer__content">
      <div>
        <div class="footer__logo inter-24-24-700">Exclusive</div>
        <ul class="footer__list">
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li class="footer__email">
            <input
              class="pop-16-24-400-secondary-white"
              type="email"
              placeholder="Enter your email"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                stroke="#FAFAFA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
        </ul>
      </div>
      <ul class="footer__list">
        <li>Support</li>
        <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
      </ul>
      <ul class="footer__list">
        <li v-for="item in account" :key="item.label">{{item.label}}</li>
      </ul>
      <ul class="footer__list">
        <li v-for="item in quickLink" :key="item.label">{{item.label}}</li>
      </ul>
      <div class="footer__app">
        <ul class="footer__list">
          <li>Download App</li>
        </ul>
        <div class="footer__qrcode">
          <p class="pop-12-18-500">Save $3 with App New User Only</p>
          <div class="footer__applications">
            <img class="a" src="../assets/images/svg/qrcode.svg" alt="" />
            <a href="https://play.google.com/store/games" target="_blank">
              <img class="b" src="../assets/images/svg/play-market.svg" alt="" />
            </a>
            <a href="https://www.apple.com/ru/app-store/" target="_blank">
              <img class="c" src="../assets/images/svg/appstore.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="footer__icon">
         <a href="https://www.facebook.com/">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            fill="none"
          >
            <path
              fill="#fff"
              d="M6 7h4.5L10 9H6v9H4V9H0V7h4V5.128c0-1.783.186-2.43.534-3.082A3.635 3.635 0 0 1 6.046.534C6.698.186 7.345 0 9.128 0c.522 0 .98.05 1.372.15V2H9.128c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V7Z"
            />
          </svg>

         </a>
          <a href="https://twitter.com/?lang=ru">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1310_3570)">
              <path
                d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z"
                fill="white"
                stroke="black"
                stroke-width="0.2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1310_3570">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </a>

         <a href="https://www.instagram.com/">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="#fff"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
            />
            <path
              stroke="#fff"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            />
            <path fill="#fff" d="M17.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          </svg>
         </a>

          <a href="https://www.linkedin.com/feed/">
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
              fill="white"
            />
          </svg>
          </a>

        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="pop-16-24-400-secondary-white">
        &copy; Copyright LITECH TEAM 2025. All right reserved
      </p>
    </div>
  </div>
</template>

<script setup>
import { account, quickLink } from './helpers.js'
</script>

<style lang="scss" scoped>
</style>
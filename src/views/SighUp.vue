<template>
    <section>
        <div class="container  ">
            <div class="sighUp">
                <div class="sighUp__left">
                    <img src="../assets/images/png/sighUp.png" alt="">
                </div>
                <div class="sighUp__right  ">
                    <h1>
                        Create an account
                    </h1>
                    <p>Enter your details below</p>
                    <form @submit.prevent="devs">
                        <input class="inp" type="text" placeholder="Name">
                        <input class="inp" type="text" placeholder="Email or Phone Number">
                        <input class="inp lastInp" type="password" placeholder="Password">
                    </form>
                    <button class="sighUp__btn ">
                        Create Account
                    </button>
                    <button class="sighUp__btn1">
                       <img src="../../src/assets/images/svg/Icon-Google.svg" alt=""> Sign up with Google
                    </button>
                    <div class="links">
                        <a class="link1" href="https://google.videos">Already have account?</a>
                        <a  class="link2" href="https://google.videos">Log in</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
export default {

}
</script>

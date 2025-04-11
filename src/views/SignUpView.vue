<template>
  <div>
    <div class="login">
      <div class="login__right">
        <img src="../assets/images/png/sighUp.png" alt="" />
      </div>

      <div class="container">
        <div class="login__left">
          <form action="" @submit.prevent="signUp()">
            <div class="text">
              <h1>Create an account</h1>
              <p>Enter your details below</p>
            </div>
            <div class="inp">
              <input
                v-model="formData.phone_number"
                type="text"
                placeholder="Phone Number"
              />
              <input v-model="formData.email" type="text" placeholder="Email" />
              <input
                v-model="formData.password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="sign">
              <button type="submit" class="btn1">Create Account</button>
              <button class="btn2">
                <img src="../assets/images/png/Icon-Google.png" alt="" /> Sign
                up with Google
              </button>
              <div class="sign___text">
                <p>Already have account? <span class="spn">Log in </span></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

  <script setup>
import { ref, reactive } from "vue";

let BASE_URL = "51.20.10.39:8000/api/v1";
let formData = ref({
  email: "",
  phone_number: "",
  password: "",
});

async function signUp() {
  try {
    const req = await fetch(
      `http://51.20.10.39:8000/api/v1/custom_auth/users/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      }
    );
    const data = await req.json();
    if (!req.ok) {
      console.error("Server error:", data);
    }
    formData.value = {
      email: "",
      phone_number: "",
      password: ""
    };
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
</script>
  
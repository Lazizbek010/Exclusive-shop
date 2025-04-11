<template>
  <div class="account">
    <div class="container">
      <div class="account__header">
        <div class="breadcrumb">
          <ul class="breadcrumb__list">
            <li>
              <router-link to="/" class="pop-14-21-400">Home</router-link>
            </li>
            <li>
              <router-link to="/contact" class="pop-14-21-400 active"
                >My Account</router-link
              >
            </li>
          </ul>
        </div>
        <div class="welcome pop-14-21-400">Welcome! <span>Md Rimel</span></div>
      </div>
      <div class="account__menu">
        <div class="account__list">
          <h3 class="account__list-item">
            <div class="pop-16-24-500">Manage My Account</div>
            <ul>
              <li class="pop-16-24-400 active">My Profile</li>
              <li class="pop-16-24-400">Address Book</li>
              <li class="pop-16-24-400">My Payment Options</li>
            </ul>
          </h3>
          <h3 class="account__list-item">
            <div class="pop-16-24-500">My Orders</div>
            <ul>
              <li class="pop-16-24-400">My Returns</li>
              <li class="pop-16-24-400">My Cancellations</li>
            </ul>
          </h3>
          <h3 class="account__list-item">
            <div class="pop-16-24-500">My WishList</div>
          </h3>
        </div>
        <div class="account__form">
          <h3>Edit Your Profile</h3>
          <form action="#">
            <div class="half">
              <div>
                <label class="pop-16-24-400" for="fname"> First Name </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  name="fname"
                />
              </div>
              <div>
                <label class="pop-16-24-400" for="lname"> Last Name </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  name="lname"
                />
              </div>
            </div>
            <div class="half">
              <div>
                <label class="pop-16-24-400" for="email"> Email </label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
              </div>
              <div>
                <label class="pop-16-24-400" for="address"> Address </label>
                <input
                  type="text"
                  placeholder="Address"
                  id="address"
                  name="address"
                />
              </div>
            </div>
            <div class="full">
              <label class="pop-16-24-400" for="password"
                >Password Changes</label
              >
              <div>
                <input type="password" placeholder="Current Passwod" />
                <input type="password" placeholder="New Passwod" />
                <input type="password" placeholder="Confirm New Passwod" />
              </div>
            </div>
            <div class="account__form-btns">
              <button class="pop-16-24-400">Cancel</button>
              <button class="btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
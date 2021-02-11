<template>
  <div id="login">
    <b-row class="row">
      <b-col class="left">
        <b-card-img class="img" src="@/assets/log.png"></b-card-img>
      </b-col>
      <b-col class="right">
        <b-img src="@/assets/economyLogo.png"></b-img>
        <br />
        <p style="font-size:35px; letter-spacing:-0.5px;">
          <strong>Login</strong> To MyEconomy
        </p>
        Dont have an account yet ?
        <router-link to="/Signup" style="font-size:12px">
          Sign Up Here!</router-link
        >
        <br /><br />
        <div class="input">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input type="text" placeholder="Email"></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Password:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input type="text" placeholder="Password"></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="eye-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>

              <div>
                <p style="text-align:right;  margin-top: 0em; font-size:12px">
                  <a href="">Forgot Password</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/">
          <b-button class="logBtn">Login</b-button></router-link
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  .left {
    background-color: whitesmoke;
    border-radius: 1vh 0vh 0vh 1vh;
  }
  .right {
    background-color: white;
    border-radius: 0vh 1vh 1vh 0vh;
    padding-top: 20px;
  }
  #login {
    background-color: #9eb9ff;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
  .row {
    margin: auto;
    width: 80%;
    height: 100%;
    padding: 30px;
  }
  .img {
    margin-top: 8em;
    width: calc(100% - 2em);
  }
  .input {
    text-align: left;
    margin-left: auto;
    width: 120%;
  }
  .logBtn {
    background-color: #9eb9ff;
    border: none;
    border-radius: 10px;
    width: calc(50%);
    font-size: 20px;
  }
  @media (max-width: 768px) {
    .img {
      display: none;
    }
    .left {
      display: none;
    }
    .right {
      border-radius: 1vh 1vh 1vh 1vh;
      height: auto;
      width: auto;
    }
    .right h1 {
      font-size: 30px;
    }
    .input {
      width: 100%;
    }
    .row {
      width: auto;
    }
  }
  @media (max-width: 576px) {
    .right {
      height: auto;
      border-radius: 1vh 1vh 1vh 1vh;
      width: auto;
    }
    .form-group {
      width: auto;
    }
  }
</style>

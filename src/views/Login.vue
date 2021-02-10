<template>
  <div id="login">
    <b-row class="row">
      <b-col class="left">
        <b-card-img class="img" src="@/assets/log.png"></b-card-img>
      </b-col>
      <b-col class="right"
        ><br /><br />
        <b-img src="@/assets/economyLogo.png"></b-img>
        <br /><br /><br />
        <h1>Login to MyEconomy</h1>
        <p style="font-size:15px">
          Dont have an account yet ? <a href=""> Sign Up Here!</a>
        </p>
        <br />
        <div class="input">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <div class="input-group">
                <b-form-input
                  type="Email"
                  class="form-control"
                  placeholder="Enter Email"
                >
                </b-form-input>
                <span><b-icon-person-fill></b-icon-person-fill> </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-10">
              <div class="input-group">
                <b-form-input
                  type="Password"
                  class="form-control"
                  placeholder="Enter Password"
                >
                </b-form-input>
                <span><b-icon-eye-fill></b-icon-eye-fill> </span>
              </div>
              <div style="padding-top:10px">
                <p style="text-align:right; ">Forgot Password</p>
              </div>
            </div>
          </div>
        </div>

        <b-button class="logBtn">Login</b-button>
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
  }
  #login {
    background-color: #9eb9ff;
    padding: 100px;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
  .row {
    margin: auto;
    width: 80%;
    height: 100%;
  }
  .img {
    margin: auto;
    padding-top: 20%;
  }
  .input {
    text-align: left;
    margin-left: auto;
    width: 90%;
  }
  .logBtn {
    background-color: turquoise;
    border: none;
    padding-top: 10px;
    width: 23vh;
  }
</style>

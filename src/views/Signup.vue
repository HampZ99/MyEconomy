<template>
  <div
    id="Signup"
    v-if="this.$route.name !== 'Login' || this.$route.name !== 'Signup'"
  >
    <b-row class="row">
      <b-col class="left">
        <b-card-img class="img" src="@/assets/log.png"></b-card-img>
      </b-col>
      <b-col class="right">
        <br />
        <br />
        <p style="font-size:35px; letter-spacing:-0.5px;">
          <strong>Sign Up</strong> To MyEconomy
        </p>
        <p style="font-size:15px">
          Allready have an account yet ? <a href=""> Login Here!</a>
        </p>
        <br />
        <div class="input">
          <div class="form-group">
            <label class="control-label col-sm-2" for="Name">Name:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  type="text"
                  placeholder="Name"
                  v-model="name"
                  :state="namevalidate"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback
                :state="namevalidate"
                v-if="hasSubmitted"
              >
                Your Name must be 3-5 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="namedvalidate" v-if="hasSubmitted">
                Looks Good.
              </b-form-valid-feedback>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="password"
              >Password:</label
            >
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  :state="passwordvalidate"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="eye-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Your password must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Looks Good.
              </b-form-valid-feedback>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  type="text"
                  placeholder="Email"
                  v-model="email"
                  :state="validation"
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="at"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback :state="validation" v-if="hasSubmitted">
                invlid Email Address
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation" v-if="hasSubmitted">
                Looks Good.
              </b-form-valid-feedback>
            </div>
          </div>
        </div>
        <router-link to="/login">
          <b-button class="logBtn" @click="onclick"
            >Sign Up</b-button
          ></router-link
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        hasSubmitted: false
      }
    },

    methods: {
      validateEmail() {
        let req = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
        return req.test(this.email)
      },
      validatepassword() {
        if (this.password) {
          return this.password.length > 6 && this.password.length < 13
        }
        return this.password.test(this.password)
      },
      validatename() {
        if (this.name) {
          return this.name.length > 2 && this.name.length < 25
        }
        return this.name.test(this.name)
      },

      onclick() {
        this.hasSubmitted = true
        // this.emailColor = 'green'
      }
    },
    computed: {
      validation() {
        if (this.email) {
          return this.validateEmail() ? true : false
        }
        return null
      },
      passwordvalidate() {
        if (this.password) {
          return this.validatepassword(this.password) ? true : false
        }
        return null
      },
      namevalidate() {
        if (this.name) {
          return this.validatename(this.name) ? true : false
        }
        return null
      }
    }
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
  img {
    max-width: 100%;
  }
  .input-group-text {
    border-right: none;
    border-top: none;
    border-left: none;
    background-color: white;
  }
  .form-control {
    border-right: none;
    border-top: none;
    border-left: none;
  }
  .form-control:focus {
    border: none;
  }
  #Signup {
    background-color: #9eb9ff;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
  }
  .row {
    margin: auto;
    width: 80%;
    height: 100vh;
    padding: 30px;
  }
  .img {
    margin-top: 7em;
    width: calc(100% - 2em);
  }
  .input {
    text-align: left;
    margin-left: auto;
    height: auto;
    width: 120%;
  }
  .logBtn {
    background-color: #9eb9ff;
    border: none;
    border-radius: 10px;
    width: calc(50%);
    font-size: 20px;
    margin-top: 20px;
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

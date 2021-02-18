<template>
  <div id="login">
    <b-row class="row">
      <b-col class="left">
        <b-card-img class="img" src="@/assets/log.png"></b-card-img>
      </b-col>
      <b-col class="right">
        <p style="font-size:40px; letter-spacing:-0.5px;">
          <strong>Login</strong> To
        </p>
        <b-img src="@/assets/economyLogo.png"></b-img>
        <br />
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
                <b-form-input
                  v-model="email"
                  type="text"
                  :state="validation"
                  placeholder="Email"
                  required
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback :state="validation" v-if="hasSubmitted">
                invlid Email Address
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation" v-if="hasSubmitted">
                Looks Good.
              </b-form-valid-feedback>
              <!-- <span
                v-if="msg.email && hasSubmitted"
                :style="{ color: emailColor }"
                :state="validation"
                >{{ msg.email }}</span
              > -->
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Password:</label>
            <div class="col-sm-10">
              <b-input-group class="mb-2">
                <b-form-input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  :state="passwordvalidate"
                  required
                ></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="eye-fill"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
              <b-form-invalid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Your user ID must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback
                :state="passwordvalidate"
                v-if="hasSubmitted"
              >
                Looks Good.
              </b-form-valid-feedback>
              <!-- <b-form-valid-feedback :state="validation" v-if="hasSubmitted">
                Looks Good.
              </b-form-valid-feedback> -->

              <!-- <span v-if="msg.password && hasSubmitted"
                >{{ msg.password }}
              </span> -->
              <div>
                <p style="text-align:right;  margin-top: 0em; font-size:12px">
                  <a href="">Forgot Password</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <router-link to="/">
          <b-button class="logBtn" @click="onclick">Login</b-button>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    component: {},
    data() {
      return {
        name: '',
        email: '',
        password: '',
        msg: [],
        hasSubmitted: false,
        emailColor: 'red'
        // validated: false

        // valid: []
      }
    },

    watch: {
      //   email(value) {
      //     this.email = value
      //     this.validateEmail(value)
      //   },
      // password(value) {
      //    this.password = value
      //   this.validatePassword(value)
      //  }
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

      // validateEmail(value) {
      //   if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) {
      //     this.msg['email'] = 'Valid Email Address'
      //   } else {
      //     this.msg['email'] = 'Invalid Email Address'
      //   }
      // },
      //  validatePassword(value) {
      //    let difference = 8 - value.length
      //    if (value.length < 8) {
      //     this.msg['password'] =
      //        'Must be 8 characters!' + difference + 'characters left'
      //     } else {
      //      this.msg.['password'] = 'Password Valid';
      //    }
      //  },

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
      }
    }
  }
</script>

<style scoped>
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

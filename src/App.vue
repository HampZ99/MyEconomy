<template>
  <div id="app">
    <div
      class="overlay"
      @click="showSidebar = !showSidebar"
      :class="{ show: showSidebar }"
    ></div>
    <div class="wrapper" v-if="this.$route.name !== 'Login'">
      <div class="toggle" @click="showSidebar = !showSidebar">
        <b-icon-list font-scale="2" />
      </div>
      <nav class="sidebar" :class="{ show: showSidebar }">
        <div class="user">
          <div class="actions">
            <b-icon-bell font-scale="1.2" />
          </div>
          <div class="profile">
            <b-icon-person-fill font-scale="4.5" />
          </div>
          <div class="info">
            <h3>User Profile</h3>
            <p>usertest@hotmail.com</p>
          </div>
        </div>
        <div class="items">
          <ul>
            <li>
              <router-link to="/"> <b-icon-compass /> Dashboard</router-link>
            </li>
            <li>
              <router-link to="/history">
                <b-icon-clock-history /> History
              </router-link>
            </li>
            <li>
              <router-link to="/Valuta"
                ><b-icon-bar-chart-line /> Valuta
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
  import {
    BIconCompass,
    BIconClockHistory,
    BIconBarChartLine,
    BIconPersonFill,
    BIconBell,
    BIconList
  } from 'bootstrap-vue'

  export default {
    name: 'App',
    components: {
      BIconCompass,
      BIconClockHistory,
      BIconBarChartLine,
      BIconPersonFill,
      BIconBell,
      BIconList
    },
    data() {
      return {
        showSidebar: undefined
      }
    }
  }
</script>

<style>
  html,
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fafafa;
    padding: 0;
    margin: 0;
  }

  .overlay {
    background-color: #222222;
    position: absolute;
    display: none;
    opacity: 0.6;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  .wrapper {
    display: flex;
  }

  .sidebar {
    transition: ease-in-out 0.4s;
    background: #303d4f;
    color: #fafafa;
    height: auto;
    width: 320px;
    z-index: 1;
  }

  .sidebar ul {
    list-style-type: none;
    margin: 0 1rem;
    padding: 0;
  }

  .sidebar li {
    transition: ease-in-out 0.4s;
    padding: 0.4rem 0.8rem;
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  .sidebar li:hover {
    background: #415269;
    border-radius: 40px;
  }

  .sidebar .items {
    margin-top: 1rem;
  }

  .sidebar ul li a {
    color: #fafafa;
  }

  .sidebar ul li a:hover {
    text-decoration: none;
  }

  .sidebar ul li svg {
    margin-right: 0.5rem;
  }

  .sidebar .user {
    text-align: center;
    border-bottom: 2px solid #43556d;
  }

  .sidebar .user .actions {
    margin: 1rem 1rem 0.5rem 0;
    text-align: right;
  }

  .sidebar .profile svg {
    background: #415269;
    border-radius: 50px;
    margin-bottom: 0.8rem;
    padding: 0.5rem;
    color: #fafafa;
  }

  .sidebar .info h3 {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .sidebar .info p {
    font-size: 0.9rem;
  }

  .toggle {
    background: #222222;
    padding: 0.5rem 1rem;
    text-align: right;
    position: fixed;
    display: none;
    color: #fafafa;
    width: 100%;
    top: 0;
  }

  .toggle svg {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .sidebar {
      box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.5);
      display: none;
      width: 400px;
    }
    .toggle {
      display: block;
    }
    .show {
      display: block;
    }
  }
  @media (max-width: 576px) {
    .sidebar {
      width: 600px;
    }
  }
</style>

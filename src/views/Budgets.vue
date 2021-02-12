<template>
  <div class="Budget">
    <Header title="Budgets" desc="Welcome Back" :date="true" />
    <div id="content">
      <div id="budgetCards" class="travels">
        <h3>
          Travels
          <img
            id="icon"
            src="@/assets/DashboardIcons/plane.png"
            alt="planeIcon"
          />
        </h3>
        <h2>1300 SEK</h2>
      </div>
      <div id="budgetCards">
        <h3>
          Foods
          <img
            id="icon"
            src="@/assets/DashboardIcons/hamburger.png"
            alt="hamburgerIcon"
          />
        </h3>
        <h2>3500 SEK</h2>
      </div>
      <div id="budgetCards">
        <h3>
          Clothes
          <img
            id="icon"
            src="@/assets/DashboardIcons/shirt.png"
            alt="shirtIcon"
          />
        </h3>
        <h2>800 SEK</h2>
      </div>
      <div id="budgetCards">
        <h3>
          Savings
          <img
            id="icon"
            src="@/assets/DashboardIcons/coins.png"
            alt="coinsIcon"
          />
        </h3>
        <h2>2000 SEK</h2>
      </div>
      <input id="btn" type="button" value="Edit budgets" />
      <input class="lastBtn" id="btn" type="button" value="Add budgets" />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {
      Header
    }
  }
</script>

<style scoped>
  .Budget {
    width: 100%;
    height: auto;
    /* background-color: aqua; */
    font-family: 'Open Sans', sans-serif;
    float: left;
  }
  #content {
    width: calc(100% - 4em);
    height: 100vh;
    float: left;
  }
  #budgetCards {
    width: calc(25% - 1.5em);
    height: 15%;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: left;
    margin-left: 2em;
    float: left;
  }
  #budgetCards h3 {
    margin-top: 0em;
  }
  #budgetCards h2 {
    margin-top: 1.5em;
    margin-bottom: 0em;
    float: left;
    font-size: 28px;
  }
  #icon {
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 0.3em;
  }
  .travels {
    margin-left: 0em !important;
  }
  .lastBtn {
    margin-left: 2em;
  }
  #btn {
    background-color: #9eb9ff;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
    border-radius: 6px;
    color: #ffffff;
    margin-top: 2em;
  }
  @media (max-width: 576px) {
    #budgetCards {
      width: 100%;
      float: left;
      margin-left: 0em;
      margin-bottom: 1em;
    }
    #budgetCards h2 {
      margin-top: 0em;
    }
  }
</style>

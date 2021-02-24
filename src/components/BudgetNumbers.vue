<template>
  <div id="contentX">
    <div id="budgetCards" class="travels">
      <h3>
        Travels
        <img
          id="icon"
          src="@/assets/DashboardIcons/plane.png"
          alt="planeIcon"
        />
      </h3>
      <h2>{{ budget1 }} SEK</h2>
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
      <h2>{{ budget2 }} SEK</h2>
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
      <h2>{{ budget3 }} SEK</h2>
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
      <h2>{{ budget4 }} SEK</h2>
    </div>
    <form class="txtBox" ref="form">
      <input
        style="margin-left: 0em;"
        id="txtInput"
        type="text"
        placeholder="Travels Amount..."
        v-model="budget1"
      />
      <input
        id="txtInput"
        type="text"
        placeholder="Foods Amount..."
        v-model="budget2"
      />
      <input
        id="txtInput"
        class="travels"
        type="text"
        placeholder="Clothes Amount..."
        v-model="budget3"
      />
      <input
        id="txtInput"
        type="text"
        placeholder="Savings Amount..."
        v-model="budget4"
      />
      <br />
      <input
        id="btn"
        type="button"
        value="Edit budgets"
        :click="someMethod(budget1, budget2, budget3, budget4)"
      />
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        budget1: null,
        budget2: null,
        budget3: null,
        budget4: null
      }
    },
    inputOne: {
      type: Number
    },
    inputTwo: {
      type: Number
    },
    inputThree: {
      type: Number
    },
    inputFour: {
      type: Number
    },
    methods: {
      someMethod: function(bud1, bud2, bud3, bud4) {
        localStorage.setItem('inputOne', bud1)
        localStorage.setItem('inputTwo', bud2)
        localStorage.setItem('inputThree', bud3)
        localStorage.setItem('inputFour', bud4)
      }
    },
    mounted() {
      this.budget1 = localStorage.getItem('inputOne')
      this.budget2 = localStorage.getItem('inputTwo')
      this.budget3 = localStorage.getItem('inputThree')
      this.budget4 = localStorage.getItem('inputFour')

      console.log(this.budget1)
    }
  }
</script>

<style scoped>
  #budgetCards {
    width: calc(50% - 2em);
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
  #contentX {
    width: calc(100% - 4em);
    float: left;
  }
  .txtBox {
    width: 100%;
    margin-top: 2em;
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 2em;
    float: left;
  }
  #btn {
    background-color: #9eb9ff;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
    border-radius: 6px;
    color: #ffffff;
    margin-left: calc(75% + 1em);
  }
  #txtInput {
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: center;
  }
</style>

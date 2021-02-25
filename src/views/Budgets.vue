<template>
  <div class="Budget">
    <Header title="Budgets" desc="Welcome Back" :date="true" />
    <BudgetNumbers />
    <div>
      <form class="txtBox">
        <input
          style="margin-left: 0em;"
          id="txtInput"
          type="text"
          placeholder="Travels Amount..."
        />
        <input id="txtInput" type="text" placeholder="Foods Amount..." />
        <input id="txtInput" type="text" placeholder="Clothes Amount..." />
        <input id="txtInput" type="text" placeholder="Savings Amount..." />
        <br />
        <input id="btn" type="button" value="Edit budgets" />
      </form>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import BudgetNumbers from '@/components/BudgetNumbers'

  export default {
    components: {
      Header,
      BudgetNumbers
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
  .txtBox {
    width: calc(100% - 4em);
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
  @media (max-width: 576px) {
    .Budget {
      margin-left: 1em;
    }
    #budgetCards {
      width: 100%;
      float: left;
      margin-left: 0em;
      margin-bottom: 1em;
    }
    #budgetCards h2 {
      margin-top: 0em;
    }
    .txtBox {
      display: block;
    }
    #txtInput {
      width: calc(100% + 2em);
      margin-bottom: 1em;
      height: auto;
      float: left;
    }
    #btn {
      margin-left: calc(25% - 2em);
      margin-bottom: 2em;
    }
  }
</style>

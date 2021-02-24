<template>
  <div class="Budget">
    <Header title="Budgets" desc="Welcome Back" :date="true" />
    <BudgetNumbers />
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

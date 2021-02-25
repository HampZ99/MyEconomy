<template>
  <div v-if="this.$store.state.expenses.length !== 0">
    <p v-for="expense in this.$store.state.expenses" :key="expense.id">
      {{ expense.name }} - {{ expense.type }}
      <strong>{{ expense.amount }}kr</strong> ({{ expense.date }})
    </p>
  </div>
  <div v-else>
    <p>No Expenses</p>
  </div>
</template>

<script>
  export default {}
</script>

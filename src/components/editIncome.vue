<template>
  <div>
      <h6 id="header">Edit My Income</h6>
      <b-form class="edit" @submit="onSubmit">
          <input type="number" v-model="income" placeholder="my new income">          
          <b-button type="submit" variant="success">Save</b-button>
      </b-form>
  </div>
</template>

<script>
export default {
  name: "editIncome",
  data(){
    return {
        income:''
    }
  },
  methods: {
      onSubmit(){
          this.$emit('new-income', this.income)
      }
  }

}
</script>

<style scoped>
  #header {
     text-align: center;
     color: #03206980;
  }

</style>
<template>
  <div>
      <b-form class="add"  @submit="onSubmit">
          <b-form-input type="number" v-model="cost" placeholder="Add cost"></b-form-input>
          <b-form-input type="text" :value="description" placeholder="Add description"></b-form-input>
          <b-form-timepicker :value="value" locale="en"></b-form-timepicker>
          <b-button type="submit" id="button">Save</b-button>
      </b-form>
      <!-- <div>-{{cost}}kr, {{description}}, {{value}}</div> -->
  </div>
</template>

<script>
export default {
    name: "addHistory",
    data(){
        return {
            cost:'',
            description:'',
            value:''
        }
    },
    methods: {
        onSubmit(){
            //console.log('abc')
            this.$emit('value-inputs',{cost:this.cost, 
            description:this.description, 
            value:this.value})
            
        }
    }
}
</script>

<style scoped>
  #button {
      background-color: #9eb9ff;
  }

</style>
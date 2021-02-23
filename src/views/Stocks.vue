<template>
  <div class="Stocks">
    <div class="header">
      <Header title="Stocks" desc="Welcome Back" :date="true" />
    </div>
    <div class="table">
         <b-form-fieldset horizontal label="Rows per page" class="col-2" :label-size="6">
      <b-form-select :options="[{text:5,value:5},{text:10,value:10}]" v-model="perPage">
      </b-form-select>
    </b-form-fieldset>
        <b-table fixed responsive="" class="banner"  hover bordered table-responsive :items="items" :filter='filter' :per-page='perPage' :current-page="currentPage" :fields ='fields'>
            <template v-slot:cell(actions) = 'data'>
                <b-button variant="danger" @click="deleteItem(data.item.name)">Delete</b-button> /
                <b-button a href="https://www.swedbank.se/" variant="primary"> Buy</b-button>
                
            </template>
        </b-table>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
    </div>
    <div class="total">
        <h3>Total winst or loss 24h  <span><input type="column" :value='total'></span></h3>
    </div>
    <div class="search">
        <b-row>
            <b-col md=10>
                <b-form-input v-model='filter' type="search" placeholder="Search"></b-form-input>
            </b-col>
        </b-row>
    </div>
  </div>
</template>
       
<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header
    },
    data() {
        return {
            fields: ['name', 'stocks_owned', 'stocks_price', 'stocks_trend_1year', 'stocks_trend_24h', 'actions'],
            perPage: 5,
            currentPage: 1,
            filter:'',
            items: [
                { name: 'Investor B', stocks_owned: 15, stocks_price: 123, stocks_trend_1year: +10, stocks_trend_24h: -60, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Hennes & Mauritz AB', stocks_owned: 80, stocks_price: 306, stocks_trend_1year: 2590, stocks_trend_24h: 59,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Kinnevik B', stocks_owned: 106, stocks_price: 103, stocks_trend_1year: -2210, stocks_trend_24h: -16,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Volvo B', stocks_owned: 12, stocks_price: 125, stocks_trend_1year: 1256, stocks_trend_24h: -156,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Swedbank A', stocks_owned: 86, stocks_price: 230, stocks_trend_1year: 459, stocks_trend_24h: 56,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'SAS', stocks_owned: 29, stocks_price: 415, stocks_trend_1year: -45, stocks_trend_24h: 95,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Latour B', stocks_owned: 156, stocks_price: 156, stocks_trend_1year: 1562, stocks_trend_24h: 1.3,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Embracer Group B', stocks_owned: 45, stocks_price: 94, stocks_trend_1year: 4586, stocks_trend_24h: 12.9,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
           { name: 'Axfood', stocks_owned: 48, stocks_price: 456, stocks_trend_1year: -4569, stocks_trend_24h: 12,  _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }   
        ]
      }
    },
    computed: {
        rows(){
            return this.items.length
        },
        total() {
            return Object.values(this.items).reduce(
                (accumulator, value) =>
           Math.round(accumulator + value.stocks_trend_24h * 100) / 100 ,
        0
      )
    }
    },
    methods: {
        deleteItem(name) {
            const index = this.items.indexOf((x) => x.name === name)
            this.items.splice(index,1)
        }
    }
}
</script>
<style scoped>
  .Stocks {
    height: 100vh;
    width: 100%;
  }
  .total {
    float: right;
    margin-right: 10px;
    margin-top: 30px;
  }
  .search {
    float: left;
    margin-top: 30px;
  }
  .span input {
    text-align: center;
    background-color:#dee2e6;
}
.table {
    width: 100%;
}
</style>
        
                
    
          
          
            
   
       
        






    

<template>
  <div class="Stocks">
      <div class="header">
          <Header title="Stocks" desc="Welcome Back" :date="true"/>
          </div>
    <div class="table">
        <b-table class="banner"  hover bordered table-responsive :items="items" :filter='filter' :per-page='perPage' :current-page="currentPage"></b-table>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
    </div>
    <div class="total">
        <h3>Total winst or loss  <span><input type="column" :value='total'></span></h3>
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
import Header from '@/components/Header';
export default {
    components: {
        Header
        },
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            filter:'',
            
            items: [
                { name: 'Investor B', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 60, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Hennes & Mauritz AB', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Kinnevik B', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Volvo B', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Swedbank A', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'SAS', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Latour B', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Embracer Group B', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
           { name: 'Axfood', stocks_owned: 5, stocks_price: 10, stocks_trend_1year: 10, stocks_trend_24h: 10, _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }   
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
          accumulator + value.stocks_trend_24h ,
        0
      )
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

</style>
    
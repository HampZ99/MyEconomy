<template>
  <div class="Stocks">
      <div class="header">
          <Header title="Stocks" desc="Welcome Back" :date="true"/>
          </div>
    <div class="table">
        <b-table class="banner"  hover bordered table-responsive :items="items" :filter='filter'></b-table>
    </div>
    <div class="total">
        <h3>Total winst or loss  <span><input type="column" :value='total'></span></h3>
    </div>
    <div class="search">
        <b-row>
            <b-col md='3'>
                <p>Search your stocks</p>
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
            filter:'',
            total: '80',
            items: [
                { name: 'Investor B', stocks_owned: '5', stocks_price: 10, stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Hennes & Mauritz AB', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Kinnevik B', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Volvo B', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }, 
          { name: 'Swedbank A', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Swedbank A', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Swedbank A', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } },
          { name: 'Swedbank A', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'dark', stocks_owned: 'secondary', stocks_price: 'primary', stocks_trend_1year: 'secondary',stocks_trend_24h: 'primary' } }    
        ]
      }
    },
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
    margin-top: 30px;
}
.search p {
    float: left;
    margin-left: 5px;
    color: rgb(57, 20, 220);
    font: 1.5em sans-serif;
}
</style>
    
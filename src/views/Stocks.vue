<template>
  <div class="Stocks">
      <div id="dashboardNav">
      <h1>Dashboard</h1>
      <p>Welcome back!</p>
      <div id="dateboxwrap">
        <div id="datebox">
          {{ moment(new Date()).format('YYYY-MM-DD') }}
        </div>
        <hr id="line">
      </div>
    </div>
    <div class="table">
        <b-table  hover bordered :items="items"></b-table>
    </div>
    <div class="total">
        <h3>Total winst or loss  <span><input type="column"></span></h3>
    </div>


    
  </div>
</template>

<script>
export default {};
</script>

<script>
export default {
    data() {
        return {
         
          
        items: [
          { name: 'Investor B', stocks_owned: '5', stocks_price: 10, stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'info', stocks_owned: 'warning', stocks_price: 'warning', stocks_trend_1year: 'warning',stocks_trend_24h: 'warning' } },
          { name: 'Hennes & Mauritz AB', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'info', stocks_owned: 'warning', stocks_price: 'warning', stocks_trend_1year: 'warning',stocks_trend_24h: 'warning' } }, ,
          { name: 'Kinnevik B', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'info', stocks_owned: 'warning', stocks_price: 'warning', stocks_trend_1year: 'warning',stocks_trend_24h: 'warning' } }, 
          { name: 'Volvo B', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'info', stocks_owned: 'warning', stocks_price: 'warning', stocks_trend_1year: 'warning',stocks_trend_24h: 'warning' } }, 
          { name: 'Swedbank A', stocks_owned: '5', stocks_price: '10', stocks_trend_1year: '10', stocks_trend_24h: '10', _cellVariants: { name: 'info', stocks_owned: 'warning', stocks_price: 'warning', stocks_trend_1year: 'warning',stocks_trend_24h: 'warning' } }, 
        ]
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

</style>






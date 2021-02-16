<template>
  <div>
    <div class="header">
      <Header title="Stocks" desc="Welcome Back" :date="true"/>
    </div>
    <b-container class="main">        
      <b-row align-v="stretch">    
        <b-col cols="8" class="current-cash">
            <span class="number">4372,6 SEK</span>
            <p>Left This Month</p>
        </b-col>
        <b-col cols="4"> 
            <b-icon icon="arrow-right" id="icon"></b-icon>       
            <h5 id="header"> History </h5> 
                <b-button variant="outline-primary">Today</b-button> <br>
                <p>-45kr, toilet paper</p> 
                <p>-45kr, toilet paper</p> 
                <p>-45kr, toilet paper</p> 
        </b-col>
      </b-row>
      <b-row align-v="stretch">        git
        <b-col cols="8" class="days-left">
            <span class="number">19</span>
            <p>Days Left</p>
        </b-col>
        <b-col cols="4">       
            <b-button variant="outline-primary">Yesterday</b-button> <br>
            <p>-45kr, toilet paper</p>
            <p>-45kr, toilet paper</p>
            <p>-45kr, toilet paper</p>  
            <b-button variant="outline-primary">This Month</b-button> 
            <p>-45kr, toilet paper</p>
            <p>-45kr, toilet paper</p>
            <p>-45kr, toilet paper</p>     
            <p>-45kr, toilet paper</p>     
            <p>-45kr, toilet paper</p>     
        </b-col>
      </b-row> 
    </b-container>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .current-cash {
    background-color: #9eb9ff80;
    text-align: center;
    padding-top: 75px;
  }
  .days-left {
    background-color: #9eb9ff;
    text-align: center;
    padding-top: 110px;
  }
  #header {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 50px;
  }
  #icon {
    align-content: flex-start;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .number {
    font-size: 20px;
    font-weight: 500;
  }
</style>

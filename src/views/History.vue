<template>
  <div>    
     <b-row> 
       <b-col>  
         <div class="header">
           <Header title="MyEconomy" desc="Welcome Back" :date="true"/>
         </div>
       </b-col>
    </b-row>    
    <b-row align-v="stretch">    
      <b-col cols="8" class="current-cash">
        <span id="tooltip-target-1" class="number">4372,6 SEK</span>       
        <b-tooltip target="tooltip-target-1" triggers="hover">
          You have <b>4372,6</b> cash remain untill your next salary!
        </b-tooltip>
        <p>Left This Month</p>
        <span>My income <b>35000</b> SEK</span>        
      </b-col>
      <b-col cols="4"> 
        <b-icon icon="arrow-right" id="icon-arrow-right"></b-icon>        
        <h5 id="header"> History </h5> 
          <addHistory @value-inputs="receiveInputs"></addHistory>        
          <b-list-group>
            <b-list-group-item button class="button">Today</b-list-group-item>
            <b-list-group-item href="#" variant="secondary" v-for="cost in costs" :key="cost">-{{o.cost}}kr, toilet paper</b-list-group-item> 
            <!-- <b-list-group-item href="#" variant="light">-85kr, pizza lunch</b-list-group-item> 
            <b-list-group-item href="#" variant="secondary">-25kr, morning coffee</b-list-group-item>  -->
          </b-list-group>
      </b-col>
    </b-row>
    <b-row align-v="stretch">        
      <b-col cols="8" class="days-left">
        <b-icon icon="arrow-clockwise" id="icon-arrow-clockwise" animation="spin"></b-icon>
        <b-tooltip target="icon-arrow-clockwise" triggers="hover">
          There are <b>19</b> days remain until your next salary!
        </b-tooltip> 
          <div id="text-wrapper">
             <span class="number">19</span>
             <p>Days Left</p>
          </div>
      </b-col>
      <b-col cols="4">     
        <b-list-group>
          <b-list-group-item button class="button">Yesterday</b-list-group-item>
          <b-list-group-item href="#" variant="secondary">-450kr, grocery shopping</b-list-group-item>
          <b-list-group-item href="#" variant="light">-34kr, transportation fee</b-list-group-item>
          <b-list-group-item href="#" variant="secondary">-25kr, morning coffee</b-list-group-item>  
        </b-list-group>        
        <b-list-group>
          <b-list-group-item button class="button">This Month</b-list-group-item>
          <b-list-group-item href="#" variant="secondary">-45kr, toilet paper</b-list-group-item> 
          <b-list-group-item href="#" variant="light">-85kr, pizza lunch</b-list-group-item> 
          <b-list-group-item href="#" variant="secondary">-25kr, morning coffee</b-list-group-item> 
        </b-list-group> 
      </b-col>
    </b-row>    
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import addHistory from '@/components/addHistory';
  export default {
    components: {
        Header,
        addHistory
        },
    data(){
      return {
        costs: [],
        description: '',
        value: ''
      }
    },
    methods: {
      receiveInputs(o){
        this.cost = o.cost
        console.log(o)
      }
    }    
  }
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
    padding-top: 60px;    
  }
  #header {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 50px;
  }
  #icon-arrow-right {
    align-content: flex-start;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .number {
    font-size: 30px;
    font-weight: 500;   
  }
  #icon-arrow-clockwise{
      width: 190px; 
      height: 190px;
      color: #ffffff;
      align-content: center;      
  } 
  /* need to position the text over the icon */
  #text-wrapper{
      margin-top:-130px;
      display: block;
  }
  .button{
      color: #9eb9ff;
  }
</style>

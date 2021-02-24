<template>
  <div class="Home">
    <Header title="Dashboard" desc="Welcome Back" :date="true" />
    <div id="content">
      <div id="cardWrapLeft">
        <BudgetNumbers />
        <div class="chartDough">
          <ChartDoughnut />
        </div>
      </div>
      <div id="cardWrapRight"></div>
    </div>
  </div>
</template>

<script>
  import ChartDoughnut from '@/components/ChartDoughnut'
  import Header from '@/components/Header'
  import BudgetNumbers from '@/components/BudgetNumbers'

  export default {
    components: {
      Header,
      ChartDoughnut,
      BudgetNumbers
    }
  }
</script>

<style scoped>
  .Home {
    background-color: #fafafa;
    width: 100%;
    height: auto;
    /* background-color: aqua; */
    font-family: 'Open Sans', sans-serif;
    float: left;
  }
  #content {
    width: calc(100% - 4em);
    height: auto;
    float: left;
  }
  #budgetCards {
    width: 50%;
    height: 15%;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: left;
    margin-left: 2em;
    float: left;
  }
  #cardWrapLeft {
    width: calc(50% - 2em);
    float: left;
    margin-bottom: 2em;
  }
  #cardWrapRight {
    width: calc(50% - 2em);
    float: left;
    margin-bottom: 2em;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    border: 2px solid hsla(0, 0%, 0%, 0.2);
    text-align: left;
    margin-left: 2em;
  }
  .chartDough {
    text-align: center;
    float: left;
    width: calc(100% - 3em);
    height: auto;
    border-radius: 6px;
    border: 1px solid hsla(0, 0%, 0%, 0.2);
    margin-bottom: 2em;
    margin-top: 4em;
  }
  #line {
    width: 100%;
    text-align: center;
    opacity: 60%;
  }

  @media (max-width: 576px) {
    #cardWrapLeft {
      width: calc(100% - 2em);
      float: left;
      margin-bottom: 2em;
    }
    #cardWrapRight {
      width: calc(100% - 2em);
      float: left;
      margin-bottom: 2em;
    }
    .travels {
      margin-right: 2em;
    }
    .clothes {
      margin-right: 2em;
    }
    #budgetCards {
      width: calc(50% - 2.5em);
      height: 25%;
      padding: 10px;
      background-color: #ffffff;
      border-radius: 6px;
      border: 2px solid hsla(0, 0%, 0%, 0.2);
      text-align: left;
      margin-bottom: 2em;
      float: left;
    }
    #budgetCards h3 {
      margin-top: 0em;
    }
    #budgetCards h2 {
      margin-top: 1.5em;
      margin-bottom: 0em;
      float: left;
      font-size: 28px;
    }
    #icon {
      width: 20px;
      height: 20px;
      float: right;
      margin-top: 0.3em;
    }
    #dashboardNav {
      width: calc(100% - 4em);
      text-align: left;
      /* background-color: yellow; */
      float: left;
      margin-left: 2em;
      margin-right: 2em;
      margin-bottom: 2em;
      margin-top: 2em;
    }
    #dashboardNav p {
      margin-left: 3px;
    }
    #datebox {
      display: block;
      width: 100px;
      height: auto;
      border-radius: 6px;
      background-color: #9eb9ff;
      float: right;
      margin-top: -3.5em;
      border: 1px solid hsla(0, 0%, 0%, 0.1);
      text-align: center;
      color: #ffffff;
      padding: 5px;
    }
    #tophalf {
      width: 100%;
      height: auto;
      float: left;
    }

    .chartDough {
      text-align: center;
      float: left;
      width: calc(50% - 5em);
      height: auto;
      border-radius: 6px !important;
      border: 1px solid hsla(0, 0%, 0%, 0.2) !important;
      margin-bottom: 2em;
    }
    #line {
      width: 100%;
      text-align: center;
      opacity: 60%;
    }
    @media (max-width: 576px) {
      #dashboardNav {
        margin-top: 4em;
      }
      #cardWrapLeft {
        width: 100%;
        float: left;
      }
      #cardWrapRight {
        width: 100%;
        float: left;
      }
      .chartDough {
        width: 100%;
        float: left;
      }
      #budgetCards {
        width: 100%;
        float: left;
        margin-bottom: 1em;
      }
      #dateboxwrap {
        float: left;
        margin-top: 3em;
      }
      #line {
        margin-top: 0em;
        margin-bottom: 0em;
        width: 295%;
      }
    }
  }
</style>

<template>
  <div class="Home">
    <div id="dashboardNav">
      <h1>Dashboard</h1>
      <p>Welcome back!</p>
      <div id="datebox">
        {{ moment(new Date()).format('YYYY-MM-DD') }}
      </div>
      <hr style="width:100%; text-align:center; opacity:60%">
    </div>
    <div id="content">
      <div id="tophalf">
        <div id="cardWrapLeft">
          <div id="budgetCards" class="travels">
            <h3>Travels
              <img id="icon" src="@/assets/DashboardIcons/plane.png" alt="planeIcon"/>
            </h3>
            <h2>1300 SEK</h2>
          </div>
          <div id="budgetCards">
            <h3>Foods
              <img id="icon" src="@/assets/DashboardIcons/hamburger.png" alt="hamburgerIcon"/>
            </h3>
            <h2>3500 SEK</h2>
          </div>
          <div id="budgetCards" class="clothes">
            <h3>Clothes
              <img id="icon" src="@/assets/DashboardIcons/shirt.png" alt="shirtIcon"/>
            </h3>
            <h2>800 SEK</h2>
          </div>
          <div id="budgetCards">
            <h3>Savings
              <img id="icon" src="@/assets/DashboardIcons/coins.png" alt="coinsIcon"/>
            </h3>
            <h2>2000 SEK</h2>
          </div>
        </div>
        <div id="cardWrapRight">
          <h1>idk</h1>
        </div>
      </div>
      <div id="chartWrap">
        <div id="chart">
          <ChartDoughnut />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartDoughnut from "@/components/ChartDoughnut"

export default {
  components: {
    ChartDoughnut
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
  width: calc(80% - 4em);
  height: auto;
  margin-left: 2em;
  margin-right: 2em;
  float: left;
}
#cardWrapLeft {
  width: calc(50% - 2em);
  float: left;
}
#cardWrapRight{
  width: calc(50% - 2em);
  height: calc(358px - 2em);
  background-color: #FFFFFF;
  float: right;
  border-radius: 6px;
  border: 2px solid hsla(0,0%,0%,0.2);
}
.travels {
    margin-right: 2em;
}
.clothes{
    margin-right: 2em;
}
#budgetCards{
  width: calc(50% - 2.5em);
  height: 25%;
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 6px;
  border: 2px solid hsla(0,0%,0%,0.2);
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
  width: calc(80% - 4em);
  text-align: left;
  /* background-color: yellow; */
  float: left;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 2em;
}
#dashboardNav p {
  width: auto;
  height: auto;
  margin-top: -1.8em;
}
#dashboardNav h1 {
  width: auto;
  height: auto;
}
#datebox {
  display: block;
  width: 100px;
  height: auto;
  border-radius: 6px;
  background-color: #9EB9FF;
  float: right;
  margin-top: -3.5em;
  border: 1px solid hsla(0,0%,0%,0.1);
  text-align: center;
  color: #FFFFFF;
  padding: 5px;
}
#chart {
  width: 200px;
  height: 200px;
  float: left;
  margin: 1em;
}
#chartWrap {
  display: flex;
  justify-content: center;
  width: calc(50% - 2em);
  height: calc(358px - 2em);
  background-color: #FFFFFF;
  float: left;
  border-radius: 6px;
  border: 2px solid hsla(0,0%,0%,0.2);
  margin-top: 2em;
}
#tophalf {
  width: 100%;
  height: auto;
  float: left;
}
</style>

<template>
    <b-card img-bottom>
      <h2>Budgets</h2>
      <p style="white-space: nowrap;"><ChartDoughnutBase :chart-data="chartData" /></p>
    </b-card>
</template>

<script>
import ChartDoughnutBase from "@/components/ChartDoughnutBase";

export default {
  components: {
    ChartDoughnutBase
  },
  data() {
    return {
      chartData: null
    };
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ["Travels", "Food", "Clothes", "Savings"],
        datasets: [
          {
            backgroundColor: ["#00F5D4", "#00BBF9", "#FEE440", "#F15BB5"],
            hoverBackgroundColor: ["#B2FCF2", "#B2EAFD", "#FEF7C5", "#FACDE8"],
            data: [10, 20, 40, 30]
          }
        ]
      }
    }
  }
}
</script>
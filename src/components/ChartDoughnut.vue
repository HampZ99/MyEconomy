<template>
  <b-card title="Doughnut">
    <b-card img-bottom>
      <ChartDoughnutBase :chart-data="chartData" />
    </b-card>
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
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190", "Blue"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7", "Gray"],
            data: [10, 20, 40, 30]
          }
        ]
      }
    }
  }
}
</script>
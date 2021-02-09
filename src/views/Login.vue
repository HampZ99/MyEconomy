<template>
  <div id="Main">
    <h1>Login</h1>
    <div id="container">
      <div class="left">
        <img src="../assets/log.png" class="img" alt="" />
      </div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#Main {
  min-width: 100vh;
  min-height: 100vh;
  background-color: #9eb9ff;
}
#container {
  display: flex;
  background-color: azure;
  margin: 50px;
}
.left {
  background-color: rgb(241, 228, 211);
}
.right {
}
</style>

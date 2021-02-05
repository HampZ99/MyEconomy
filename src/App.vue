<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
<<<<<<< HEAD
    <router-view />
    <p>mohammad</p>
    <p>Wenji Billow</p>
    <p>zeljko</p>
    <p>whatever</p>
    <p>hampus</p>
=======
    <router-view/>
>>>>>>> 9ab5cbd44b1791c4e1b1885d8faaaaffdc0396dd
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

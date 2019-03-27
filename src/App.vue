<template>
  <div id="app">
    <my-map :markersPos='[
        {"lat":35.6432027,"lng":139.6729435},
        {"lat":35.5279833,"lng":139.6989209},
        {"lat":35.6563623,"lng":139.7215211},
        {"lat":35.6167531,"lng":139.5469376},
        {"lat":35.6950961,"lng":139.5037899}
      ]'>
    </my-map>
  </div>
</template>

<script>
import MyMap from "./components/MyMap"

export default {
  components: {
    MyMap
  }  
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

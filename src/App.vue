<template>
  <div id="app">
    <my-map
      :markersPos="[
        { lat: 35.6432027, lng: 139.6729435 },
        { lat: 35.5279833, lng: 139.6989209 },
        { lat: 35.6563623, lng: 139.7215211 },
        { lat: 35.6167531, lng: 139.5469376 },
        { lat: 35.6950961, lng: 139.5037899 }
      ]"
    ></my-map>
    <the-nav-bar />
    <the-footer-menu />
  </div>
</template>

<script>
import TheNavBar from "./components/TheNavBar";
import MyMap from "./components/MyMap";
import TheFooterMenu from "./components/TheFooterMenu";

export default {
  components: {
    TheNavBar,
    MyMap,
    TheFooterMenu
  }
};
</script>

<style lang="scss">
body,
html {
  padding: 0px;
  margin: 0px;
}
</style>

<template>
  <div>
    <div id="map"></div>
    <template v-if="!!this.google && !!this.map"
      >Teste</template
    >
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { mapMutations } from "vuex";

export default {
  props: {
    mapConfig: Object,
    apiKey: String
  },
  computed: {
    google() {
      return this.$store.state.google;
    },
    map() {
      return this.$store.state.map;
    }
  },
  methods: {
    ...mapMutations(["setGoogle", "setMap"]),
    initializeMap() {
      const mapContainer = this.$el.querySelector("#map");
      const { Map } = this.google.maps;
      this.setMap(new Map(mapContainer, this.mapConfig));
    }
  },
  mounted() {
    GoogleMapsApiLoader({
      apiKey: this.apiKey
    }).then(google => {
      this.setGoogle(google);
      this.initializeMap();
    });
  }
};
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100%;
  background-color: gray;
}
</style>

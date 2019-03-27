<template>
  <div>
    <h1>Map</h1>
    <map-loader
      :map-config="mapConfig"
      apiKey="AIzaSyCFFb_9YJLmb3zVtlGMZfagv3xpUJt9R-c"
    ></map-loader>
    <template v-if="map"></template>
  </div>
</template>

<script>
import MapLoader from "./MapLoader";
import MarkerClusterer from "@google/markerclusterer";

export default {
  props: {
    markersPos: Array
  },
  components: {
    MapLoader
  },
  data() {
    return {
      mapConfig: {
        zoom: 12
      },
      teste: "Ahhhhh",
      markers: []
    };
  },
  watch: {
    map(val) {
      if (typeof val === "object") {
        this.loadMarkers();
        this.map.panTo(this.markersPos[0]);
        // navigator.geolocation.getCurrentPosition(pos => {
        //   this.map.panTo({
        //     lat: pos.coords.latitude,
        //     lng: pos.coords.longitude
        //   });
        // });
      }
    }
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
    loadMarkers() {
      this.markersPos.forEach(m => {
        let marker = this.setupMarker(m);
        this.markers.push(marker);
      });
      new MarkerClusterer(this.map, this.markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
      });
    },
    setupMarker(pos) {
      let infoWindow = new this.google.maps.InfoWindow({
        content: "<h1>{{teste}}</h1>"
      });
      let marker = new this.google.maps.Marker({
        position: pos,
        map: this.map
      });

      marker.addListener("click", function() {
        infoWindow.open(this.map, marker);
      });

      return marker;
    }
  }
};
</script>

<style></style>

<template>
  <div class="container">
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
import { mapMutations } from "vuex";

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
        zoom: 12,
        disableDefaultUI: true
      }
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
    },
    markers() {
      return this.$store.state.markers;
    }
  },
  methods: {
    ...mapMutations(["insertMarker"]),
    teste() {
      alert("Aeee2!");
    },
    loadMarkers() {
      this.markersPos.forEach(m => {
        let marker = this.setupMarker(m);
        this.insertMarker(marker);
      });
      new MarkerClusterer(this.map, this.markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
      });
    },
    closeAllInfoWindows() {
      this.markers.forEach(marker => {
        marker.infoWindow.close();
      });
    },
    setupMarker(pos) {
      let self = this;
      let infoWindow = new this.google.maps.InfoWindow({
        content: `<button @click="teste()">Será?</button>
        <audio controls>
          <source src="https://www.myinstants.com/media/sounds/pilot-magic-you-tube-exclusive-in-stereo-1975.mp3" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>`
      });
      let googleMarker = new this.google.maps.Marker({
        position: pos,
        map: this.map,
        icon: "https://i.imgur.com/70Viu3f.png"
      });

      googleMarker.addListener("click", function() {
        self.closeAllInfoWindows();
        self.map.panTo(googleMarker.position);
        infoWindow.open(self.map, googleMarker);
      });

      return { googleMarker, infoWindow };
    }
  }
};
</script>

<style></style>

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    google: null,
    map: null,
    markers: []
  },
  mutations: {
    setGoogle(state, google) {
      state.google = google;
    },
    setMap(state, map) {
      state.map = map;
    },
    insertMarker(state, marker) {
      state.markers.push(marker);
    }
  },
  actions: {}
});

<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyCWV62-MOsXA-ifSUGAb5HXtyikHDVtuJU"
  >
  // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";
import GoogleMapLine from "./GoogleMapLine";

import { mapSettings } from "../../helpers/mapSettings";

export default {
  name: 'TravelMap',
  props: ['markers'],
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },

  data() {
    return {};
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return this.markers[0].position;
    }
  }
};
</script>

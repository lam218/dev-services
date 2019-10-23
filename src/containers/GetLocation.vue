<template>
  <div class="body">
    <div class="body__box">
      <button v-if="latitude === '' || longitude === ''" v-on:click="getLocation">Get location</button>
      <p v-if="latitude !== ''">
        The latitude is:
        <span class="bold">{{latitude}}</span>
      </p>
      <p v-if="longitude !== ''">
        The longitude is:
        <span class="bold">{{longitude}}</span>
      </p>
      <p>
        The postcode is:
        <span class="bold postcode"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "get-location",
  data: function() {
    return {
      latitude: "",
      longitude: ""
    };
  },
  methods: {
    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.latitude = "";
        this.longitude = "";
      }
    },
    showPosition: function(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      // eslint-disable-next-line
      if (google.maps) {
        // eslint-disable-next-line
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode(
          {
            location: { lat: this.latitude, lng: this.longitude }
          },
          function(results, status) {
            if (status === "OK") {
              if (results[0]) {
                document.getElementsByClassName(
                  "postcode"
                )[0].innerHTML = results[0].address_components.filter(
                  item => item.types.indexOf("postal_code") !== -1
                )[0].long_name;
              } else {
                // eslint-disable-next-line
                console.log("nope");
              }
            }
          }
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  &__box {
    text-align: left;
    max-width: 940px;
    margin: 80px auto;
    padding: 20px;
    border: 2px solid #009ebd;
    border-radius: 8px;
  }
}
.bold {
  font-weight: 600;
}
</style>
<template>
  <div>
    <header-header />
    <div id="all">
      <p v-if="fleshMessage" id="fleshMessage">
        Your reservation has been successfully sent! You will be contacted
        within 2 days.
      </p>
      <div v-if="currentItem" id="cityPage">
        <div id="individualHeader">
          <header>
            <span>AzTour - {{ cityName }}</span>
          </header>
          <modal-modal />
        </div>
        <div id="allPictures" class="row">
          <div
            v-for="(item, key) in currentItem.images"
            id="individual"
            :key="key"
            class="card border-success mb-3"
          >
            <div id="img">
              <img :src="item.image" />
            </div>
            <div
              id="cityBody"
              class="card-footer bg-transparent border-success"
            >
              <p>
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div id="information">
          <div id="informationHeader">
            <header>Information</header>
          </div>
          <div id="informationBody" class="row">
            <div id="firstInfo" class="col-auto mr-auto">
              <h5>
                <span><strong>Nationality :</strong></span> Azerbaijanis
              </h5>
              <h5>
                <span><strong>Population :</strong></span> {{ population }}
              </h5>
              <h5>
                <span><strong>Currency :</strong></span> Azerbaijani manat (AZN)
              </h5>
              <h5>
                <span><strong>Area :</strong></span> {{ area }}
              </h5>
            </div>
            <div id="secondInfo" class="col-auto">
              <iframe :src="map" style="border:0;" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <footer-footer />
    </div>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      currentItem: null,
      cityName: "",
      area: "",
      map: "",
      population: null,
    };
  },
  computed: {
    ...mapFields(["fleshMessage"]),
  },
  methods: {
    getData(id) {
      this.axios
        .get(
          "https://aztour-c5318-default-rtdb.firebaseio.com/cities/" +
            id +
            ".json"
        )
        .then((response) => {
          console.log(response.data);
          this.currentItem = response.data;
          this.area = response.data.area;
          this.population = response.data.population;
          this.cityName = response.data.name;
        });
    },
    closeDialog() {
      this.fleshMessage = false;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getData(id);
  },
};
</script>
<style scoped>
#header header {
  font-size: 22px !important;
}
#information {
  background: rgb(37, 109, 167);
  padding: 20px 8px;
  color: snow;
  margin-bottom: 2px !important;
}
#information header {
  color: rgb(184, 203, 218);
}
#informationHeader {
  text-align: center;
  font-size: 32px;
  text-shadow: 1px 1px 1px black !important;
}
#individualHeader {
  text-align: center;
  margin-top: 8px !important;
}
#informationHeader header {
  padding-top: 10px !important;
}
#firstInfo {
  margin-left: 20px;
  margin-top: auto !important;
  margin-bottom: auto !important;
}
#individualHeader header {
  padding-top: 5px !important;
  margin-bottom: 8px;
  color: slateblue;
}
#all {
  padding-top: 45px !important;
}
#informationBody {
  margin-left: 28px;
  height: 45vh;
}
#information {
  padding-bottom: 20px !important;
}
iframe {
  border-radius: 8px !important;
  width: 400px;
  height: 250px;
}
#secondInfo {
  margin-top: 30px !important;
  margin-bottom: 20px !important;
}
#firstInfo h5 {
  font-size: 22px !important;
  line-height: 2.8;
}
#individualHeader header {
  font-size: 32px;
}

h5 span {
  color: rgb(113, 255, 125);
}
a {
  color: snow !important;
}
div#individual {
  border-radius: 8px;
  text-align: center !important;
}
.card-header {
  font-size: 20px;
}
#cityPageHeader {
  margin: 8px auto !important;
  text-shadow: 1px 1px 1px rgb(230, 230, 230);
}
#cityPageHeader header {
  border-radius: 2px;
  font-size: 22px;
  margin-left: 12px;
  color: gray;
  padding: 3.45px;
}
.row {
  justify-content: space-around !important;
  margin: 0px 0px !important;
}
#secondInfo iframe {
  box-shadow: 0 0 1.2vh snow;
}
#cityBody p {
  color: slateblue;
  font-weight: bold !important;
  font-size: 16px;
  max-width: 400px;
  margin: 2px !important;
  padding: 2px !important;
}
img {
  border-radius: 4px;
  border: 0.5px solid gray;
  width: 450px;
  height: 360px;
  padding: 2px;
  object-fit: cover !important;
  background: snow;
  box-shadow: 0 0 1vh darkgray;
  border-radius: 7xpx;
}
#img {
  margin: 0.5 auto;
}
#individual {
  border: 0.5px solid gray;
}
#allPictures {
  background: rgb(228, 228, 228);
  padding: 30px 2px !important;
}

#input input[type="text"] {
  width: 200px;
  height: 40px;
}

@media screen and (max-width: 1497px) {
  #information {
    padding-bottom: 80px !important;
  }
}
@media (max-width: 1000px) {
  #header header {
    font-size: 12px !important;
    margin-left: 0px !important;
  }
  input {
    width: 100px !important;
    height: 25px !important;
  }
}

@media (max-width: 852px) {
  div #firstInfo h5 {
    font-size: 20px !important;
  }
  #secondInfo iframe {
    width: 100% !important;
    height: 100% !important;
  }
  #information {
    padding-bottom: 0px !important;
  }
}
@media screen and (max-width: 732px) {
  div #firstInfo h5 {
    font-size: 18px !important;
  }
  #secondInfo iframe {
    width: 100% !important;
    height: 100% !important;
  }
}
@media (max-width: 685px) {
  #informationHeader {
    padding-top: 0px !important;
    margin-top: 0px !important;
  }
  #informationHeader header {
    font-size: 80% !important;
  }
  div #firstInfo h5 {
    font-size: 16px !important;
  }
  #secondInfo iframe {
    width: 80% !important;
    height: 100% !important;
  }
  #secondInfo {
    margin-right: 0px !important;
  }
}
@media (max-width: 654px) {
  div #firstInfo h5 {
    font-size: 15px !important;
  }
}
@media (max-width: 649px) {
  #cityBody p {
    font-size: 15px !important;
  }
}
@media (max-width: 640px) {
  #secondInfo {
    width: 50% !important;
  }
}
@media (max-width: 598px) {
  #secondInfo {
    width: 45% !important;
  }
}

@media (max-width: 546px) {
  #secondInfo {
    width: 40% !important;
  }
}
@media (max-width: 502px) {
  #secondInfo {
    display: none !important;
  }
  div #firstInfo h5 {
    font-size: 18px !important;
  }
}
@media (max-width: 429px) {
  #header header {
    font-size: 14px !important;
  }
}
@media (max-width: 391px) {
  #header header {
    font-size: 10px !important;
  }
}

@media (max-width: 366px) {
  #header header {
    font-size: 12px !important;
  }
}

@media (max-width: 351px) {
  #header header {
    font-size: 10px !important;
  }
}
</style>

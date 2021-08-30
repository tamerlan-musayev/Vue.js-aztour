<template>
  <div id="cityPage">
    <div id="cityPageHeader" class="row">
      <div id="header" class="col-8">
        <header>Please, select below where you want to go</header>
      </div>
      <div id="input">
        <input v-model="search" type="text" placeholder="Search a city:" />
      </div>
    </div>
    <div v-if="isLoading" class="loader"></div>
    <div
      v-else-if="!isLoading && (!pictures || pictures.length === 0)"
      id="noData"
    >
      There is no data yet! Please,try later...
    </div>
    <div v-else-if="!isLoading && pictures" id="allPictures" class="row">
      <p v-if="searchData.length == 0 && !isLoading" id="notFound">
        City not found! Please check your spelling. <span>&#128521;</span>
      </p>
      <div
        v-for="(picture, key) in searchData"
        id="individual"
        :key="key"
        class="card border-success mb-3"
        :class="{ indiv: !picture.isLoaded }"
      >
        <div class="card-header bg-transparent border-success">
          {{ picture.name }}
        </div>
        <div id="img" :class="{ img2: !picture.isLoaded }">
          <img
            class="img"
            :src="picture.image"
            v-show="picture.isLoaded"
            @load="picture.isLoaded = true"
          />
          <div
            v-if="!picture.isLoaded"
            class="loader"
            :class="{ loader2: !picture.isLoaded }"
          ></div>
        </div>
        <div id="cityBody" class="card-footer bg-transparent border-success">
          <button id="more" class="btn" @click="showMore(picture.id)">
            More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapFields(["show2", "pictures", "isLoading"]),
    searchData() {
      const pictures = Object.keys(this.pictures).map((key) => {
        const picture = this.pictures[key];
        picture.id = key;
        return picture;
      });
      return pictures.filter((picture) => {
        return picture.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.getData();
  },
  created() {
    window.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 27) {
        this.show2 = false;
      }
    });
  },
  methods: {
    editIt(id) {
      this.$router.push("/edit/" + id, { params: { id: id } });
    },
    showMore(id) {
      this.$router.push("/aztour/" + id, { params: { id: id } });
    },
    deleteAll() {
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/cities" + ".json"
        )
        .then(() => {
          this.pictures = [];
          this.show2 = false;
        });
    },
    deleteItem(id) {
      console.log(id);
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/cities/" +
            id +
            ".json"
        )
        .then((response) => {
          this.$store.dispatch("getCities");
          return response;
        });
    },
    getData() {
      this.$store.dispatch("getCities");
    },
    openDialog2() {
      this.show2 = true;
    },
    closeDialog2() {
      this.show2 = false;
    },
  },
};
</script>
<style>
@media (max-width: 1379px) {
  #allPictures {
    padding: 18px 200px !important;
  }
  div#individual {
    width: 30%;
  }
  #img .img {
    width: 100%;
    padding: 2px !important;
  }
}
@media (max-width: 1359px) {
  div#individual {
    width: 30%;
  }
  #img .img {
    width: 100%;
    padding: 2px;
  }
}
@media (max-width: 1000px) {
  #img .img {
    width: 350px;
    height: 280px;
  }
  .img {
    padding: 0px 1px;
    margin: 0px 3px !important;
  }
  #header header {
    font-size: 12px !important;
    margin-left: 0px !important;
  }
}

@media (max-width: 1032px) {
  div#individual {
    width: 100% !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
  }
}

@media (max-width: 1001px) {
  div#individual {
    width: 48% !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
  }
  #header header {
    font-size: 100% !important;
  }
}
@media (max-width: 852px) {
  div#individual {
    width: 46% !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
  }
}
@media (max-width: 665px) {
  div#individual {
    width: 48% !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
  }
}
@media (max-width: 561px) {
  #header {
    display: none !important;
  }
  #input {
    margin-top: 0px !important;
  }
}
@media (max-width: 520px) {
  div#individual {
    width: 100% !important;
    margin: 10px 50px !important;
  }
  #input input {
    float: left !important;
    margin-left: 0px !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
  }
}
@media (max-width: 444px) {
  div#individual {
    width: 100% !important;
    margin: 10px 30px !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
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
  div#individual {
    width: 100% !important;
    margin: 10px 1px !important;
  }
  #img .img {
    width: 98%;
    padding: 2px;
  }
  #header header {
    font-size: 12px !important;
  }
}

@media (max-width: 351px) {
  #header header {
    font-size: 10px !important;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 30%;
  width: 60px;
  margin-left: auto !important;
  margin-right: auto !important;
  height: 60px;
  animation: spin 2s linear infinite;
}
#noData {
  font-size: 18px !important;
  text-align: center;
  text-shadow: 1px 1px 1px darkgray !important;
  margin-top: 28px !important;
}
</style>
<style scoped>
#notFound {
  text-align: center;
  margin-top: 15px !important;
  color: rgb(255, 68, 68);
  font-size: 18px !important;
}
#input input::placeholder {
  padding-left: 2px !important;
}
#input input {
  border: none !important;
  background: rgba(0, 139, 139, 0.938) !important;
  height: 40px;
  color: blanchedalmond;
}
#input input:focus {
  box-shadow: 0 0 1vh darkcyan;
}
#header header {
  font-size: 22px !important;
}
a {
  color: snow !important;
}
button:hover {
  color: rgb(207, 207, 207) !important;
}
div#individual {
  border-radius: 8px;
  text-align: center !important;
}
.indiv {
  width: 450px !important;
  height: 100%;
}
.card-header {
  font-size: 20px;
}
#cityPage {
  min-height: 61.2vh !important;
}
#cityPageHeader {
  margin: 8px auto !important;
  text-shadow: 0.5px 0.5px 0.5px darkcyan;
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
.img {
  border-radius: 4px;
  border: 0.5px solid gray;
  width: 450px;
  height: 360px;
  padding: 2px;
  object-fit: cover !important;
  background: snow;
  box-shadow: 0 0 1vh darkgray;
  border-radius: 8px;
}
.card-footer #more {
  background: darkslateblue;
  color: snow;
  width: 8rem;
  text-shadow: 1px 1px 1px black !important;
}
#edit,
#delete {
  width: 6rem;
  margin: 0 2px;
}
#img {
  margin: 16px auto;
}
.img2 {
  height: 360px;
  position: relative;
  width: 100%;
}
.loader2 {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  position: absolute;
}
#individual {
  border: 0.5px solid gray;
}
#allPictures {
  background: rgb(228, 228, 228);
  padding: 18px 2px !important;
}
.card-header {
  color: darkblue;
}
</style>

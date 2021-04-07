<template>
  <div id="new">
    <div id="header">
      <header>Add New City</header>
    </div>
    <div id="content">
      <form @submit.prevent>
        <div id="main">
          <header>Main</header>
          <input
            v-model="newItem.name"
            class="main"
            type="text"
            placeholder="Name of the city:"
          />
          <br />
          <input
            v-model="newItem.image"
            type="text"
            placeholder="Image URL:"
            class="main2"
          />
          <input v-model="newItem.map" type="text" placeholder="Map URL:" />
          <input
            v-model="newItem.population"
            type="text"
            placeholder="Population:"
            class="main2"
          />
          <input v-model="newItem.area" type="text" placeholder="Area:" class="area" />
        </div>
        <div id="addDiv" align="center">
          <button id="addImage" class="btn btn-info" @click="addImage">
            <i class="fas fa-plus" />
          </button>
        </div>
        <div v-if="makeTrue" id="individualSelect">
          <div>
            <div id="individualHeader" align="center">
              <h6>Individual ({{ newItem.images.length }})</h6>
            </div>
            <div id="allPictures" class="row">
              <div
                v-for="(it, key) in newItem.images"
                id="individual"
                :key="key"
                class="card border-success mb-3"
              >
                <div id="img">
                  <input
                    id="img-input"
                    v-model="it.image"
                    type="text"
                    placeholder="Image URL:"
                  />
                </div>
                <div
                  id="cityBody"
                  class="card-footer bg-transparent border-success"
                >
                  <input
                    id="description"
                    v-model="it.description"
                    type="text"
                    placeholder="Description:"
                  />
                </div>
                <button
                  id="removeImage"
                  class="btn btn-danger"
                  @click="removeImage(key)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div v-if="makeTrue" id="submitButton">
        <button id="submit" class="btn btn-success" @click="openDialog">
          Submit
        </button>
        <div v-if="show" class="backdrop" @click="closeDialog" />
        <transition name="dialog">
          <dialog v-if="show" open class="dialog">
            <header id="dialogHeader">
              <h4 align="center">
                Are you sure?
              </h4>
              <br />
              <div id="answer">
                <button id="no" class="btn btn-danger" @click="closeDialog">
                  No
                </button>
                <button id="yes" class="btn btn-success" @click="addCity">
                  Yes
                </button>
              </div>
            </header>
          </dialog>
        </transition>
      </div>
    </div>
    <router-view name="admin" />
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      makeTrue: false,
    };
  },
  computed: {
    ...mapFields(["show", "newItem"]),
  },
  mounted() {
    window.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 27) {
        this.show = false;
      }
    });
    this.newItem = {
      name: "",
      image: "",
      map: "",
      images: [],
      population: null,
      area: null,
    };
  },
  methods: {
    addCity() {
      this.$store.dispatch("addCity").then(() => {
        this.$store.dispatch("getCities");
        this.$router.push("/");
      });
    },
    openDialog() {
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    },
    addImage() {
      this.newItem.images.push({
        image: "",
        description: "",
      });
      this.makeTrue = true;
    },
    removeImage(key) {
      this.newItem.images.splice(key, 1);
      if (this.newItem.images.length < 1) {
        this.makeTrue = false;
      }
    },
    deleteAllCities() {
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/cities" + ".json"
        )
        .then((response) => {
          return response;
        });
    },
  },
};
</script>
<style scoped>
#img-input,
#description {
  height: 45px !important;
}
#main {
  background: whitesmoke;
}
#main header {
  margin-top: 8px !important;
  margin-bottom: 12px !important;
}
#main input {
  width: 450px !important;
  height: 50px !important;
}
.area {
  margin-bottom: 12px !important;
}
button {
  cursor: pointer;
}
#removeImage,
#addImage {
  cursor: pointer !important;
}
input {
  color: darkblue !important;
}
#removeImage {
  margin-bottom: 0px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
#addImage {
  margin: 8px auto !important;
  font-size: 20px !important;
  padding: 0px !important;
  width: 55px !important;
  height: 50px !important;
}
#answer {
  margin-top: 8px !important;
  text-align: center !important;
  margin-bottom: 8px !important;
}
#individualHeader {
  padding-top: 30px;
  padding-bottom: 0px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
#individualHeader h6 {
  font-size: 22px !important;
  color: darkblue;
}
#yes,
#no {
  width: 60px;
  height: auto;
}
h4 {
  margin-top: 8px !important;
}
#yes {
  margin-left: 8px;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
.main2 {
  margin-top: 20px !important;
  margin-bottom: 18px !important;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 10px;
  border: none !important;
  box-shadow: 0 0 1vh black;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

#dialogHeader {
  padding-bottom: 14px !important;
  border: none !important;
  background-color: darkcyan;
  color: white;
  width: 100%;
  padding: 1rem;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 15rem);
    width: 35rem;
  }
}
#addDiv {
  margin-bottom: 16px;
}
label {
  margin-top: 35% !important;
  margin-bottom: 35% !important;
  display: inline-block;
  cursor: pointer;
  background: darkslateblue;
  color: snow;
  padding: 10px;
  border-radius: 8px;
}
label:hover {
  background: blueviolet;
  transition: all 0.3s;
}
label span {
  max-width: 300px !important;
}
.upload {
  position: absolute;
  overflow: hidden;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}

p:empty:not(:focus)::before {
  content: attr(data-placeholder);
  padding: 0px !important;
  margin: 0px !important;
}
#cityBody p {
  color: slateblue;
  font-weight: bold !important;
  font-size: 16px;
  max-width: 400px;
  width: 400px;
  margin: 2px !important;
  padding: 2px !important;
}
#cityBody,
#description {
  margin-bottom: 0px !important;
}
* {
  font-weight: bold !important;
}
#img input {
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 170px !important;
  border: 0.5px solid gray;
  background: snow;
  box-shadow: 0 0 0.6vh darkgray;
  border-radius: 2px;
}
input {
  border: 2px solid darkcyan !important;
  border-radius: 4px !important;
}
input:focus {
  outline: none !important;
  border: 2px solid blue !important;
}
#img {
  margin: 0.5 auto;
  height: 360px;
}
#individualSelect {
  padding-bottom: 16px !important;
  border-radius: 4px !important;
  margin-left: 16px !important;
  margin-right: 16px !important;
  text-align: center;
  box-shadow: 0 0 0.4vh darkgray !important;
  background: whitesmoke;
}
#allPictures {
  padding: 0px 2px !important;
  padding-bottom: 20px !important;
}
#individual input {
  height: 40px;
  margin: 2px;
  width: 220px !important;
  background: snow;
}
#header {
  margin: 30px auto;
  margin-bottom: 40px !important;
  background: snow;
  box-shadow: 0 0 0.6vh darkcyan !important;
  max-width: 300px;
  text-align: center;
  border-radius: 20px;
}
#header header {
  padding: 6px !important;
  color: darkblue !important;
  font-weight: bold;
  font-size: 28px;
  text-shadow: 0.5px 0.5px 0.5px darkcyan !important;
  text-align: center;
  font-weight: bold;
}
form header {
  font-size: 22px;
  margin-top: 0px !important;
  margin: 8px auto;
}

div #main {
  color: darkblue;
  text-align: center !important;
  margin: 20px auto !important;
  border-radius: 8px !important;
  box-shadow: 0 0 0.5vh darkgray;
  max-width: 550px;
  padding-top: 8px !important;
  padding: 18px 0px;
}
input {
  padding-left: 5px !important;
}
#individual {
  margin: 10px auto !important;
  margin-top: 18px !important;
  border-radius: 8px !important;
  box-shadow: 0 0 0.7vh steelblue;
  max-width: 446px !important;
  width: 446px !important;
  padding-top: 8px !important;
  padding: 18px 0px;
}
#individualSelect {
  box-shadow: 0 0 0.3vh darkgray;
}
#submitButton {
  text-align: center;
}
#submit {
  margin: 50px auto !important;
  width: 100px !important;
  height: 40px !important;
}
.row {
  margin: 0 auto !important;
}
</style>

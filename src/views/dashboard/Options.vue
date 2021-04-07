<template>
  <div id="options">
    <div id="header">
      <header>Options</header>
    </div>
    <div class="row">
      <div class="col-6">
        <button class="btn btn-danger" @click="deleteAllCities">
          Delete all cities
        </button>
        <br />
        <button class="btn btn-danger" @click="deleteAllBestPlaces">
          Delete all best places
        </button>
        <br />
        <button class="btn btn-danger" @click="deleteAllNews">
          Delete all news
        </button>
      </div>
      <div class="col-6">
        <div id="submitButton">
          <button class="btn btn-danger" @click="openDialog">
            Add Reason
          </button>
          <div v-if="show" class="backdrop" @click="closeDialog"></div>
          <transition name="dialog">
            <dialog open v-if="show" class="dialog">
              <header id="dialogHeader">
                <h4 align="center">Add reason to 'FeedBack'</h4>
                <div id="context" align="center">
                  <input type="text" v-model="reason" placeholder="Reason:" />
                </div>
                <div id="answer">
                  <button
                    class="btn btn-danger width"
                    id="no"
                    @click="closeDialog"
                  >
                    No
                  </button>
                  <button
                    class="btn btn-success width"
                    id="yes"
                    @click="addReason"
                  >
                    Yes
                  </button>
                </div>
              </header>
            </dialog>
          </transition>
        </div>
        <div id="submitButton">
          <button class="btn btn-danger" @click="openDialog2">
            Add Vacance
          </button>
          <div v-if="show2" class="backdrop" @click="closeDialog"></div>
          <transition name="dialog">
            <dialog open v-if="show2" class="dialog">
              <header id="dialogHeader">
                <h4 align="center">Add Vacance to 'Job Applications'</h4>
                <div id="context" align="center">
                  <input type="text" v-model="vacance" placeholder="Vacance:" />
                </div>
                <div id="answer">
                  <button
                    class="btn btn-danger width"
                    id="no"
                    @click="closeDialog"
                  >
                    No
                  </button>
                  <button
                    class="btn btn-success width"
                    id="yes"
                    @click="addVacance"
                  >
                    Yes
                  </button>
                </div>
              </header>
            </dialog>
          </transition>
        </div>
        <div id="submitButton">
          <button class="btn btn-danger" @click="openDialog3">
            Change Prices
          </button>
          <div v-if="show3" class="backdrop" @click="closeDialog"></div>
          <transition name="dialog">
            <dialog open v-if="show3" class="dialog">
              <header id="dialogHeader">
                <h4 align="center">Changing the price</h4>
                <div id="context" align="center">
                  <h4>Now price: {{ mainPrice }} $</h4>
                  <input
                    type="number"
                    placeholder="New price:"
                    v-model="newPrice"
                  />
                </div>
                <div id="answer">
                  <button
                    class="btn btn-danger width"
                    id="no"
                    @click="closeDialog"
                  >
                    No
                  </button>
                  <button
                    class="btn btn-success width"
                    id="yes"
                    @click="changePrice"
                  >
                    Change
                  </button>
                </div>
              </header>
            </dialog>
          </transition>
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
      show: false,
      show2: false,
      show3: false,
      reason: "",
      vacance: "",
      newPrice: null,
    };
  },
  computed: {
    ...mapFields(["mainPrice"]),
  },
  methods: {
    openDialog() {
      this.show = true;
    },
    openDialog2() {
      this.show2 = true;
    },
    openDialog3() {
      this.show3 = true;
    },
    closeDialog() {
      this.show = false;
      this.show2 = false;
      this.show3 = false;
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
    deleteAllBestPlaces() {
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/best" + ".json"
        )
        .then((response) => {
          return response;
        });
    },
    deleteAllNews() {
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/news" + ".json"
        )
        .then((response) => {
          return response;
        });
    },
    addReason() {
      this.axios.post(
        "https://aztour-c5318-default-rtdb.firebaseio.com/reason" + ".json",
        {
          reason: this.reason,
        }
      );
      this.reason = "";
      this.show = false;
    },
    addVacance() {
      this.axios.post(
        "https://aztour-c5318-default-rtdb.firebaseio.com/vacance" + ".json",
        {
          vacance: this.vacance,
        }
      );
      this.vacance = "";
      this.show2 = false;
    },
    changePrice() {
      this.axios.put(
        "https://aztour-c5318-default-rtdb.firebaseio.com/mainPrice" + ".json",
        {
          mainPrice: this.newPrice,
        }
      );
      console.log(this.mainPrice);
      this.newPrice = null;
      this.show3 = false;
    },
  },
  mounted() {
    window.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 27) {
        this.show = false;
        this.show2 = false;
        this.show3 = false;
      }
    });
  },
};
</script>
<style scoped>
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
.col-6 button {
  margin-top: 60px !important;
}
.col-6 button {
  width: 200px;
  height: 40px !important;
}
.row {
  margin: 40px auto !important;
  text-align: center !important;
}
#answer {
  margin-top: 8px !important;
  text-align: center !important;
  margin-bottom: 4px !important;
}
#closeButton {
  background: transparent;
  border: 0px !important;
  margin-top: 5px;
  cursor: pointer !important;
}
#closeButton:hover {
  opacity: 0.7;
}
#closeButton:active {
  box-shadow: inset 0 0 3vh red !important;
}
#yes,
#no {
  width: 60px;
  height: auto;
}
h4 {
  margin-top: 12px !important;
}
#yes {
  margin-left: 18px;
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

dialog {
  position: fixed;
  top: 15vh !important;
  /* left: 80vh !important; */
  margin-left: auto !important;
  margin-right: auto !important;
  width: 30% !important;
  z-index: 100;
  border-radius: 10px;
  border: none !important;
  box-shadow: 0 0 1vh black;
  padding: 0;
  overflow: hidden;
  background-color: white;
}

#dialogHeader {
  padding-top: 26px;
  padding-bottom: 14px !important;
  border: none !important;
  background-color: darkcyan;
  color: white;
  width: 100%;
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
#context input {
  outline: none !important;
  color: darkblue !important;
  padding: 6px 2px !important;
  border-radius: 5px !important;
  background: snow !important;
}
#context input:focus {
  box-shadow: 0 0 0.8vh darkblue !important;
}
#context {
  margin-top: 50px !important;
}
.width {
  width: 80px !important;
}
</style>

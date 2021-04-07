<template>
  <div class="all">
    <button id="reserve" class="btn" @click="openDialog">
      Reserve
    </button>
    <!-- <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
      <input type="range" id="b" name="b" value="50" /> +
      <input type="number" id="a" name="a" value="10" /> =
      <output name="result" for="a b">60</output>
    </form> -->
    <div v-if="show" class="backdrop" @click="closeDialog" />
    <transition name="dialog">
      <dialog v-if="show" open class="dialog">
        <header id="dialogHeader">
          <button
            id="closeButton"
            style="float:right"
            title="Close"
            @click="closeDialog"
          >
            <img src="../assets/close.png" width="30" />
          </button>
          <slot name="header">
            <div id="reservecity">
              <form @submit.prevent="reversePlace">
                <header>Reserve</header>
                <div id="names">
                  <div id="name">
                    <input
                      v-model="name"
                      type="text"
                      placeholder="Name:"
                      name="name"
                    />
                  </div>
                  <div id="surname">
                    <input
                      v-model="surname"
                      type="text"
                      placeholder="Surname:"
                      name="surname"
                    />
                  </div>
                </div>
                <div id="date">
                  <input
                    id="date_first"
                    v-model="date1"
                    type="date"
                    :min="todayIsGood"
                  />
                  <input
                    id="date_second"
                    v-model="date2"
                    type="date"
                    :min="todayIsBad"
                  />
                </div>
                <div id="selectCity">
                  <select v-model="city">
                    <option value="Baku">
                      Baku
                    </option>
                    <option value="Nahcivan">
                      Nahcivan
                    </option>
                    <option value="Ganja">
                      Ganja
                    </option>
                  </select>
                </div>
                <div id="personQuantity">
                  <input
                    v-model="person"
                    type="number"
                    placeholder="Number of people:"
                  />
                </div>
                <div id="email">
                  <input v-model="email" type="email" placeholder="E-mail:" />
                </div>
                <div id="price" align="center">
                  <p>Price: {{ price }} $</p>
                </div>
                <div id="buttonReserve" align="center">
                  <button class="btn btn-success">
                    Reserve
                  </button>
                </div>
              </form>
            </div>
          </slot>
        </header>
      </dialog>
    </transition>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {
      show: false,
      city: "Baku",
      name: "",
      surname: "",
      email: "",
      date1: "",
      date2: "",
      person: 1,
      price: 20,
      timeDate: "",
      todayIsGood: "",
      todayIsBad: "",
    };
  },
  computed: {
    ...mapFields(["fleshMessage", "mainPrice"]),
    clickMe() {
      const date = new Date(this.date1);
      const date2 = new Date(this.date2);
      const day = date.getDate();
      const day2 = date2.getDate();
      let result = parseInt(day2 - day);
      this.price = result * this.person * this.mainPrice;
    },
  },
  watch: {
    clickMe(newValue) {
      console.log(newValue);
    },
  },
  methods: {
    openDialog() {
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    },
    reversePlace() {
      if (
        this.name == "" ||
        this.surname == "" ||
        this.email == "" ||
        !this.email.includes("@") ||
        this.person == null
      ) {
        alert("Error! Please check all fields!");
      } else {
        const date = new Date(this.date1);
        const date2 = new Date(this.date2);
        const day = date.getDate();
        const day2 = date2.getDate();
        let result = parseInt(day2 - day);
        console.log(result);
        this.price = result * this.person * mainPrice;
        var today = new Date();
        var dateforTime =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        this.timeDate = dateforTime + " " + time;
        this.axios.post(
          "https://aztour-c5318-default-rtdb.firebaseio.com/reservation" +
            ".json",
          {
            name: this.name,
            surname: this.surname,
            date1: this.date1,
            date2: this.date2,
            city: this.city,
            person: this.person,
            email: this.email,
            price: this.price,
            timeDate: this.timeDate,
          }
        );
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = "0" + dd;
        }
        if (mm < 10) {
          mm = "0" + mm;
        }
        var today2 = new Date();
        var dd2 = today2.getDate() + 1;
        var mm2 = today2.getMonth() + 1; //January is 0!
        var yyyy2 = today2.getFullYear();
        if (dd2 < 10) {
          dd2 = "0" + dd2;
        }
        if (mm2 < 10) {
          mm2 = "0" + mm2;
        }

        today = yyyy + "-" + mm + "-" + dd;
        today2 = yyyy2 + "-" + mm2 + "-" + dd2;
        this.todayIsBad = today2;
        this.date2 = today2;
        this.todayIsGood = today;
        this.date1 = today;
        (this.name = ""),
          (this.surname = ""),
          (this.date1 = today),
          (this.date2 = today2),
          (this.city = "Baku"),
          (this.person = 1),
          (this.email = ""),
          (this.price = 20),
          (this.show = false);
        this.fleshMessage = true;
      }
    },
  },
  created() {
    //good
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    this.todayIsGood = today;
    this.date1 = today;
    //bad
    var today2 = new Date();
    var dd2 = today2.getDate() + 1;
    var mm2 = today2.getMonth() + 1; //January is 0!
    var yyyy2 = today2.getFullYear();
    if (dd2 < 10) {
      dd2 = "0" + dd2;
    }
    if (mm2 < 10) {
      mm2 = "0" + mm2;
    }

    today2 = yyyy2 + "-" + mm2 + "-" + dd2;
    this.todayIsBad = today2;
    this.date2 = today2;
  },
  mounted() {
    window.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 27) {
        this.show = false;
      }
    });
    this.axios
      .get(
        "https://aztour-c5318-default-rtdb.firebaseio.com/mainPrice" + ".json"
      )
      .then((response) => {
        this.mainPrice = response.data.mainPrice;
        console.log(response.data.mainPrice);
      });
  },
};
</script>
<style>
#flesh {
  box-shadow: 0 0 1vh darkgray !important;
  padding-top: 45px !important;
}
#fleshMessage {
  text-align: center;
  color: snow;
  background: rgb(48, 221, 48);
  padding: 18px;
  margin-top: 0px !important;
}
#closeButton {
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin-top: 2px !important;
  margin-left: 0px !important;
}
</style>
<style scoped>
input,
select {
  border: 2px solid darkgray !important;
  padding-left: 3px !important;
}
input:focus,
select:focus {
  border: 2px solid blue !important;
  outline: none !important;
}
input[type="date"]::-webkit-datetime-edit {
  color: #999;
}
.all {
  display: inline-block;
  margin-left: 28px !important;
}
#reserve {
  background: darkslateblue;
  height: 45px;
  width: 100px;
  color: snow;
  margin-bottom: 20px !important;
}
#reserve:hover {
  color: whitesmoke;
  background: green;
}
#reserve:focus {
  background: yellowgreen;
}
#email {
  text-align: center;
}
#reservecity {
  height: auto;
  margin-top: 8px !important;
  padding: 8px 0px !important;
}
#name {
  float: left;
  margin-left: 30px;
}
#surname {
  float: right;
  margin-right: 30px;
}
form {
  background-color: snow;
  border: 1px solid snow;
  border-radius: 8px !important;
  max-width: 470px;
  margin-top: 30px !important;
  margin-bottom: 20px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  box-shadow: 0 0 1vh black;
  height: 442px;
}
select {
  color: darkblue !important;
}
input {
  margin-top: 20px;
  color: darkblue !important;
}
#buttonReserve button {
  margin-top: 8px;
  width: 220px;
}
form header {
  margin-top: 20px;
  text-shadow: 1px 1px 1px darkgray;
  color: black !important;
  font-size: 28px;
  text-align: center;
}
input[type="text"],
input[type="date"],
input[type="number"],
select {
  width: 200px;
  height: 40px;
}
input[type="email"] {
  width: 205px;
  height: 40px;
}
#selectCity {
  margin-left: 30px;
  margin-top: 20px;
  float: left;
}
#personQuantity {
  float: right;
  margin-right: 30px;
}
#date_first {
  margin-left: 30px;
  float: left;
}
#date_second {
  margin-right: 30px !important;
  float: right;
}
#price p {
  font-size: 18px;
  color: black;
  margin-top: 20px;
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
  top: 15vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 1vh black;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

#dialogHeader {
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
@media screen and (max-width: 1255px) {
  dialog {
    top: 10vh !important;
  }
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 15rem);
    width: 35rem;
  }
}
@media screen and (max-width: 626px) {
  form {
    width: 100%;
    height: 90%;
  }
  input,
  select {
    width: 170px !important;
    height: 40px !important;
  }
  button {
    margin-bottom: 18px !important;
  }
}
@media screen and (max-width: 613px) {
  form {
    width: 90%;
    height: 80%;
  }
  input,
  select {
    width: 140px !important;
    height: 40px !important;
  }
}
@media screen and (max-width: 588px) {
  dialog {
    top: 8vh !important;
  }
  form {
    width: 95% !important;
    height: 90% !important;
  }
  form header {
    margin-bottom: 8px !important;
  }
  #date,
  #personQuantity,
  #email,
  #selectCity,
  #date_first,
  #date_second {
    float: none !important;
    margin: 0px 25px !important;
  }
  select {
    width: 90% !important;
  }
  input,
  select,
  #date_first,
  #date_second {
    width: 80% !important;
    margin: 2px 5px !important;
  }
  #name,
  #surname {
    float: none !important;
    margin-left: 25px !important;
    margin-right: 25px !important;
  }
  #buttonReserve button {
    width: 70% !important;
    text-align: center !important;
  }
  #buttonReserve {
    text-align: center !important;
  }
}
</style>

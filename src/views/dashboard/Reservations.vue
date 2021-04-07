<template>
  <div>
    <div id="header">
      <header>Reservations</header>
    </div>
    <button @click="deleteAll">deleteAll</button>
    <div class="loader" v-if="isLoading"></div>
    <div
      id="noData"
      v-if="!isLoading && (!reservations || reservations.length === 0)"
    >
      There is no reservations yet! Please,try later...
    </div>
    <div id="container" v-else-if="!isLoading && reservations">
      <div v-for="reserve in reservations" id="individual" :key="reserve.id">
        <h5>
          Name: <span>{{ reserve.name }} {{ reserve.surname }}</span>
        </h5>
        <h5>
          From: <span>{{ reserve.date1 }}</span>
        </h5>
        <h5>
          To: <span>{{ reserve.date2 }}</span>
        </h5>
        <h5>
          City: <span>{{ reserve.city }}</span>
        </h5>
        <h5>
          Quantity: <span>{{ reserve.person }}</span>
        </h5>
        <h5>
          Email: <span>{{ reserve.email }}</span>
        </h5>
        <h5>
          Price: <span>{{ reserve.price }} $</span>
        </h5>
        <h5>
          Time: <span>{{ reserve.timeDate }} </span>
        </h5>
        <div>
          <button @click="deleteIndividual(reserve.id)" class="btn btn-danger">
            Delete
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
      isLoading: false,
    };
  },
  computed: {
    ...mapFields(["reservations"]),
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.axios
        .get(
          "https://aztour-c5318-default-rtdb.firebaseio.com/reservation" +
            ".json"
        )
        .then((response) => {
          this.isLoading = false;
          this.reservations = response.data;
          if (this.reservations) {
            this.reservations = Object.keys(this.reservations).map((key) => {
              const reserve = this.reservations[key];
              reserve.id = key;
              return reserve;
            });
            this.reservations.reverse();
          }
        });
    },
    deleteIndividual(id) {
      console.log(id);
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/reservation/" +
            id +
            ".json"
        )
        .then((response) => {
          this.getData();
          return response;
        });
    },
    deleteAll() {
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/reservation" +
            ".json"
        )
        .then((response) => {
          this.getData();
          return response;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
span {
  color: darkblue !important;
}
#individual {
  box-shadow: 0 0 1vh darkgray;
  margin: 20px auto !important;
  border-radius: 18px !important;
  padding: 18px !important;
  max-width: 600px !important;
}
#individual:last-child {
  margin-bottom: 40px !important;
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
#container {
  margin: 20px auto !important;
}
</style>

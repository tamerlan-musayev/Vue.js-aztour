<template>
  <div id="all">
    <div id="header">
      <header>Job Applications</header>
    </div>
    <button @click="deleteAll">deleteAll</button>
    <div v-if="isLoading" class="loader" />
    <div v-if="!isLoading && (!jobs || jobs.length === 0)" id="noData">
      There is no job applications yet! Please,try later...
    </div>
    <div v-else-if="!isLoading && jobs" id="container">
      <div v-for="job in jobs" id="individual" :key="job.id">
        <div>
          <button @click="deleteIndividual(job.id)">
            Delete
          </button>
        </div>
        <div id="main">
          <h5>
            Name: <span>{{ job.firstName }} {{ job.lastName }}</span>
          </h5>
          <h5>
            Telephone No: <span>{{ job.telephone }}</span>
          </h5>
          <h5>
            Email: <span>{{ job.email }}</span>
          </h5>
          <h5>
            Vacance: <span>{{ job.job.vacance }}</span>
          </h5>
          <h5>
            Gender: <span>{{ job.gender }}</span>
          </h5>
        </div>
        <div id="information">
          <h5>
            Information
          </h5>
          <span>{{ job.aboutYourself }}</span>
          <!-- <br /> -->
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
    ...mapFields(["jobs"]),
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.axios
        .get("https://aztour-c5318-default-rtdb.firebaseio.com/job" + ".json")
        .then((response) => {
          this.isLoading = false;
          this.jobs = response.data;
          if (this.jobs) {
            this.jobs = Object.keys(this.jobs).map((key) => {
              const job = this.jobs[key];
              job.id = key;
              return job;
            });
            this.jobs.reverse();
          }
        });
    },
    deleteIndividual(id) {
      console.log(id);
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/job/" + id + ".json"
        )
        .then((response) => {
          this.getData();
          return response;
        });
    },
    deleteAll() {
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/job" + ".json"
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
  margin-bottom: 30px !important;
}
#information {
  margin-top: 16px !important;
  text-align: center !important;
}
#information span {
  margin-top: 20px !important;
  font-size: 18px !important;
}
#individual {
  margin: 30px auto !important;
  word-wrap: break-word !important;
  max-width: 800px !important;
  border-radius: 8px !important;
  padding: 18px !important;
  box-shadow: 0 0 1vh darkgray;
}
span {
  color: darkblue !important;
}
#main {
  border-bottom: 2px solid darkgray !important;
}
</style>

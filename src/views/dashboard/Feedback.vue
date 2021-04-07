<template>
  <div id="all">
    <div id="content">
      <div id="header">
        <header>Feedback</header>
      </div>
      <div @click="deleteAll">
        <button>
          Delete All
        </button>
      </div>
      <div v-if="isLoading" class="loader" />
      <div
        v-if="!isLoading && (!messages || messages.length === 0)"
        id="noData"
      >
        There is no messages yet! Please,try later...
      </div>
      <div
        v-for="mes in messages"
        v-else-if="!isLoading && messages"
        id="individual"
        :key="mes.id"
      >
        <div id="wrap">
          <h5>
            Email: <span>{{ mes.email }}</span>
          </h5>
          <h5>
            Reason: <span>{{ mes.rea }}</span>
          </h5>
          <h5>
            Time: <span>{{ mes.time }}</span>
          </h5>
        </div>
        <div id="message" align="center">
          <h5>Message</h5>
        </div>
        <p>{{ mes.message }}</p>
        <div>
          <button @click="deleteIndividual(mes.id)">
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
    ...mapFields(["messages"]),
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.axios
        .get(
          "https://aztour-c5318-default-rtdb.firebaseio.com/feedback" + ".json"
        )
        .then((response) => {
          this.isLoading = false;
          this.messages = response.data;
          if (this.messages) {
            this.messages = Object.keys(this.messages).map((key) => {
              const message = this.messages[key];
              message.id = key;
              return message;
            });
            this.messages.reverse();
          }
        });
    },
    deleteIndividual(id) {
      console.log(id);
      this.axios
        .delete(
          "https://aztour-c5318-default-rtdb.firebaseio.com/feedback/" +
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
          "https://aztour-c5318-default-rtdb.firebaseio.com/feedback" + ".json"
        )
        .then((response) => {
          return response;
        });
      this.getData();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
span,
p {
  color: darkblue !important;
}
h5 {
  color: black !important;
}
#individual {
  padding: 8px !important;
  margin-bottom: 20px !important;
  box-shadow: 0 0 0.8vh darkgray;
  border-radius: 8px !important;
  max-width: 600px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  word-wrap: break-word !important;
}
#message {
  margin-top: 8px !important;
  box-shadow: 0 0 0.4vh darkgray;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
}
#message h5 {
  padding: 2px !important;
}
h5 {
  font-size: 18px !important;
}
p {
  margin: 8px;
  font-size: 16px !important;
}
#content {
  margin-bottom: 60px !important;
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
#wrap {
  border-bottom: 2px solid darkgray !important;
}
</style>

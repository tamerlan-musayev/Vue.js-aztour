<template>
  <div>
    <header-header />
    <div id="feedback">
      <div id="header">
        <header>FeedBack</header>
      </div>
      <div id="content">
        <p>Maybe your messages will help us improve the company.</p>
        <input v-model.trim="email" type="email" placeholder="Your E-mail:" />
        <br />
        <select v-model="reason">
          <option value="reserve">
            Cannot reserve
          </option>
          <option value="posts">
            Don't see posts
          </option>
          <option value="bugs">
            Bugs
          </option>
          <option :value="r" v-for="r in reasons" :key="r.id">
            {{ r }}
          </option>
          <option value="other">
            Other
          </option>
        </select>
        <br />
        <textarea
          id=""
          v-model.trim="message"
          name=""
          cols="60"
          rows="5"
          placeholder="Your message:"
        />
        <br />
        <button class="btn btn-success" @click="sendMessage">
          Send
        </button>
      </div>
    </div>
    <footer-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      reason: "reserve",
      fleshMessage: false,
      time: "",
      reasons: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.message.length == 0 || this.email.length == 0) {
        alert("Please, fill in all fields!");
      } else if (
        (this.message.length < 30 && this.message.length !== 0) ||
        !this.email.includes("@")
      ) {
        alert(
          "Message must be at least 30 characters long! Email must includes '@'"
        );
      } else {
        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        this.time = date + " " + time;
        this.axios.post(
          "https://aztour-c5318-default-rtdb.firebaseio.com/feedback" + ".json",
          {
            email: this.email,
            message: this.message,
            rea: this.reason,
            time: this.time,
          }
        );
        this.fleshMessage = true;
        alert("The message has been send!");
      }
    },
  },
  created() {
    this.axios
      .get("https://aztour-c5318-default-rtdb.firebaseio.com/reason" + ".json")
      .then((response) => {
        this.reasons = response.data;
        this.reasons = Object.keys(this.reasons).map((key) => {
          const r = this.reasons[key];
          r.id = key;
          return r.reason;
        });
        console.log(this.reasons);
      });
  },
};
</script>
<style scoped>
input,
textarea {
  padding: 8px 2px !important;
  border-radius: 6px;
}
select {
  margin-top: 20px !important;
  width: 250px;
  height: 40px;
  border-radius: 3px;
  padding: 2px !important;
}
textarea {
  margin-top: 20px !important;
}
#content {
  min-height: 430px;
  border-radius: 8px;
  box-shadow: 0 0 1vh darkgray;
  max-width: 700px;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 18px;
  text-align: center;
  margin-top: 40px !important;
  margin-bottom: 40px !important;
}
p {
  color: forestgreen;
  margin-top: 8px;
  margin-bottom: 28px;
  font-size: 18px;
}
input {
  width: 250px;
}
#feedback {
  min-height: 90vh !important;
}
.btn {
  font-size: 18px;
  margin-top: 15px;
  text-shadow: 0.5px 0.5px 0.5px black !important;
  width: 200px !important;
}
#header {
  padding-top: 60px !important;
  text-align: center;
  font-size: 30px;
  color: brown;
  font-weight: bold;
  text-shadow: 0.5px 0.5px 0.5px black;
}
input::placeholder,
textarea::placeholder {
  padding-left: 2px !important;
}
input:focus,
textarea:focus,
select:focus {
  border: 2px solid darkblue !important;
  outline: none !important;
}
input,
select,
textarea {
  outline: none !important;
  border: 2px solid darkgray !important;
  color: darkblue !important;
}

@media screen and (max-width: 742px) {
  #content {
    width: 90% !important;
  }
}
@media screen and (max-width: 630px) {
  #fleshMessage {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 600px) {
  #content {
    width: 80% !important;
    margin-top: 20px !important;
  }
  textarea {
    width: 350px !important;
  }
}
@media screen and (max-width: 500px) {
  #content p {
    font-size: 16px !important;
  }
  #content {
    width: 80% !important;
  }
  textarea {
    width: 330px !important;
  }
}
@media screen and (max-width: 460px) {
  #content p {
    font-size: 16px !important;
  }
  #content {
    width: 90% !important;
  }
  textarea {
    width: 330px !important;
  }
}
@media screen and (max-width: 400px) {
  #content p {
    font-size: 16px !important;
  }
  #content {
    width: 90% !important;
  }
  textarea {
    width: 300px !important;
  }
}
@media screen and (max-width: 380px) {
  #content p {
    font-size: 16px !important;
  }
  #content {
    width: 90% !important;
  }
  textarea {
    width: 260px !important;
  }
}
</style>

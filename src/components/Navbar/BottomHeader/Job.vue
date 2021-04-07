<template>
  <div>
    <header-header />
    <div id="job">
      <div id="header">
        <header>Looking for a job?</header>
      </div>
      <div id="text">
        <div id="name">
          <input
            v-model.trim="firstName"
            type="text"
            placeholder="First Name:"
          />
          <input v-model.trim="lastName" type="text" placeholder="Last Name:" />
        </div>
        <div id="contact">
          <input
            v-model.trim="telephone"
            type="tel"
            placeholder="Telephone No:"
          />
          <input v-model.trim="email" type="email" placeholder="E-mail:" />
        </div>
        <div id="more">
          <select v-model="job">
            <option value="Administrator">
              Administrator
            </option>
            <option value="Manager">
              Manager
            </option>
            <option value="Security">
              Security guard
            </option>
            <option value="Courier">
              Courier
            </option>
            <option value="Chief">
              Сhief-cooker
            </option>
            <option value="Cleaner">
              Cleaner
            </option>
            <option value="Programmer">
              Programmer
            </option>
            <option :value="j" v-for="j in jo" :key="j.id">
              {{ j.vacance }}
            </option>
            <option value="Other">
              Other
            </option>
          </select>
          <select v-model="gender">
            <option value="Male">
              Male
            </option>
            <option value="Female">
              Female
            </option>
          </select>
        </div>
        <div id="content">
          <textarea
            v-model.trim="aboutYourself"
            cols="70"
            rows="5"
            placeholder="Please, write something about yourself:"
          />
          <br />
          <button class="btn btn-success" @click="sendData">
            Send
          </button>
        </div>
      </div>
    </div>
    <footer-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      job: "Administrator",
      gender: "Male",
      aboutYourself: "",
      fleshMessage: false,
      jo: [],
    };
  },
  methods: {
    sendData() {
      if (
        this.firstName.length === 0 ||
        this.lastName.length === 0 ||
        this.aboutYourself.length === 0 ||
        this.email.length === 0 ||
        this.telephone.length === 0
      ) {
        alert("Please, fill in all fields!");
      } else if (!this.email.includes("@")) {
        alert("Email must includes '@'.");
      } else {
        this.axios.post(
          "https://aztour-c5318-default-rtdb.firebaseio.com/job" + ".json",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            telephone: this.telephone,
            job: this.job,
            gender: this.gender,
            aboutYourself: this.aboutYourself,
          }
        );
        alert("Success.We will contact with you soon!")
      }
    },
  },
  mounted() {
    this.axios
      .get("https://aztour-c5318-default-rtdb.firebaseio.com/vacance" + ".json")
      .then((response) => {
        this.jo = response.data;
      });
  },
};
</script>
<style scoped>
#job {
  background: snow;
}
header {
  color: maroon;
  text-align: center;
  font-size: 28px;
  font-weight: bold !important;
  margin-top: 12px;
  text-shadow: 0.5px 0.5px 0.5px black;
}
#header {
  padding-top: 60px !important;
}
input,
select,
textarea {
  margin-top: 20px;
  color: darkblue !important;
  padding-left: 3px !important;
}
#text {
  margin: 30px 0px !important;
  text-align: center;
}
button {
  margin-top: 18px;
  width: 180px;
  padding: 8px 0px !important;
}
input,
select {
  width: 350px;
  height: 55px;
  margin: 20px;
}
textarea::placeholder {
  padding-left: 2px !important;
  padding-top: 2px !important;
}
input:focus,
select:focus,
textarea:focus {
  border: 2px solid darkblue !important;
  outline: none !important;
}
input,
select,
textarea {
  border: 2px solid darkgray !important;
  border-radius: 4px;
  background: snow !important;
}
@media screen and (max-width: 782px) {
  textarea {
    width: 60% !important;
  }
}
@media screen and (max-width: 588px) {
  textarea {
    width: 350px !important;
  }
}
@media screen and (max-width: 588px) {
  textarea {
    width: 310px !important;
  }
  input,
  select {
    width: 90% !important;
  }
}
</style>

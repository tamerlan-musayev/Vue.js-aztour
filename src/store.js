import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import { getField, updateField } from "vuex-map-fields";
import Vue from "vue";
const language = localStorage.getItem("language") || "en";
axios.defaults.headers["Accept-Language"] = language;
Vue.use(Vuex);
const store = new Vuex.Store({
  state() {
    return {
      barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
      barImage:
        "https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg",
      drawer: null,
      sidebarShow: "responsive",
      sidebarMinimize: false,
      show: false,
      show2: false,
      newItem: {},
      pictures: [],
      isLoading: false,
      allNews: [],
      places: [],
      messages: [],
      jobs: [],
      reservations: [],
      charts: [],
      dateTime: "",
      header: "",
      description: "",
      Bestimage: "",
      Bestheader: "",
      mainPrice: 20,
      Bestdescription: "",
      fleshMessage: false,
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      whatsapp: "https://whatsapp.com",
    };
  },
  getters: {
    getField,
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload;
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
    toggleSidebarDesktop(state) {
      const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
      state.sidebarShow = sidebarOpened ? false : "responsive";
    },
    toggleSidebarMobile(state) {
      const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
      state.sidebarShow = sidebarClosed ? true : "responsive";
    },
    set(state, [variable, value]) {
      state[variable] = value;
    },
    openDialog(state) {
      state.show = true;
    },
    closeDialog(state) {
      state.show = false;
    },
    openDialog2(state) {
      state.show2 = true;
    },
    closeDialog2(state) {
      state.show2 = false;
    },
    apiRequest() {
      axios.get("https://fish-text.ru/get").then((response) => {
        console.log(response.data.text);
      });
    },
    updateField,
  },
  actions: {
    addCity(context) {
      return axios.post(
        "https://aztour-c5318-default-rtdb.firebaseio.com/cities" + ".json",
        context.state.newItem
      );
    },
    getCities(context) {
      context.state.isLoading = true;
      return axios
        .get(
          "https://aztour-c5318-default-rtdb.firebaseio.com/cities" + ".json"
        )
        .then((response) => {
          context.state.isLoading = false;
          context.state.pictures = response.data;
        });
    },
    news(context) {
      context.state.isLoading = true;
      axios
        .get("https://aztour-c5318-default-rtdb.firebaseio.com/news" + ".json")
        .then((response) => {
          context.state.isLoading = false;
          context.state.allNews = response.data;
          if (this.allNews) {
            context.state.allNews = Object.keys(context.state.allNews).map(
              (key) => {
                const news = context.state.allNews[key];
                news.id = key;
                return news;
              }
            );
            context.state.allNews.reverse();
          }
        });
    },
    addNews(context) {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      context.state.dateTime = date + " " + time;
      axios.post(
        "https://aztour-c5318-default-rtdb.firebaseio.com/news" + ".json",
        {
          dateTime: context.state.dateTime,
          header: context.state.header,
          description: context.state.description,
        }
      );
      context.state.header = "";
      context.state.description = "";
      context.state.show = false;
    },
    getBestPlaces(context) {
      context.state.isLoading = true;
      axios
        .get("https://aztour-c5318-default-rtdb.firebaseio.com/best" + ".json")
        .then((response) => {
          context.state.places = response.data;
          context.state.isLoading = false;
        });
    },
    addBestPlace(context) {
      axios.post(
        "https://aztour-c5318-default-rtdb.firebaseio.com/best" + ".json",
        {
          Bestimage: context.state.Bestimage,
          Bestheader: context.state.Bestheader,
          Bestdescription: context.state.Bestdescription,
        }
      );
      context.state.Bestimage = "";
      context.state.Bestheader = "";
      context.state.Bestdescription = "";
    },
  },
});
axios.defaults.headers["Accept-Language"] = language;
Vue.use(VueAxios, axios);
export default store;

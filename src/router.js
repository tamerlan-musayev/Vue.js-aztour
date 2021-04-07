import Vue from "vue";
import VueRouter from "vue-router";
// main
import Landing from "./components/LandingPage/Landing.vue";
import IndividualImage from "./components/LandingPage/cities/IndividualImage.vue";
import HeaderHeader from "./components/Navbar/TopHeader/TopHeader.vue";
import Header2Header2 from "./components/Navbar/MiddleHeader/MiddleHeader.vue";
import FooterFooter from "./components/Navbar/BottomHeader/BottomHeader.vue";
// not important
const Job = () => import("./components/Navbar/BottomHeader/Job.vue");
const AboutUs = () => import("./components/Navbar/BottomHeader/AboutUs.vue");
const FeedBack = () => import("./components/Navbar/BottomHeader/FeedBack.vue");
const Covid = () => import("./components/Navbar/BottomHeader/Covid.vue");
const News = () => import("./components/Navbar/TopHeader/News.vue");
const BestPlaces = () => import("./components/Navbar/TopHeader/BestPlaces.vue");
const NotFound = () => import("./components/NotFound/NotFound.vue");
const modal = () => import("./components/modal.vue");
const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/adminpanel",
      component: () => import("@/views/dashboard/Index"),
      children: [
        {
          name: "AddCity",
          path: "AddCity",
          component: () => import("@/views/dashboard/AddCity"),
        },
        {
          name: "AddNews",
          path: "AddNews",
          component: () => import("@/views/dashboard/AddNews"),
        },
        {
          name: "AddBestPlace",
          path: "AddBestPlace",
          component: () => import("@/views/dashboard/AddBestPlace"),
        },
        {
          name: "Feedback",
          path: "Feedback",
          component: () => import("@/views/dashboard/Feedback"),
        },
        {
          name: "JobApplications",
          path: "JobApplications",
          component: () => import("@/views/dashboard/JobApplications"),
        },
        {
          name: "Reservations",
          path: "Reservations",
          component: () => import("@/views/dashboard/Reservations"),
        },
        {
          name: "Options",
          path: "Options",
          component: () => import("@/views/dashboard/Options"),
        },
      ],
    },
    {
      path: "/",
      component: Landing,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/bestplaces",
      component: BestPlaces,
    },
    {
      path: "/aztour/:id",
      component: IndividualImage,
    },
    {
      path: "/job",
      component: Job,
    },
    {
      path: "/covid19",
      component: Covid,
    },
    {
      path: "/feedback",
      component: FeedBack,
    },
    {
      path: "/aboutus",
      component: AboutUs,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
});
Vue.component("HeaderHeader", HeaderHeader);
Vue.component("Header2Header2", Header2Header2);
Vue.component("FooterFooter", FooterFooter);
Vue.component("ModalModal", modal);
Vue.use(VueRouter);
export default router;

<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <h2 id="aztour">AzTour</h2>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list nav>
      <div />
      <template v-for="(item, i) in computedItems">
        <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" />
      </template>
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    items: [
      {
        title: "Add City",
        icon: "mdi mdi-city",
        to: "/adminpanel/AddCity",
      },
      {
        title: "Add News",
        icon: "mdi mdi-newspaper",
        to: "/adminpanel/AddNews",
      },
      {
        title: "Add Best Place",
        icon: "mdi-thumb-up",
        to: "/adminpanel/AddBestPlace",
      },
      {
        title: "Feedback",
        icon: "mdi-format-font",
        to: "/adminpanel/Feedback",
      },
      {
        title: "Job applications",
        icon: "mdi-chart-bubble",
        to: "/adminpanel/JobApplications",
      },
      {
        title: "Reservations",
        icon: "mdi-clipboard-outline",
        to: "/adminpanel/Reservations",
      },
      {
        title: "Options",
        icon: "mdi-help-circle",
        to: "/adminpanel/Options",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
      };
    },
  },
};
</script>
<style scoped>
#aztour {
  margin-left: 54px !important;
  margin-top: 8px !important;
  margin-bottom: 0px !important;
  color: skyblue !important;
  font-weight: bold !important;
}
</style>
<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'

#core-navigation-drawer
  .v-list-group__header.v-list-item--active:before
    opacity: .24

  .v-list-item
    &__icon--text,
    &__icon:first-child
      justify-content: center
      text-align: center
      width: 20px

      +ltr()
        margin-right: 24px
        margin-left: 12px !important

      +rtl()
        margin-left: 24px
        margin-right: 12px !important

  .v-list--dense
    .v-list-item
      &__icon--text,
      &__icon:first-child
        margin-top: 10px

  .v-list-group--sub-group
    .v-list-item
      +ltr()
        padding-left: 8px

      +rtl()
        padding-right: 8px

    .v-list-group__header
      +ltr()
        padding-right: 0

      +rtl()
        padding-right: 0

      .v-list-item__icon--text
        margin-top: 19px
        order: 0

      .v-list-group__header__prepend-icon
        order: 2

        +ltr()
          margin-right: 8px

        +rtl()
          margin-left: 8px
</style>

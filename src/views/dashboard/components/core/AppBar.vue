<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon>
        mdi-menu
      </v-icon>
    </v-btn>
    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />
  </v-app-bar>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
<style scoped>
#app-bar {
  border-bottom: 1px solid rgb(211, 211, 211) !important;
}
</style>

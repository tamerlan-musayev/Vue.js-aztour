<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />
  </v-app>
</template>

<script>
export default {
  components: {
    DashboardCoreAppBar: () => import("./components/core/AppBar"),
    DashboardCoreDrawer: () => import("./components/core/Drawer"),
    DashboardCoreView: () => import("./components/core/View"),
  },
};
</script>

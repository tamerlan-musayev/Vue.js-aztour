<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light row">
    <div id="text">
      <h2>
        <router-link to="/news">
          News
        </router-link>
      </h2>
      <h2>
        <router-link to="/bestplaces">
          Best Places
        </router-link>
      </h2>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarNav" class="collapse navbar-collapse col-8.5">
      <icons-icons />
    </div>
  </nav>
</template>
<script>
import IconsIcons from "./Icons.vue";
export default {
  components: {
    IconsIcons,
  },
};
</script>
<style scoped>
@media (max-width: 375px) {
  #language {
    display: none !important;
  }
}
@media (max-width: 343px) {
  .navbar h2 {
    margin-left: 18px !important;
    font-size: 14px;
  }
}
@media (max-width: 321px) {
  .navbar h2 {
    margin-left: 12px !important;
    font-size: 14px;
  }
}
.navbar {
  z-index: 1000;
  position: fixed;
  width: 100%;
  margin: 0px 1px;
  padding: 0px !important;
  box-shadow: 0 0 0.8vh rgb(75, 44, 44);
  border-radius: 5px;
  border-top: 0.1px solid darkgray;
  border-bottom: 0.1px solid darkgray;
  text-shadow: 0.5px 0.5px 0.5px darkgray;
  background: whitesmoke !important;
  margin-bottom: 60px !important;
}
#text {
  padding: 4px;
  margin-right: 8px !important;
}
a:hover {
  color: brown !important;
  transition: 0.1s ease-in-out;
  text-decoration: none !important;
}
#language {
  margin-right: 12px !important;
  font-size: 13px;
  font-weight: bold !important;
  color: darkgray;
}
#language select {
  padding: 8px 2px !important;
  background: steelblue;
  color: snow !important;
  padding: 3px;
  border: 0px;
  margin-left: 20px;
  border-radius: 4px;
}
#text a:hover {
  transition: 0.1s ease-in-out;
  color: gray !important;
}
#azerbaijan a:hover {
  transition: 0.1s ease-in-out;
  color: brown !important;
}
#azerbaijan a {
  color: darkslateblue !important;
}
#azerbaijan {
  margin-left: 8px;
}
.navbar h2 {
  display: inline-block !important;
  margin-left: 25px;
  font-size: 14px;
  font-weight: bold !important;
}
#text a {
  color: slateblue !important;
}
@media (max-width: 1000px) {
  #language {
    margin-top: 10px;
    margin-bottom: 8px;
  }
}
</style>

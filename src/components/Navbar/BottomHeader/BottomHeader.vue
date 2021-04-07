<template>
  <nav class="navbar">
    <div id="foot">
      <h2>
        <router-link to="/feedback">
          Feedback
        </router-link>
      </h2>
      <h2>
        <router-link to="/aboutus">
          About us
        </router-link>
      </h2>
      <h2>
        <router-link to="/job">
          Get a Job
        </router-link>
      </h2>
      <h2>
        <router-link to="/covid19">
          Covid 19
        </router-link>
      </h2>
    </div>
    <h6 id="date">
      © AzTour {{ date }}
    </h6>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        date: new Date().getFullYear(),
      }
    },
  }
</script>
<style scoped>
h2 {
  font-size: 18px;
  display: inline-block;
}
a:hover {
  color: goldenrod;
  transition: all 0.18s ease-in !important;
}
#foot {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
a {
  color: snow;
  text-decoration: none;
}
.row {
  margin-right: 0px !important;
}
ul {
  list-style-type: none;
  text-align: center;
}
#date {
  margin-top: 23px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom: 16px !important;
}
.navbar {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 9rem;
  box-shadow: 0 0 1.5vh darkslategray;
  color: snow !important;
  background: rgb(23, 50, 83);
  padding-bottom: 8px !important;
}
#foot {
  margin-top: 8px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100%;
}
#foot:nth-child(1) {
  border-bottom: 1px solid rgba(162, 193, 230, 0.493);
}
@media (max-width: 1000px) {
  h2 {
    font-size: 15px !important;
  }
}
@media (max-width: 350px) {
  h2 {
    margin-left: 5px !important;
    font-size: 14px !important;
  }
}
@media (max-width: 326px) {
  h2 {
    margin-left: 8px !important;
    font-size: 12px !important;
  }
}
</style>

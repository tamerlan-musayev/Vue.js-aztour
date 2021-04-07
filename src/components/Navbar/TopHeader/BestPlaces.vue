<template>
  <div id="all">
    <header-header />
    <div id="bestplacescontainer">
      <header id="bestheader">
        Best Places
      </header>
      <div
        v-if="isLoading"
        class="loader"
      />
      <div
        v-if="!isLoading && (!places || places.length === 0)"
        id="noData"
      >
        There is no data yet! Please,try later...
      </div>
      <div
        v-for="best in places"
        v-else-if="!isLoading && places"
        id="individual"
        :key="best.id"
      >
        <img :src="best.Bestimage">
        <div id="individualDesc">
          <div id="header">
            {{ best.Bestheader }}
          </div>
          <p>
            {{ best.Bestdescription }}
          </p>
        </div>
      </div>
    </div>
    <footer-footer />
  </div>
</template>
<script>
  import { mapFields } from 'vuex-map-fields'
  export default {
    data () {
      return {
        isLoading: false,
      }
    },
    computed: {
      ...mapFields(['places']),
    },
    mounted () {
      this.$store.dispatch('getBestPlaces')
    },
  }
</script>
<style scoped>
#bestplacescontainer {
  padding-top: 60px;
  margin-bottom: 30px;
  min-height: 100vh !important;
}
#bestheader {
  background: salmon;
  border-radius: 20px;
  box-shadow: 0 0 2vh darkgray;
  color: darkslateblue;
  font-size: 32px;
  text-shadow: 1px 1px 1px darkgray;
  text-align: center;
  border: 1px solid gray;
  margin-bottom: 28px !important;
  max-width: 500px;
  margin: 8px auto;
}
div#individualtext:nth-child(odd) {
  margin-left: 90px !important;
}
div#individual {
  padding: 20px 0px;
  border-bottom: 1px solid darkgray !important;
}
#individual {
  text-align: center !important;
  margin: 8px 150px !important;
  border-radius: 18px;
}
#all {
  background: rgb(206, 196, 196) !important;
}
#individualDesc {
  border-radius: 8px !important;
  box-shadow: 0 0 1vh darkcyan;
  margin: 20px auto !important;
  max-width: 1024px !important;
}
#individual img {
  border: 0.5px solid darkslateblue !important;
  padding: 0px !important;
  width: 1024px;
  height: 582px;
  object-fit: cover !important;
  border-radius: 8px !important;
}
#individual p {
  color: snow;
  font-weight: bold !important;
  margin: 20px 10px;
  line-height: 30px;
  padding-bottom: 14px !important;
}
#header {
  font-size: 22px !important;
  color: rgb(216, 255, 40) !important;
  text-shadow: 1px 1px 1px black !important;
}
#individualDesc {
  background: rgb(235, 85, 85) !important;
}
div#individual:nth-child(odd) {
  background: rgb(235, 233, 233);
}
div#individual:nth-child(even) {
  background: rgb(62, 62, 66);
}
@media screen and (max-width: 1360px) {
  img,
  #individualDesc {
    width: 990px !important;
  }
}
@media screen and (max-width: 1304px) {
  #individual {
    margin: 8px 100px !important;
  }
}
@media screen and (max-width: 1204px) {
  #individual {
    margin: 8px 50px !important;
  }
}
@media screen and (max-width: 1104px) {
  #individual {
    margin: 8px 20px !important;
  }
}
@media screen and (max-width: 1042px) {
  img,
  #individualDesc {
    width: 900px !important;
  }
}
@media screen and (max-width: 968px) {
  img,
  #individualDesc {
    width: 850px !important;
  }
}
@media screen and (max-width: 908px) {
  img,
  #individualDesc {
    width: 800px !important;
  }
}
@media screen and (max-width: 862px) {
  img,
  #individualDesc {
    width: 750px !important;
  }
}
@media screen and (max-width: 804px) {
  img,
  #individualDesc {
    width: 700px !important;
  }
}
@media screen and (max-width: 760px) {
  img,
  #individualDesc {
    width: 650px !important;
  }
}
@media screen and (max-width: 704px) {
  img,
  #individualDesc {
    width: 600px !important;
  }
}
@media screen and (max-width: 644px) {
  img,
  #individualDesc {
    width: 500px !important;
  }
  img {
    height: 400px !important;
  }
}
@media screen and (max-width: 556px) {
  img,
  #individualDesc {
    width: 450px !important;
  }
  img {
    height: 350px !important;
  }
}
@media screen and (max-width: 498px) {
  img,
  #individualDesc {
    width: 400px !important;
  }
  img {
    height: 300px !important;
  }
}
@media screen and (max-width: 450px) {
  img,
  #individualDesc {
    width: 350px !important;
  }
  img {
    height: 250px !important;
  }
  #individual p {
    margin: 8px !important;
  }
}
@media screen and (max-width: 396px) {
  img,
  #individualDesc {
    width: 300px !important;
  }
  img {
    height: 200px !important;
  }
}
@media screen and (max-width: 346px) {
  img,
  #individualDesc {
    width: 280px !important;
  }
  img {
    height: 180px !important;
  }
}
</style>

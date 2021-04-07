<template>
  <div>
    <header-header />
    <div id="news">
      <div id="newsBoard">
        <header id="mainHeader">
          News
        </header>
        <div
          v-if="isLoading"
          class="loader"
        />
        <div
          v-if="!isLoading && (!allNews || allNews.length === 0)"
          id="noData"
        >
          There is no data yet! Please,try later...
        </div>
        <div
          v-for="news in allNews"
          v-else-if="!isLoading && allNews"
          id="individualNews"
          :key="news.name"
        >
          <header>{{ news.header }}</header>
          <div id="content">
            <p>
              {{ news.description }}
            </p>
          </div>
          <p align="center">
            {{ news.dateTime }}
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
      ...mapFields(['allNews']),
    },
    mounted () {
      this.$store.dispatch('news')
    },
  }
</script>
<style scoped>
#news {
  background-image: url("../../../assets/news.jpg");
  background-repeat: round;
  padding-top: 60px;
  padding-bottom: 0px !important;
  min-height: 100vh !important;
}
p {
  font-size: 18px;
  padding: 8px;
  margin: 2px;
}
#mainHeader {
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
#content p {
  padding-top: 0px !important;
  padding: 20px 20px;
}
#individualNews {
  margin-top: 40px;
}
#newsBoard {
  padding-bottom: 40px !important;
}
#individualNews {
  padding-bottom: 0px !important;
  padding: 12px;
  max-width: 800px;
  background: rgb(255, 250, 250, 0.8);
  box-shadow: 0 0 1.8vh darkgray;
  margin-top: 32px !important;
  margin-left: auto;
  margin-right: auto;
  border-radius: 18px;
}
#content p {
  line-height: 1.8;
  margin: 0px 5px;
  border-bottom: 0.1px solid darkgray;
}
#individualNews header {
  text-align: center;
  padding: 15px 0px;
  text-shadow: 1px 1px 1px black;
  font-size: 24px;
  font-weight: bold;
  color: rgb(178, 34, 34);
  border-radius: 2px;
}
@media (max-width: 844px) {
  #individualNews {
    max-width: 600px !important;
  }
}
@media (max-width: 650px) {
  #individualNews {
    max-width: 500px !important;
  }
}
@media (max-width: 560px) {
  #individualNews {
    max-width: 450px !important;
  }
  #content p {
    font-size: 15px;
  }
}
@media (max-width: 506px) {
  #mainHeader {
    max-width: 400px !important;
  }
  #individualNews {
    max-width: 400px !important;
  }
  #content p {
    font-size: 14px;
  }
}
@media (max-width: 441px) {
  #mainHeader {
    max-width: 350px !important;
  }
  #individualNews {
    max-width: 350px !important;
  }
  #content p {
    font-size: 14px;
  }
}
@media (max-width: 380px) {
  #individualNews header {
    font-size: 20px !important;
  }
  #individualNews {
    max-width: 320px !important;
  }
  #content p {
    font-size: 14px;
  }
}
</style>

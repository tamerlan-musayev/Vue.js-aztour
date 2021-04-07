<template>
  <div id="notfound">
    <div id="header">
      <header>Error!</header>
    </div>
    <div id="body">
      <h4>Sorry, but this page was not found!</h4>
      <header>Please, check our home page :</header>
      <ul>
        <router-link to="/">
          AzTour
        </router-link>
      </ul>
    </div>
    <div align="center">
      <img
        src="../../assets/dog.png"
        width="300"
        height="350"
      >
    </div>
  </div>
</template>
<style scoped>
#notfound {
  background: slateblue !important;
  height: 100vh;
  color: snow;
}
#body header {
  font-size: 22px;
}
img {
  object-fit: cover;
}
ul {
  padding-top: 16px;
  font-size: 28px;
}
#body {
  border-radius: 20px;
  box-shadow: 0 0 6vh black;
  padding-bottom: 8px !important;
  padding-top: 30px !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
  max-width: 500px;
  text-align: center;
  margin: 40px auto;
  margin-bottom: 30px !important;
  line-height: 1.8;
}
a {
  color: rgb(0, 255, 242) !important;
  text-decoration: underline;
}
div#header header {
  font-size: 36px;
  text-align: center;
  padding-top: 40px;
  text-shadow: 1px 1px 4px darkgray;
}
</style>

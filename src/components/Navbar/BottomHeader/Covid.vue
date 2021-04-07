<template>
  <div>
    <header-header />
    <div id="covid">
      <div id="header">
        <header>Covid 19</header>
      </div>
      <div id="body">
        <p>
          Due to the situation around the world, we decided to suspend our trip
          to Azerbaijan for some time. Travel within Azerbaijan remains the same
          without restrictions. For more information, you can find out by the
          number:
          <br>
        </p>
        <span>+994 00 000 00 00</span>
      </div>
      <div id="body">
        <p>
          If you feel unwell, see a doctor right away.
          <br>
          Health to you and your loved ones!
        </p>
      </div>
      <div
        id="img"
        align="center"
      >
        <img
          src="https://www.andreajenkyns.co.uk/sites/www.andreajenkyns.co.uk/files/2020-11/HFS_0.png"
        >
      </div>
    </div>
    <footer-footer />
  </div>
</template>
<style scoped>
#body {
  max-width: 580px !important;
  box-shadow: 0 0 1vh darkgray;
  padding: 18px;
  border-radius: 8px;
  background: rgba(135, 207, 235, 0.589);
  line-height: 2;
  margin-left: auto !important;
  margin-right: auto !important;
  text-align: center !important;
  font-size: 18px !important;
}
p {
  margin-bottom: 8px !important;
}
span {
  color: darkslateblue !important;
}
img {
  width: 580px;
  box-shadow: 0 0 1vh darkgray !important;
  height: 170px;
  border-radius: 8px;
  object-fit: cover;
}
#img {
  margin: 18px 0px !important;
}
#body {
  margin-top: 18px !important;
}
#health {
  font-size: 30px !important;
}
#covid {
  padding-top: 60px;
}
header {
  text-align: center;
  font-size: 30px;
  color: brown;
  font-weight: bold;
  text-shadow: 0.5px 0.5px 0.5px black;
}
@media screen and (max-width: 620px) {
  #body,
  img {
    width: 90% !important;
  }
}
@media screen and (max-width: 552px) {
  p {
    font-size: 17px !important;
  }
}
@media screen and (max-width: 438px) {
  #body{
    margin-bottom: 20px !important;
  }
  #img {
    display: none !important;
  }
  p {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 380px) {
  p {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 360px) {
  p {
    font-size: 14px !important;
  }
}
</style>

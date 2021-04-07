<template>
  <div id="all">
    <header-header />
    <div id="aboutUs">
      <div id="header">
        <header>
          About Us
        </header>
      </div>
      <div id="content">
        <div id="image">
          <img src="https://wikiway.com/upload/hl-photo/799/acb/3.jpg" id="az">
          <h2>AzTour</h2>
        </div>
        <div id="paragraphs">
          <div>
            <header><strong>History of appearance</strong></header>
            <p>
              We are a large company that sells vouchers to Azerbaijan. We
              provide an opportunity to visit any city of Azerbaijan, at any
              time of the year. This company was founded in 2021. The reason for
              the founding of the company was the great demand for travel to
              various cities of Azerbaijan. Here you can see many historical
              sites that our company provides.
            </p>
          </div>
          <div>
            <header><strong>Quality is our main factor</strong></header>
            <p>
              We all believe that the most important part of a trip should be
              the experience. Therefore, we improve our company every day,
              adding the best quality to it. Our company is confident that the
              quality services that we provide are in line with the price
              factor.
            </p>
          </div>
          <div>
            <header><strong>Responsibility</strong></header>
            <p>
              Initially, our company was based on those factors, with the help
              of which everyone can get a good rest. But after a while we
              realized that the key to success is responsibility and the
              perspective from which we approach each of our clients. It is this
              factor that helps us to make sure that people turn to us for
              vouchers again.
            </p>
          </div>
          <div>
            <header><strong>Continuous improvement</strong></header>
            <p>
              Having achieved a certain success in the company, we are not going
              to stop. We are constantly improving. This allows us to remain at
              the forefront of travel agencies, as well as be the best for our
              regular customers.
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer-footer />
  </div>
</template>
<style scoped>
#all {
  min-height: 100vh !important;
}
#aboutUs {
  padding-top: 60px !important;
}
#content p {
  color: darkslateblue;
  line-break: auto;
  line-height: 2.2;
  font-size: 15px;
}
#paragraphs:first-child {
  padding-top: 30px !important;
}
#paragraphs {
  float: right !important;
  box-shadow: 0 0 0.3vh darkgray;
  max-width: 900px !important;
  min-height: 560px !important;
  border-radius: 8px;
  background: rgba(113, 191, 255, 0.205);
  padding: 22px 28px;
  margin-bottom: 8px !important;
}
#paragraphs header {
  color: black;
  margin-bottom: 4px !important;
}
#content {
  margin: 8px !important;
  margin-top: 12px !important;
}
#image h2 {
  text-align: center !important;
  position: absolute;
  top: 530px;
  left: 248px;
  color: snow !important;
}
#az {
  position: relative;
  border-radius: 8px !important;
  width: 600px !important;
  height: 581px !important;
  object-fit: cover !important;
  float: left !important;
  margin-bottom: 8px !important;
  box-shadow: 0 0 0.3vh darkgray !important;
}
#header {
  margin: 4px auto !important;
  padding: 8px;
  border-radius: 8px !important;
  box-shadow: 0 0 1vh darkcyan;
  max-width: 500px !important;
  background: rgba(0, 255, 255, 0.164);
  text-shadow: 0.5px 0.5px 0.5px black;
  color: rgb(255, 38, 139);
  font-size: 30px;
  text-align: center;
}
@media screen and (max-width: 1500px) {
  #image {
    display: none !important;
  }
  #paragraphs {
    float: none !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
@media screen and (max-width: 868px) {
  #content {
    margin-bottom: 20px !important;
  }
}
</style>

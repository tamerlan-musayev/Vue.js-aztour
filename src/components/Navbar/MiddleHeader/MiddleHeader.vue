<template>
  <nav id="secondNav">
    <div id="welcome">
      <h2>
        Welcome to AzTour!
        <img id="plane" src="../../../assets/plane.png" height="60" />
      </h2>
    </div>
  </nav>
</template>
<style>
#welcome {
  text-align: center;
}
#welcome h2 {
  font-size: 30px;
  color: darkslateblue;
  animation: animate 8s linear infinite !important;
}
@media (max-width: 1000px) {
  #sedondNav {
    width: 100% !important;
    margin: 0px !important;
  }
}
@media (max-width: 366px) {
  #welcome h2 {
    font-size: 22px !important;
  }
  #welcome img {
    height: 50px;
  }
}
#secondNav {
  padding-bottom: 10px;
  padding-top: 58px;
  box-shadow: 0 0 10vh green inset;
}
#welcome img {
  margin-left: 8px;
}
</style>

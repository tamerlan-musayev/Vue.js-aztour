<template>
  <div class="wrapper">
    <div class="button">
      <a :href="facebook" target="_blank">
        <div class="icon facebook">
          <i class="fab fa-facebook-f" />
        </div>
        <span id="facebook">Facebook</span>
      </a>
    </div>
    <div class="button">
      <a :href="twitter" target="_blank">
        <div class="icon twitter">
          <i class="fab fa-twitter" />
        </div>
        <span id="twitter">Twitter</span>
      </a>
    </div>
    <div class="button">
      <a :href="instagram" target="_blank">
        <div class="icon instagram">
          <i class="fab fa-instagram" />
        </div>
        <span id="instagram">Instagram</span>
      </a>
    </div>
    <div class="button">
      <a :href="whatsapp" target="_blank">
        <div class="icon whatsapp">
          <i class="fab fa-whatsapp" />
        </div>
        <span id="whatsapp">WhatsApp</span>
      </a>
    </div>
  </div>
</template>
<script>
  import { mapFields } from 'vuex-map-fields'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapFields(['facebook', 'twitter', 'instagram', 'whatsapp']),
    },
  }
</script>
<style scoped>
a {
  text-decoration: none !important;
}
.wrapper {
  margin-left: 8px !important;
  margin-top: 2px !important;
}
.wrapper .button {
  display: inline-block;
  height: 32px;
  width: 32px;
  margin: 0 5px;
  overflow: hidden;
  background: snow;
  border-radius: 58px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
}
.wrapper .button:hover {
  width: 130px;
}
.wrapper .button .icon {
  color: snow !important;
  display: inline-block;
  height: 32px !important;
  width: 32px !important;
  text-align: center;
  border-radius: 58px;
  box-sizing: border-box;
  line-height: 32px;
  transition: all 0.3s ease-out;
}
.facebook {
  background: #4267b2;
}
.twitter {
  background: #1da1f2;
}
.instagram {
  background: #e1306c;
}
.whatsapp {
  background: rgb(67, 216, 84);
}
.wrapper .button:hover .icon i {
  color: #fff;
}
.wrapper .button span {
  font-size: 16px;
  line-height: 32px;
  margin-left: 10px;
  transition: all 0.3s ease-out;
}
#facebook {
  color: #4267b2;
}
#twitter {
  color: #3782b1;
}
#instagram {
  color: rgb(199, 72, 115);
}
#whatsapp {
  color: rgb(11, 138, 85);
}
</style>

<template>
  <div id="new">
    <div id="header">
      <header>Add News</header>
    </div>
    <div id="content">
      <form @submit.prevent>
        <div id="main">
          <input
            v-model="header"
            type="text"
            placeholder="Header:"
          >
          <br>
          <textarea
            id=""
            v-model="description"
            name=""
            cols="65"
            rows="10"
            placeholder="Description:"
          />
        </div>
      </form>
      <div id="submitButton">
        <button
          id="submit"
          class="btn btn-success"
          @click="openDialog"
        >
          Submit
        </button>
        <div
          v-if="show"
          class="backdrop"
          @click="closeDialog"
        />
        <transition name="dialog">
          <dialog
            v-if="show"
            open
            class="dialog"
          >
            <header id="dialogHeader">
              <h4 align="center">
                Are you sure?
              </h4>
              <br>
              <div id="answer">
                <button
                  id="no"
                  class="btn btn-danger"
                  @click="closeDialog"
                >
                  No
                </button>
                <button
                  id="yes"
                  class="btn btn-success"
                  @click="addNews"
                >
                  Yes
                </button>
              </div>
            </header>
          </dialog>
        </transition>
      </div>
    </div>
    <router-view name="admin" />
  </div>
</template>
<script>
  import { mapFields } from 'vuex-map-fields'
  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapFields(['show', 'newItem', 'allNews', 'dateTime', 'header', 'description']),
    },
    mounted () {
      window.addEventListener('keyup', (ev) => {
        if (ev.keyCode === 27) {
          this.show = false
        }
      })
    },
    methods: {
      openDialog () {
        this.show = true
      },
      closeDialog () {
        this.show = false
      },
      addNews () {
        this.$store.dispatch('addNews').then(() => {
          this.$store.dispatch('news')
          this.$router.push('/news')
        })
      },
    },
  }
</script>
<style scoped>
#main {
  background: whitesmoke;
}
input{
  color:darkblue !important;
}
#answer {
  margin-top: 8px !important;
  text-align: center !important;
  margin-bottom: 8px !important;
}
#individualHeader {
  padding-top: 30px;
  padding-bottom: 0px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
#individualHeader h6 {
  font-size: 22px !important;
  color: darkblue;
}
#yes,
#no {
  width: 60px;
  height: auto;
}
h4 {
  margin-top: 8px !important;
}
#yes {
  margin-left: 8px;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
.main2{
  margin-top: 20px !important;
  margin-bottom: 18px !important;
}
dialog {
  position: fixed;
  top: 25vh;
  left: 67.5vh !important;
  width: 80%;
  z-index: 100;
  border-radius: 10px;
  border: none !important;
  box-shadow: 0 0 1vh black;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

#dialogHeader {
  padding-bottom: 14px !important;
  border: none !important;
  background-color: darkcyan;
  color: white;
  width: 100%;
  padding: 1rem;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 15rem);
    width: 35rem;
  }
}
* {
  font-weight: bold !important;
}
#img input {
  margin-left: auto !important;
  margin-right: auto !important;
  margin-top: 170px !important;
  border: 0.5px solid gray;
  background: snow;
  box-shadow: 0 0 0.6vh darkgray;
  border-radius: 2px;
}
input {
  border: 2px solid darkcyan !important;
  border-radius: 4px !important;
}
input:focus {
  outline: none !important;
  border: 2px solid blue !important;
}
#img {
  margin: 0.5 auto;
  height: 360px;
}
#individualSelect {
  padding-bottom: 16px !important;
  border-radius: 4px !important;
  margin-left: 16px !important;
  margin-right: 16px !important;
  text-align: center;
  box-shadow: 0 0 0.4vh darkgray !important;
  background: whitesmoke;
}
#allPictures {
  padding: 0px 2px !important;
  padding-bottom: 20px !important;
}
#individual input {
  height: 40px;
  margin: 2px;
  width: 220px !important;
  background: snow;
}
#header {
  margin: 30px auto;
  margin-bottom: 40px !important;
  background: snow;
  box-shadow: 0 0 0.6vh darkcyan !important;
  max-width: 300px;
  text-align: center;
  border-radius: 20px;
}
#header header {
  padding: 6px !important;
  color: darkblue !important;
  font-weight: bold;
  font-size: 28px;
  text-shadow: 0.5px 0.5px 0.5px darkcyan !important;
  text-align: center;
  font-weight: bold;
}
form header {
  font-size: 22px;
  margin-top: 0px !important;
  margin: 8px auto;
}

div #main {
  color: darkblue;
  text-align: center !important;
  margin: 20px auto !important;
  border-radius: 8px !important;
  box-shadow: 0 0 0.5vh darkgray;
  max-width: 550px;
  padding-top: 8px !important;
  padding: 18px 0px;
}
input {
  padding-left: 5px !important;
}
#individual {
  margin: 10px auto !important;
  margin-top: 18px !important;
  border-radius: 8px !important;
  box-shadow: 0 0 0.7vh steelblue;
  max-width: 446px !important;
  width: 446px !important;
  padding-top: 8px !important;
  padding: 18px 0px;
}
#individualSelect {
  box-shadow: 0 0 0.3vh darkgray;
}
#submitButton {
  text-align: center;
}
#submit {
  margin: 30px auto !important;
  width: 100px !important;
  height: 40px !important;
}
input,textarea {
  border: 2px solid darkcyan !important;
  border-radius: 4px !important;
}
textarea {
  padding:8px;
}
input:focus,textarea:focus {
  outline: none !important;
  border: 2px solid blue !important;
}
button {
  cursor: pointer;
}
textarea {
  margin-top: 20px !important;
}
* {
  font-weight: bold !important;
}
#content input {
  height: 40px;
  margin: 2px;
  width: 200px;
}
div #main {
  text-align: center !important;
  margin: 20px auto !important;
  border-radius: 8px !important;
  box-shadow: 0 0 1vh darkgray;
  max-width: 600px;
  padding: 28px;
}
</style>

<template>
  <div>
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'App',
  }
</script>

<style>
body {
  font-weight: bolder !important;
}
a {
  text-decoration: none !important;
}
@keyframes animate {
  0% {
    color: brown;
    text-shadow: none;
  }
  50% {
    color: brown;
    text-shadow: 0 0 3px darkslateblue;
    text-shadow: 0 0 6px darkslateblue;
  }
  100% {
    color: white;
    text-shadow: 0 0 3px black;
    text-shadow: 0 0 6px black;
    text-shadow: 0 0 9px black;
    text-shadow: 0 0 12px black;
    text-shadow: 0 0 15px black;
  }
}
@keyframes animate2 {
  0% {
    color: darkslateblue;
    text-shadow: none;
  }
  50% {
    color: brown;
    text-shadow: 0 0 3px darkslateblue;
    text-shadow: 0 0 6px darkslateblue;
  }
  100% {
    color: rgb(23, 50, 83);
    text-shadow: 0 0 3px black;
    text-shadow: 0 0 6px black;
    text-shadow: 0 0 9px black;
    text-shadow: 0 0 12px black;
    text-shadow: 0 0 15px black;
  }
}
ul {
  list-style-type: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}
input:focus,
textarea:focus {
  box-shadow: 0 0 2vh rgb(218, 218, 218);
}
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  border-radius: 4px;
  margin-right: 2px;
  opacity: 0.8;
  /* filter: invert(1); */
}
input[type="date"]::-webkit-datetime-edit {
  color: darkgray !important;
}
input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
input::placeholder,
textarea::placeholder {
  padding-left: 2px !important;
  color: darkgray;
}
</style>

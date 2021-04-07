<template>
  <div>
    <header-header />
    <header2-header2 />
    <city />
    <footer-footer />
  </div>
</template>
<script>
  import city from './cities/cities.vue'
  export default {
    components: {
      city,
    },
  }
</script>

<template>
  <div class="home">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading.value">
      <!-- show login when not authenticated -->
      <button
        v-if="!$auth.isAuthenticated.value"
        @click="login"
      >
        Log in
      </button>
      <!-- show logout when authenticated -->
      <button
        v-if="$auth.isAuthenticated.value"
        @click="logout"
      >
        Log out
      </button>
      <div v-if="$auth.isAuthenticated.value">
        {{ $auth.user.value }}
      </div>
    </div>
  </div>
</template>
<script>
// .. imports removed for brevity

  export default {
    name: 'Home',
    methods: {
      // Log the user in
      login () {
        this.$auth.loginWithRedirect()
      },
      // Log the user out
      logout () {
        this.$auth.logout({
          returnTo: window.location.origin,
        })
      },
    },
  }
</script>

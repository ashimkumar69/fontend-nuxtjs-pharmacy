<template>
  <div>
    <v-app-bar app>
      <v-container class="d-flex align-center">
        <a href="/" class="d-flex align-center text-decoration-none">
          <v-img alt="Logo" class="mr-2" src="/images/favicon/favicon.webp" width="30" />
          <span class="black--text">Pharmacy</span>
        </a>

        <v-spacer></v-spacer>

        <v-btn text class="mr-2" :to="{name:'products'}">
          <v-icon small>fas fa-prescription-bottle-alt</v-icon>
          <span class="ml-2 text-capitalize">All Medicine</span>
        </v-btn>
        <v-btn text class="mr-2" :to="{name:'blogs'}">
          <v-icon small>fas fa-blog</v-icon>
          <span class="ml-2 text-capitalize">Blog</span>
        </v-btn>
        <v-btn text class="mr-2" :to="{name:'contact'}">
          <v-icon small>fas fa-address-card</v-icon>
          <span class="ml-2 text-capitalize">Contact Us</span>
        </v-btn>
        <v-btn outlined color="light-blue lighten-2" :to="{name:'login'}">
          <v-icon small>fas fa-sign-in-alt</v-icon>
          <span class="ml-2 text-capitalize">Login</span>
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>
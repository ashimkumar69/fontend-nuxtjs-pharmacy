<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/fontend/Navbar";

export default {
  name: "DefaultLayout",
  components: {
    Navbar
  }
};
</script>
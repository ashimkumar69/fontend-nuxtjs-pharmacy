<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Dashbord, {{logged}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Admin-Chield",
 
  computed: {
    logged() {
      return this.$auth.loggedIn;
    }
  }
};
</script>

<style>
</style>
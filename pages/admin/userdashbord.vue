<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card color="light-blue lighten-2">
            <v-card-title class="white--text">User Dashbord</v-card-title>

            <v-card-actions>
              <v-btn text class="white--text">See User</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "UserDashbord",
  middleware: "allowUser",
};
</script>

<style>
</style>
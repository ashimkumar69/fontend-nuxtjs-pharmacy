<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card color="light-blue lighten-2">
            <v-card-title class="white--text">Total User</v-card-title>
            <v-card-subtitle class="white--text">{{ totalDetailsIndex.User }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text class="white--text">See User</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card color="light-blue lighten-2">
            <v-card-title class="white--text">Total Product</v-card-title>
            <v-card-subtitle class="white--text">{{ totalDetailsIndex.Product }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text class="white--text">See Product</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card color="light-blue lighten-2">
            <v-card-title class="white--text">Total Contact</v-card-title>
            <v-card-subtitle class="white--text">{{ totalDetailsIndex.Contact }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text class="white--text">See Contact</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card color="light-blue lighten-2">
            <v-card-title class="white--text">Total Feedback</v-card-title>
            <v-card-subtitle class="white--text">{{ totalDetailsIndex.UserFeedback }}</v-card-subtitle>
            <v-card-actions>
              <v-btn text class="white--text">See Feedback</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Admin-Chield",
  middleware: "allowSuperAdminOrAdmin",
  data() {
    return {
      totalDetailsIndex: {},
    };
  },
  async asyncData({ store, $axios }) {
    try {
      const totalDetailsIndex = await $axios.$get("/totalDetailsIndex");

      return {
        totalDetailsIndex: totalDetailsIndex,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>
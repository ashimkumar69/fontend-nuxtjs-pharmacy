<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-col cols="6" class="mx-auto">
              <v-alert dense text v-if="message" type="success">{{ message }}</v-alert>
            </v-col>
            <v-card-title class="d-flex justify-center">Verify Your Email</v-card-title>

            <v-card-actions class="d-flex justify-center">
              <v-btn
                @click.prevent="semVerifyMail"
                depressed
                dark
                color="light-blue lighten-2"
                class="text-capitalize"
              >Send a Link to Verify Your Email</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Email-Verify",
  layout: "emailverifylayout",
  // auth: false,
  data() {
    return {
      message: null
    };
  },
  methods: {
    async semVerifyMail() {
      try {
        await this.$axios.$get("/auth/email/resend").then(res => {
          this.message = res.message;
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>

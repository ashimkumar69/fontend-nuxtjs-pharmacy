<template>
  <div class="login">
    <div class="loginOverlay d-flex align-center">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="6">
            <v-card>
              <v-card-title>Send Email</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container class="pa-0">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <client-only>
                        <ValidationObserver ref="observer">
                          <v-form ref="form">
                            <ValidationProvider
                              v-slot="{ errors }"
                              name="email"
                              rules="required|email"
                            >
                              <v-text-field
                                color="light-blue lighten-2"
                                prepend-icon="mdi-email"
                                v-model="form.email"
                                :error-messages="errors"
                                label="E-mail"
                                required
                              ></v-text-field>
                            </ValidationProvider>
                          </v-form>
                        </ValidationObserver>
                      </client-only>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn text @click.stop="submit" class="text-capitalize">Send</v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click.stop="clear" class="text-capitalize">Reset Form</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPasswordEmail",
  data() {
    return {
      form: {
        email: null
      }
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.$refs.form.reset();
    },
    clear() {
      this.$refs.form.reset();
      this.$refs.observer.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-image: url("~assets/images/login/1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.loginOverlay {
  height: 100%;
  background-color: rgba(245, 245, 245, 0.8);
}
</style>
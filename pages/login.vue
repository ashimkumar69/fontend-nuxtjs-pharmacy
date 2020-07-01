<template>
  <div class="login">
    <div class="loginOverlay d-flex align-center">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-card>
              <v-card-title>Login</v-card-title>
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

                            <ValidationProvider
                              v-slot="{ errors }"
                              name="password"
                              rules="required|min:8"
                            >
                              <v-text-field
                                color="light-blue lighten-2"
                                prepend-icon="mdi-lock"
                                v-model="form.password"
                                :error-messages="errors"
                                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="passwordShow ? 'text' : 'password'"
                                name="password"
                                label="Password"
                                hint="At least 8 characters"
                                counter
                                @click:append="passwordShow = !passwordShow"
                              ></v-text-field>
                            </ValidationProvider>
                          </v-form>
                        </ValidationObserver>
                      </client-only>
                      <v-hover v-slot:default="{hover}">
                        <v-card-subtitle v-if="hover" class="py-0">
                          <a
                            class="text-decoration-underline"
                            @click.stop="goForgotPage"
                          >Forgot your password?</a>
                        </v-card-subtitle>
                        <v-card-subtitle v-else class="py-0">Forgot your password?</v-card-subtitle>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn text @click.stop="submit" class="text-capitalize">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click.stop="clear" class="text-capitalize">Reset Form</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
              <v-hover v-slot:default="{hover}">
                <v-card-subtitle v-if="hover">
                  <a
                    class="text-decoration-underline"
                    @click.stop="goRegisterPage"
                  >Don't have an account? Register</a>
                </v-card-subtitle>
                <v-card-subtitle v-else>Don't have an account? Register</v-card-subtitle>
              </v-hover>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      passwordShow: false,
      absolute: true,
      opacity: 0.1
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
    },
    goRegisterPage() {
      this.$router.push("/register");
    },
    goForgotPage() {
      this.$router.push("/reset-password-email");
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
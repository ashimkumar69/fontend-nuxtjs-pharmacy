<template>
  <div class="login">
    <div class="loginOverlay">
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223924372!2d90.27923775747219!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1593410306214!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </v-col>
          <v-col cols="8">
            <v-card>
              <v-card-title>Contauct Us</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container class="pa-0">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <client-only>
                        <ValidationObserver ref="observer" v-slot="{ validate, reset }">
                          <v-form ref="form">
                            <ValidationProvider v-slot="{ errors }" name="name" rules="required">
                              <v-text-field
                                color="light-blue lighten-2"
                                prepend-icon="fas fa-user"
                                v-model="form.name"
                                :error-messages="errors"
                                label="Name"
                                required
                              ></v-text-field>
                            </ValidationProvider>

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
                            <ValidationProvider v-slot="{ errors }" name="phone" rules="required">
                              <v-text-field
                                color="light-blue lighten-2"
                                prepend-icon="mdi-phone"
                                v-model="form.phone"
                                :error-messages="errors"
                                label="Phone"
                                required
                              ></v-text-field>
                            </ValidationProvider>
                            <ValidationProvider v-slot="{ errors }" name="subject" rules="required">
                              <v-text-field
                                color="light-blue lighten-2"
                                prepend-icon="fas fa-book"
                                v-model="form.subject"
                                :error-messages="errors"
                                label="Subject"
                                required
                              ></v-text-field>
                            </ValidationProvider>
                            <ValidationProvider v-slot="{ errors }" name="comment" rules="required">
                              <v-textarea
                                outlined
                                color="light-blue lighten-2"
                                prepend-icon="fas fa-comment"
                                v-model="form.comment"
                                :error-messages="errors"
                                label="Comment"
                              ></v-textarea>
                            </ValidationProvider>
                            <ValidationProvider v-slot="{ errors }" name="files" rules="required">
                              <v-file-input
                                color="light-blue lighten-2"
                                v-model="form.files"
                                :error-messages="errors"
                                show-size
                                counter
                                multiple
                                outlined
                                dense
                                label="File input (Optional)"
                              >
                                <template v-slot:selection="{ text }">
                                  <v-chip small label color="light-blue lighten-2">{{ text }}</v-chip>
                                </template>
                              </v-file-input>
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
                <v-btn text @click="submit" class="text-capitalize">Send</v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click="clear" class="text-capitalize">Reset Form</v-btn>
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
  name: "Contact",
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        subject: null,
        comment: null,
        files: []
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
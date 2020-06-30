<template>
  <div>
    <v-footer padless>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-card flat tile>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="mr-2">
                    <v-img src="/images/favicon/favicon.webp" width="30px"></v-img>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Pharmacy</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-card-text
                class="pl-0 pt-0"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate iste. Architecto ad, est saepe a eveniet eius ex. Minus eveniet aliquid culpa, ducimus id voluptate eaque aperiam quas facilis.</v-card-text>
              <v-card-title class="pl-0">Follow Us</v-card-title>
              <v-card-text class="pl-0">
                <v-btn
                  v-for="icon in icons"
                  :key="icon.id"
                  class="mr-2"
                  fab
                  small
                  color="light-blue lighten-2"
                  dark
                >
                  <v-icon small>{{ icon.icon }}</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card flat tile>
              <v-card-title>Manually Contact Us</v-card-title>
              <v-list>
                <v-list-item>
                  <v-list-item-icon class="mr-2">
                    <v-icon color="light-blue lighten-2">mdi-phone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>019773733747</v-list-item-subtitle>
                    <v-list-item-subtitle>019773733747</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mr-2">
                    <v-icon color="light-blue lighten-2">mdi-clock</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>Hotline Hours: 10 AM - 10 PM</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mr-2">
                    <v-icon color="light-blue lighten-2">mdi-email</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>example@example.com</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon class="mr-2">
                    <v-icon color="light-blue lighten-2">fas fa-map-marker-alt</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text class="pt-0 pl-0 text--secondary">
                      #50 Road 9/A
                      (Next to Meena Bazaar)
                      Dhanmondi, Dhaka 1209
                      Open 9 AM - 11 PM
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card flat tile>
              <v-card-title>Newsletter</v-card-title>

              <v-card-text>
                <div
                  class="mb-2"
                >Don’t miss to subscribe to our news feeds, kindly fill the form below</div>
                <client-only>
                  <ValidationObserver ref="observer">
                    <v-form ref="form">
                      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                        <v-text-field
                          color="light-blue lighten-2"
                          v-model="form.email"
                          :error-messages="errors"
                          label="Your Email Address"
                          outlined
                          clearable
                          required
                        ></v-text-field>
                      </ValidationProvider>
                    </v-form>
                  </ValidationObserver>
                </client-only>

                <v-btn block color="light-blue lighten-2" outlined @click.stop="submit">SUBSCRIBE</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <v-card flat tile class="text-center">
      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} —
        <strong>Pharmacy</strong>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { id: 1, icon: "fab fa-facebook-f" },
        { id: 2, icon: "mdi-twitter" },
        { id: 3, icon: "mdi-youtube" }
      ],
      form: {
        email: null
      }
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      this.$refs.observer.reset();
      this.$refs.form.reset();
    }
  }
};
</script>
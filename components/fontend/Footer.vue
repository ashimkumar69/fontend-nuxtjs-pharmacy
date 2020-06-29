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

              <v-card-text class="pl-0">
                DD News is a premium magazine template based on Vuetify 2.
                We bring you the best Premium Themes that perfect for news, magazine, personal blog, etc.
              </v-card-text>
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
              <v-card-title>Manualy Contact Us</v-card-title>
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
                <v-text-field
                  color="light-blue lighten-2"
                  label="Your Email Address"
                  outlined
                  clearable
                ></v-text-field>
                <v-btn block color="light-blue lighten-2" outlined>SUBSCRIBE</v-btn>
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
  data: () => ({
    icons: [
      { id: 1, icon: "fab fa-facebook-f" },
      { id: 2, icon: "mdi-twitter" },
      { id: 3, icon: "mdi-youtube" }
    ]
  })
};
</script>
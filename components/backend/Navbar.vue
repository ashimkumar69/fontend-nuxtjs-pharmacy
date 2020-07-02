<template>
  <div>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Pharmacy</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="mr-2" icon>
        <v-badge color="light-blue lighten-2" content="6" overlap>
          <v-icon>fas fa-user</v-icon>
        </v-badge>
      </v-btn>
      <v-menu offset-y transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-badge color="light-blue lighten-2" content="6" overlap>
              <v-icon>fas fa-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="d-flex justify-center">Notification</v-card-title>

          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-avatar size="40">
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <!-- 
        
       nav avator


      -->
      <v-menu offset-y transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-badge bordered bottom color="light-blue lighten-2" dot offset-x="25" offset-y="20">
            <v-list-item-avatar size="40" role="button">
              <v-img v-bind="attrs" v-on="on" src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-badge>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-badge bordered bottom color="light-blue lighten-2" dot offset-x="25" offset-y="20">
                <v-list-item-avatar size="40">
                  <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-badge>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list dense>
            <v-list-item-group v-model="model" color="light-blue lighten-2">
              <v-list-item dense v-for="(item, i) in adminNavs" :key="i">
                <v-list-item-icon>
                  <v-icon small v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <!-- navigation -->

    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list-item class="px-2 py-3">
        <v-badge bordered bottom color="light-blue lighten-2" dot offset-x="25" offset-y="20">
          <v-list-item-avatar size="40">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-badge>

        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <template v-for="item in adminDrawerNavs">
          <v-list-group
            color="light-blue lighten-2"
            :key="item.id"
            :prepend-icon="item.icon"
            no-action
            v-if="item.children"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="subItem in item.children" :key="subItem.id" @click>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.name"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon v-text="subItem.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else :key="item.id" @click>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- end -->
  </div>
</template>


<script>
export default {
  name: "Backend-Navbar",
  data() {
    return {
      model: null,
      drawer: true,
      adminNavs: [
        { id: 1, name: "Profile", icon: "fas fa-user" },
        { id: 2, name: "Settings", icon: "fas fa-cog" },
        { id: 3, name: "Logout", icon: "fas fa-sign-out-alt" }
      ],
      adminDrawerNavs: [
        { id: 1, name: "Dashboord", icon: "mdi-home-city" },
        {
          id: 2,
          name: "Users",
          icon: "mdi-account-group-outline",
          children: [
            { id: 1, icon: "fas fa-file", name: "Read" },
            { id: 2, icon: "mdi-update", name: "Update" }
          ]
        },
        {
          id: 3,
          name: "Categories",
          icon: "mdi-account-group-outline",
          children: [
            { id: 1, icon: "fas fa-file", name: "Read" },
            { id: 2, icon: "mdi-plus", name: "Create" },
            { id: 3, icon: "mdi-update", name: "Update" }
          ]
        },
        {
          id: 4,
          name: "Products",
          icon: "fas fa-box",
          children: [
            { id: 1, icon: "fas fa-file", name: "Read" },
            { id: 2, icon: "mdi-plus", name: "Create" },
            { id: 3, icon: "mdi-update", name: "Update" }
          ]
        },
        {
          id: 5,
          name: "Blogs",
          icon: "fas fa-blog",
          children: [
            { id: 1, icon: "fas fa-file", name: "Read" },
            { id: 2, icon: "mdi-plus", name: "Create" },
            { id: 3, icon: "mdi-update", name: "Update" }
          ]
        },
        { id: 6, name: "Contact", icon: "fas fa-address-card" },
        {
          id: 7,
          name: "User Feedback",
          icon: "fas fa-comments",
          children: [
            { id: 1, icon: "fas fa-file", name: "Read" },
            { id: 2, icon: "mdi-plus", name: "Create" },
            { id: 3, icon: "mdi-update", name: "Update" }
          ]
        }
      ]
    };
  }
};
</script>
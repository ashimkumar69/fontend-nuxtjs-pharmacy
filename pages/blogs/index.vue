<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6" v-for="item in blogs" :key="item.id">
          <v-card>
            <v-img :src="item.image" height="250px"></v-img>
            <v-card-subtitle class="pb-0">{{ item.created }}</v-card-subtitle>
            <v-card-title class="pt-0 pb-0">{{ item.title | str_limit(52)}}</v-card-title>
            <v-card-text class="pb-0" v-html="item.body"></v-card-text>
            <v-card-actions>
              <v-btn outlined color="light-blue lighten-2" class="text-capitalize">Read More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <v-pagination dark color="light-blue lighten-2" v-model="page" :length="6"></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Blogs-Child",
  data() {
    return {
      page: 1,
      blogs: [
        {
          id: 1,
          image: "/images/blog/1.webp",
          title: "Monitoring the pulse Lorem ipsum dolor Lorem ipsum dolor",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
          created: "22 Dec 2020"
        },
        {
          id: 2,
          image: "/images/blog/2.webp",
          title: "Monitoring the pulse",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
          created: "22 Dec 2020"
        },
        {
          id: 3,
          image: "/images/blog/1.webp",
          title: "Monitoring the pulse",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
          created: "22 Dec 2020"
        },
        {
          id: 4,
          image: "/images/blog/2.webp",
          title: "Monitoring the pulse",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
          created: "22 Dec 2020"
        }
      ]
    };
  }
};
</script>

<style>
</style>
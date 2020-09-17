<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6" v-for="item in blogs" :key="item.id">
          <v-card>
            <v-img height="250px" :src="item.picture"></v-img>
            <v-card-subtitle class="pb-0">{{ item.published_at }}</v-card-subtitle>
            <v-card-title class="pt-0 pb-0">{{ item.title | str_limit(52)}}</v-card-title>
            <v-card-text class="pb-0" v-html="item.body"></v-card-text>
            <v-card-actions>
              <v-btn
                outlined
                color="light-blue lighten-2"
                class="text-capitalize"
                :to="{name:'blogs-id',params:{id:item.slug}}"
              >Read More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <v-pagination
              dark
              color="light-blue lighten-2"
              v-model="meta.current_page"
              :length="meta.last_page"
              total-visible="8"
              @input="changePage"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Blogs-Child",
  // data() {
  //   return {
  //     page: 1,
  //   };
  // },
  async fetch({ store, $axios }) {
    const blogs = await $axios.$get("/blogIndex");
    store.dispatch("fontendBlogs/setBlogs", blogs.data);
    store.dispatch("fontendBlogs/setMeta", blogs.meta);
  },
  computed: {
    ...mapGetters({
      blogs: "fontendBlogs/getBlogs",
      meta: "fontendBlogs/getMeta",
    }),
  },

  methods: {
    changePage(page) {
      this.$axios
        .$get(`/blogIndex?page=${page}`)
        .then((res) => {
          this.$store.dispatch("fontendBlogs/setBlogs", res.data);
          this.$store.dispatch("fontendBlogs/setMeta", blogs.meta);
        })
        .catch((errors) => console.log(errors));
    },
  },
};
</script>

<style>
</style>
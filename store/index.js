export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      if (this.$auth.loggedIn) {
        const user = await this.$axios.$get("/auth/user");
        const categories = await this.$axios.$get("/category");
        const products = await this.$axios.$get("/product");
        const blogs = await this.$axios.$get("/blog");

        dispatch("user/setUser", user.data);
        dispatch("categories/setCategories", categories.data);
        dispatch("products/setProducts", products.data);
        dispatch("blogs/setBlogs", blogs.data);
      }
      const banners = await this.$axios.$get("/bannerIndex");
      const footer = await this.$axios.$get("/footerIndex");
      const products = await this.$axios.$get("/productIndex");
      const blogs = await this.$axios.$get("/blogIndex");

      dispatch("banners/setBanners", banners.data);
      dispatch("footer/setFooter", footer.data);
      dispatch("products/setProducts", products.data);
      dispatch("fontendBlogs/setBlogs", blogs.data);
    } catch (error) {}
  }
};

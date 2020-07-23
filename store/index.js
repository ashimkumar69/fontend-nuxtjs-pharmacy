export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      if (this.$auth.loggedIn) {
        const user = await this.$axios.$get("/auth/user");
        const categories = await this.$axios.$get("/category");
        const products = await this.$axios.$get("/product");

        dispatch("user/setUser", user.data);
        dispatch("categories/setCategories", categories.data);
        dispatch("products/setProducts", products.data);
      }
    } catch (error) {}
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      if (this.$auth.loggedIn) {
        const user = await this.$axios.$get("/auth/user");
        dispatch("user/setName", user.data.name);
        dispatch("user/setPhone", user.data.phone);
        dispatch("user/setEmail", user.data.email);
        dispatch("user/setAddress", user.data.address);
        dispatch("user/setAvatar", user.data.avatar);
      }
    } catch (error) {}
  }
};

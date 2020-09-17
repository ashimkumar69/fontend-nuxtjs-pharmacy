export const state = () => ({
  blogs: [],
  meta: {}
});

export const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  SET_META(state, meta) {
    state.meta = meta;
  }
};

export const actions = {
  setBlogs({ commit }, blogs) {
    commit("SET_BLOGS", blogs);
  },
  setMeta({ commit }, meta) {
    commit("SET_META", meta);
  },

  async fetchBlogs({ commit }) {
    try {
      const blogs = await this.$axios.$get("/blogIndex");

      commit("SET_BLOGS", blogs.data);
      commit("SET_META", blogs.meta);
    } catch (error) {}
  }
};

export const getters = {
  getBlogs(state) {
    return state.blogs;
  },
  getMeta(state) {
    return state.meta;
  }
};

export const state = () => ({
  name: null,
  phone: null,
  email: null,
  address: null,
  avatar: null
});

export const mutations = {
  SET_NAME(state, name) {
    state.name = name;
  },
  SET_PHONE(state, phone) {
    state.phone = phone;
  },
  SET_EMAIL(state, email) {
    state.email = email;
  },
  SET_ADDRESS(state, address) {
    state.address = address;
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar;
  }
};

export const actions = {
  setName({ commit }, name) {
    commit("SET_NAME", name);
  },
  setPhone({ commit }, phone) {
    commit("SET_PHONE", phone);
  },
  setEmail({ commit }, email) {
    commit("SET_EMAIL", email);
  },
  setAddress({ commit }, address) {
    commit("SET_ADDRESS", address);
  },
  setAvatar({ commit }, avatar) {
    commit("SET_AVATAR", avatar);
  },
  async setUser({ dispatch }) {
    try {
      const user = await this.$axios.$get("/auth/user");

      dispatch("setName", user.data.name);
      dispatch("setPhone", user.data.phone);
      dispatch("setEmail", user.data.email);
      dispatch("setAddress", user.data.address);
      dispatch("setAvatar", user.data.avatar);
    } catch (error) {}
  }
};

export const getters = {
  getName(state) {
    return state.name;
  },
  getPhone(state) {
    return state.phone;
  },
  getEmail(state) {
    return state.email;
  },
  getAddress(state) {
    return state.address;
  },
  getAvatar(state) {
    return state.avatar;
  }
};

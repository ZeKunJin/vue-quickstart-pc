const state = {
  device: 'desktop'
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  ToggleDevice ({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

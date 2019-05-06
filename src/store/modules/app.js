
import { getToken, setToken, removeToken } from '@/utils/cookies'
const app = {
  state: {
    // sidebar: {
    //   opened: ''
    // },
    token: getToken('access_token') || '',
    me:{}
  },
  mutations: {
    // TOGGLE_SIDEBAR: (state) => {
      // if (state.sidebar.opened) {
        // Cookies.set('sidebarStatus', 1)
      // } else {
        // Cookies.set('sidebarStatus', 0)
      // }
      // state.sidebar.opened = !state.sidebar.opened
    // },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ME: (state, data) => {
      state.me = data;
    },
    SET_LOGOUT: (state) => {
      state.token = '';
      state.me = {};
    }
  },
  actions: {
    // ToggleSideBar: ({ commit }) => {
    //   commit('TOGGLE_SIDEBAR')
    // },
    /**
     * 登录
     */
    Login({ commit },data){
      return new Promise((resolve, reject) => {
        if (data) {
          setToken('access_token',data.access_token);
          commit('SET_TOKEN',data.access_token);
          resolve('200 OK')
        } else {
          reject('error')
        }
      })
    },
    getMe({ commit },data){
      return new Promise((resolve, reject) => {
        if (data) {
          commit('SET_ME',data);
          resolve('200 OK')
        } else {
          reject('error')
        }
      })
    },
    Logout({ commit }){
      return new Promise((resolve, reject) => {
        commit('SET_LOGOUT');
        removeToken('access_token');
        resolve('200 OK');
      })
    }

  }
}

export default app

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import '../node_modules/amfe-flexible/index.js'


Vue.config.productionTip = false



const store = new Vuex.Store({
  state: {
   isborast:false
  },
  mutations: {
    increment (state) {
      state.isborast=true;
    },
    decrement(state){
        state.isborast=false;
    }
  }
})

/* eslint-disable no-new */
import Vuex  from 'vuex'
Vue.use(Vuex)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

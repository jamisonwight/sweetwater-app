import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vuex from 'vuex'

import VueResource from 'vue-resource'
import Navigation from 'components/Navigation/navigation';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import routes from 'src/routes';
import 'src/style.scss';

export const store = new Vuex.Store({
  state: {
    quantity: 0,
    items: [],
    total: 0,
  }
});

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  store,
  router,
  components: {
    Navigation,
  },

  data(){
    return {
    };
  },

  created(){
  }
}).$mount('#app');

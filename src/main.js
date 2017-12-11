import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'

import VueResource from 'vue-resource'
import Navigation from 'components/Navigation/navigation';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import routes from 'src/routes';
import 'src/style.scss';

const store = new Vuex.Store({
  state: {
    shoppingCart: {
      quantity: 0,
      items: [],
      total: 0
    }
  }
});

export const router = new VueRouter({
  routes,
  store,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  router,
  components: {
    Navigation,
  },

  data(){
    return {
      isLoading: false
    };
  },

  created(){
  }
}).$mount('#app');

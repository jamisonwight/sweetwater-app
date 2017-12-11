import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'

import { LoadingState } from 'src/config/loading-state';
import VueResource from 'vue-resource'
import Navigation from 'components/Navigation/navigation';
import Loader from 'components/Loader/loader';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import 'src/config/http';
import routes from 'src/routes';
import 'src/style.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  router,
  components: {
    Navigation,
    Loader,
  },

  data(){
    return {
      isLoading: false
    };
  },

  created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  }
}).$mount('#app');

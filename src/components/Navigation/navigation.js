import Vue from 'vue';
import template from './navigation.html';

export default Vue.extend({
  template,

  data() {
    return {
      state: this.$store.state
    }
  }
});

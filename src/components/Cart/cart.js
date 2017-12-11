import Vue from 'vue';
import Products from '!json-loader!../../dataset/items.json';

export default Vue.extend({
  template: `
  <div class="container-fluid">
    <div class="row">
    <h1>Shopping Cart</h1>
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            
          </div>
      </div>
      </div>
    </div>
  </div>`,

  data() {
    return {
      products: Products,
      state: this.$store.state,
    }
  },

  methods: {
    updateQuantity(){

    },

    getTotal() {

    }
  },

});

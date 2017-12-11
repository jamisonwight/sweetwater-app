import Vue from 'vue';
import Products from '!json-loader!../../dataset/items.json';

export default Vue.extend({
  template: `
  <div v-for="product in products" class="col-md-6">
    <a :href="product.url" :alt="product.description" target="_blank">
      <img :src="product.image"/>
    </a>
    <p><b>Name: {{product.productName}}</b></p>
    <p><b>Description: {{product.description}}</b></p>
    <p><b>Price: {{product.price}}</b></p>
    <p><b>Manufacturer: {{product.manufacturer}}</b></p>
    <p><b>Quantity: {{product.quantity}}</b></p>
    <p><b>In Stock: {{product.available}}</b></p>
    <button v:click="addToCart(product.itemid)">Add To Cart</button>
  </div>`,

  data() {
    return {
      products: Products,
      state: this.$store.state,
      cartItems: [],
    }
  },

  methods: {
    addToCart(id) {
      let _cart = this.products.find(item => {
        return item.id === id
      });
      this.state.shoppingCart.cart.push(_cart);
      this.state.shoppingCart.quantity += 1;
    }
  },

  created() {

  }

});

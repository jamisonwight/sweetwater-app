import Vue from 'vue';
import Products from '!json-loader!../../dataset/items.json';

export default Vue.extend({
  template: `
    <div class="container-fluid">
      <div class="row">
      <h1>Products</h1>
        <div class="col-md-12">
          <div class="row">
              <div class="product col-md-6" v-for="product in products">
                <a :href="product.url" :alt="product.description" target="_blank">
                  <img :src="product.image"/>
                </a>
                <p><b>Name:</b> {{product.productName}}</p>
                <p><b>Description:</b> {{product.description}}</p>
                <p class="text-danger"><b>Price: $<span>{{product.price}}</span></b></p>
                <p><b>Manufacturer:</b> {{product.manufacturer}}</p>
                <p><b>Quantity:</b> {{product.quantity}}</p>
                <p><b>In Stock:</b> {{product.available}}</p>
                <button class="btn btn-primary" v-on:click="addToCart(product.itemid)">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
    </div>`,

  data: function() {
    return {
      products: Products,
      cartItems: [],
    }
  },

  methods: {
    addToCart(id) {
      var _cart = this.products.find(item => {
        return item.itemid === id
      });
      console.log(_cart);
      var total = parseInt(_cart.price) * _cart.quantity;
      this.$store.state.total += total;
      this.$store.state.items.push(_cart);
      this.$store.state.quantity += 1;
      console.log(this.$store.state.quantity);
    }
  },

  created() {
  }

});

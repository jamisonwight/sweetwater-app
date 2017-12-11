import Vue from 'vue';
import Products from '!json-loader!../../dataset/items.json';

export default Vue.extend({
  template: `
    <div class="container-fluid">
    <h1>Shopping Cart</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div v-for="item in cartItems" class="product col-md-12">
              <a :href="item.url" :alt="item.description" target="_blank">
              <img :src="item.image"/>
              </a>
              <p><b>Name:</b> {{item.productName}}</p>
              <p><b>Description:</b> {{item.description}}</p>
              <p class="text-danger"><b>Price: $<span>{{item.price}}</span></b></p>
              <p><b>Manufacturer:</b> {{item.manufacturer}}</p>
              <span>
                <b>Quantity:</b> 
                <input type="number" v-model="quantity" :value="item.quantity"/>
                <button class="btn btn-success" v-on:click="updateTotal(item.itemid)">Update</button>
              </p>
              <p><b>In Stock:</b> {{item.available}}</p>
            </div>
          </div>
        </div>
        <div class="row bg-gray">
          <div class="col-md-6">
            <h2>Checkout Information</h2>
            <h4><b>quantity:</b> {{state.quantity}}</h4>
            <h4 class="text-danger"><b>total: $</b> {{this.total}}</h4>
          </div>
        </div>
      </div>
    </div>`,

  data() {
    return {
      products: Products,
      state: this.$store.state,
      total: '',
      quantity: '',
      cartItems: this.$store.state.items
    }
  },

  methods: {
    updateTotal(id){
      var _item = this.products.find(item => {
        return item.itemid === id.itemid
      });
      this.calcTotal(_item.price, _item.quantity);
    },

    calcTotal(quantity, price) {
      var _price = parseInt(price);
      var addItem = _price * quantity;

      this.total = this.total + addItem;
      this.state.total = this.total;
    }
  },

  mounted() {
    console.log(typeof this.cartItems);
    Object.entries(this.cartItems.forEach(element => {
      this.calcTotal(element.quantity, element.price)
    }))
  }

});

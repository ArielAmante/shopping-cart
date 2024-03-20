<template>
  <div id="app">
    <!-- If authenticated, display shopping cart content -->
    <template v-if="authenticated">
      <h1 class="shopping-cart-title">Interactive Shopping Cart</h1>
      <ProductList @add-to-cart="addToCart" :products="products" />
      <CartList @remove-from-cart="removeFromCart" @update-quantity="updateQuantity" :cart="cart" />
    </template>
    <!-- If not authenticated, display login page -->
    <template v-else>
      <LoginPage @authenticated="authenticate" />
    </template>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import CartList from './components/CartList.vue';
import LoginPage from './components/LoginPage.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    CartList,
    LoginPage // Register the LoginComponent.vue component
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Intermediate Pad  ', price: 10 },
        { id: 2, name: '1 pair of Scissors', price: 15 },
        { id: 3, name: 'Long Bond Paper   ', price: 30 },
        { id: 4, name: 'Short Bond Paper  ', price: 25 },
        { id: 5, name: '1 pc Black Ballpen', price: 5 }, 
        { id: 6, name: '1 pc. Blue Ballpen', price: 8 },
        { id: 7, name: '1 pc Manila Paper', price: 25 },
        { id: 8, name: 'Assorted Cartolina', price: 25 },
        { id: 9, name: 'Assorted Art Paper', price: 25 }
      ],
      cart: [],
      authenticated: false // Flag to track authentication state
    };
  },
  computed: {
    total() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  methods: {
    addToCart(product) {
      const existingItemIndex = this.cart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    updateQuantity(payload) {
      const { productId, quantity } = payload;
      const itemToUpdate = this.cart.find(item => item.id === productId);
      if (itemToUpdate) {
        // Prevent negative quantity
        itemToUpdate.quantity = Math.max(0, quantity);
      }
    },
    authenticate() {
      // For simplicity, assume user is authenticated
      this.authenticated = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

.shopping-cart-title {
  background: radial-gradient(circle, rgba(247, 25, 25, 1), rgba(255, 165, 0, 1), rgba(255, 255, 255, 1));
  color: white;
  padding: 10px;
}
</style>



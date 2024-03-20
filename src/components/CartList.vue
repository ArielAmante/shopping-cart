<template>
    <div class="cart-container">
      <h2>Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id" class="cart-item">
          <div class="item-details">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-price">₱{{ item.price }}</span>
            <div class="quantity-control">
              <button @click="decrementQuantity(item)" class="quantity-button">-</button>
              <span class="item-quantity">{{ item.quantity }}</span>
              <button @click="incrementQuantity(item)" class="quantity-button">+</button>
            </div>
            <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
          </div>
        </li>
      </ul>
      <h3 class="total-price">Total: ₱{{ totalPrice.toFixed(2) }}</h3>
    </div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    },
    updateQuantity(productId, quantity) {
      // Prevent negative quantity
      quantity = Math.max(0, quantity);
      this.$emit('update-quantity', { productId, quantity });
    },
    incrementQuantity(item) {
      item.quantity++;
      this.updateQuantity(item.id, item.quantity);
    },
    decrementQuantity(item) {
      if (item.quantity > 0) {
        item.quantity--;
        this.updateQuantity(item.id, item.quantity);
      }
    }
  }
};
</script>

<style scoped>
.cart-container {
  background: rgb(22, 43, 165);
  padding: 10px;
  color: white; /* Change font color to white */
}

.cart-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  color: rgba(230, 150, 2, 0.89); /* Change font color to orange */
}

.item-details {
  display: flex;
  align-items: center;
}

.item-name {
  flex-grow: 1;
}

.item-price {
  margin-right: 10px;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-button {
  padding: 5px 10px;
  background-color: rgb(194, 191, 0);
  color: rgb(39, 39, 33); /* Change color to pale gold */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  margin-right: 5px; /* Add margin-right */
}

.quantity-button:hover {
  background-color: yellow; /* Change to youtube-ish red */
}

.item-quantity {
  margin: 0 5px;
  font-weight: bold;
  color: palegoldenrod; /* Change color to pale gold */
}

.remove-button {
  padding: 5px 10px;
  background-color: rgb(218, 6, 59); /* Change color to pale red */
  color: rgb(31, 29, 29); /* Change color to pale red */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.remove-button:hover {
  background-color: rgb(255, 0, 0); /* Change to youtube-ish red */
  color: white;
}

.total-price {
  font-weight: bold;
  margin-top: 10px;
  color: white; /* Change font color to white */
  text-align: right; /* Align total to the right */
}
</style>


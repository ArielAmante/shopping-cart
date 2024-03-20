<template>
  <div class="product-list-container">
    <PageHeader :title="'Products'" />
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">₱ {{ product.price }}</p>
          <button @click="addToCart(product)" class="add-to-cart-button">Add to Cart</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style scoped>
.product-list-container {
  background: linear-gradient(to bottom, orange, white);
  padding: 20px;
}

.product-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  width: 300px;
  margin: 0 10px 20px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  background-color: navy;
  color: white;
}

.product-item:hover {
  transform: translateY(-5px);
}

.product-details {
  padding: 10px;
  text-align: center;
}

.product-name {
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
  color: orange;
}

.product-price {
  margin: 10px 0;
  font-size: 1.1em;
  font-weight: bold;
  color: orange;
}

.add-to-cart-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: rgb(38, 172, 61);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.add-to-cart-button:hover {
  background-color: rgb(11, 238, 49);
}
</style>

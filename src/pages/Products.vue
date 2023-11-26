<template>
    <product-item
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :image="product.image"
      :title="product.title"
      :description="product.description"
      :price="product.price"
    ></product-item>
</template>

<script>

import ProductItem from "@/components/product/ProductItem.vue";
import CartItem from "@/components/cart/CartItem.vue";

export default {
  components: {CartItem, ProductItem},
  computed: {
    products() {
      return this.$store.state.product.productsList
    }
  }
}
</script>
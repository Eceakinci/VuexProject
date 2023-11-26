<template>
  <div v-if="!cartList.length">
      There is no product
  </div>
  <div v-else>
    <cart-header></cart-header>
    <cart-item
        v-for="item in cartList"
        :key="item.id"
        :prod-id="item.id"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
    ></cart-item>
  </div>

</template>

<script>
import CartItem from '@/components/cart/CartItem.vue'
import CartHeader from "@/components/cart/CartHeader.vue";

export default {
  components: {CartHeader, CartItem},
  computed: {
    cartList() {
      return this.$store.state.product.cartElements
    }
  }
}
</script>

<style scoped>

</style>
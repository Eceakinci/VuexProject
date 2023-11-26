<template>
  <li>
    <base-badge mode="elegant">
      <h4>{{ cartTotal.quantity }}</h4>
    </base-badge>
    <base-badge mode="elegant">
      <h4>${{ cartTotal.totalPrice.toFixed(2) }}</h4>
    </base-badge>
  </li>
</template>

<script>
import BaseBadge from "@/components/base components/BaseBadge.vue";

export default {
  components: {BaseBadge},
  computed: {
    cartTotal() {
      return this.$store.state.product.cartTotal
    },
  }
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
  list-style: none;
}
</style>
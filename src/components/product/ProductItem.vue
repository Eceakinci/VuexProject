<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-badge>
        <p>{{ description }}</p>
        <div class="product__actions">
          <button @click="addToCart({ id , price})">Add to Cart</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import BaseBadge from "@/components/base components/BaseBadge.vue";
import {mapActions} from "vuex";

export default {
  components: {BaseBadge},
  props: ['id', 'image', 'title', 'description', 'price'],
  methods: {
    ...mapActions([ 'addToCart' ])
  }
}
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 1rem;
  padding: 1rem;
  list-style: none;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 1rem;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__text {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 10rem;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

/* TODO: ANIMATION ON HOVER */

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>
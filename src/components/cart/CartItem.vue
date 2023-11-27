<template>
  <li>
    <div>
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item__data">
        <div>
          Price per Item:
          <strong>${{ price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ quantity }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <div class="item__actions">
        <button @click="removeFromCart({ prodId, itemTotal })">Remove All</button>
        <button @click="removeOneItem({ prodId })">Remove One</button>
      </div>
    </div>
  </li>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: ['prodId', 'title', 'image', 'price', 'quantity'],
  computed: {
    itemTotal() {
      return (this.price * this.quantity).toFixed(2);
    }
  },
  methods: {
    ...mapActions([ 'removeFromCart', 'removeOneItem'])
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
  border-radius: 1rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

h3 {
  margin-bottom: 1rem;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

.item__actions {
  display:flex;
  justify-content: space-evenly;
}

button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease-out;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
  transition: all 0.3s ease-out;
}
</style>
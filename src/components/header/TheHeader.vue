<template>
  <header>
    <h1>
      <router-link to="/">VueShop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">
            Cart (
            <Transition name="fade" mode="out-in">
              <span :key="quantity">{{ quantity }}</span></Transition>
            )
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button>Login</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    quantity() {
      return this.$store.state.product.cartTotal.quantity;
    }
  }
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a, span {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
  transition: all 0.3s ease-out;
}

button:hover,
button:active {
  background-color: #f0d5ff;
  transition: all 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
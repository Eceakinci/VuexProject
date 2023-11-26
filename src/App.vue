<template>
  <header>
      <the-header></the-header>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "@/components/header/TheHeader.vue";

export default {
  components: {TheHeader}
}
</script>

<style scoped>
main {

}
</style>
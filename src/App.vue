<template>
  <header>
      <the-header></the-header>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import {defineComponent} from "vue";
import TheHeader from "@/components/header/TheHeader.vue";

export default defineComponent({
  components: {TheHeader}
})
</script>

<style scoped>
main {

}
</style>
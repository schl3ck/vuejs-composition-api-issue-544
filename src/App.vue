<template>
  <div id="app">
      <AppHeader />

      <!-- generic page template placeholder -->
      <div id="content">
        <router-view />
      </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<template>
  <b-navbar
    :sticky="true"
    variant="light"
    type="light"
    toggleable="lg"
    class="mb-3">
    <b-navbar-brand to="/">My trains</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Trains' }" :active="currentRoute === '/'">
          Trains
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-text class="footer small">
          Version: <span id="version">[AIV]{version}[/AIV]</span>
        </b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppHeader",
  data() {
    return {
      currentRoute: this.$router.currentRoute.path,
    };
  },
  created() {
    this.$router.afterEach((to /* from */) => {
      this.currentRoute = to.path;
    });
  },
});
</script>

<style lang="scss" scoped>
</style>

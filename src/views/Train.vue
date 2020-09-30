<template>
  <div>{{ dev }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Train",
  props: {
    train: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return { dev: props.train };
  }
});
</script>

<style scoped>

</style>

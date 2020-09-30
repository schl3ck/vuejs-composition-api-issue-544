<template>
  <div class="container-fluid px-5">
    <h1>Trains</h1>
    <div v-if="loaded && trains" class="row">
      <b-card v-for="train in trains" :key="train.name" class="col">
          <b-card-title class="mb-0">
            <router-link :to="{ name: 'Train', params: { train: train.name } }">
              {{ train.name }}
            </router-link>
          </b-card-title>
      </b-card>
    </div>
    <b-alert v-else variant="danger" show>
      Application flow error. Trains should be loaded already!
    </b-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { defineComponent } from "@vue/composition-api";
import { getTrains, loadTrains } from "@/store/trains";

export default defineComponent({
  name: "Trains",
  components: {},
  setup() {
    const loaded = loadTrains();
    const result: {
      loaded: typeof loaded;
      trains: ReturnType<typeof getTrains> | null;
    } = { loaded, trains: null };
    if (loaded) {
      result.trains = getTrains();
    }
    return result;
  },
});
</script>

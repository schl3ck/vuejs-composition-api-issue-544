import { reactive, computed } from "@vue/composition-api";
import { get, load } from "@/utils/config";
import { ConfigTrain } from "@/config";

const state = reactive<{trains: ConfigTrain[]}>({ trains: [] });

export function getTrains() {
  return computed(() => state.trains);
}

/**
 * Loads the trains from config.
 * @returns `true` when the trains were loaded otherwise `false`
 */
export function loadTrains() {
  let trains = get().trains;
  if (trains) {
    state.trains = trains;
  }
  return Boolean(trains);
}

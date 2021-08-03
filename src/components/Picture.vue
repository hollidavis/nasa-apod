<template>
  <div class="picture"></div>
</template>


<script>
import { reactive } from "@vue/reactivity";
import { AppState } from "../AppState";
import { computed } from "@vue/runtime-core";
export default {
  name: "Picture",
  setup() {
    const state = reactive({
      picture: computed(() => AppState.picture),
    });
    return {
      state,
    };
  },
  components: {},
};
</script>


<style lang="scss" scoped>
</style>
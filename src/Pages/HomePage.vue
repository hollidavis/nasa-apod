<template>
  <div class="HomePage container-fluid">
    <div class="row">
      <h2 class="col-12">Nasa's Astronomy Picture of the Day</h2>
    </div>
    <div class="row">
      <APOD />
    </div>
  </div>
</template>


<script>
import { reactive } from "@vue/reactivity";
import APOD from "../components/APOD.vue";
export default {
  name: "HomePage",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
  components: { APOD },
};
</script>


<style scoped>
</style>
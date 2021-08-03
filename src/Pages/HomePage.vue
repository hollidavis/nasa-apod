<template>
  <div class="component container-fluid">
    <div class="row">
      <h2 class="col-12">Nasa's Astronomy Picture of the Day</h2>
    </div>
    <div class="row">
      <Picture />
    </div>
  </div>
</template>


<script>
import { reactive } from "@vue/reactivity";
import Picture from "../components/Picture.vue";
export default {
  name: "HomePage",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
  components: { Picture },
};
</script>


<style scoped>
.img-fluid {
  height: 5vh;
}
</style>
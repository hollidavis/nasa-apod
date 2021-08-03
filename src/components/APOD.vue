<template>
  <div class="APOD col-12">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="getPicture">
          <input v-model="state.query" type="date" />
          <button type="button" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <Picture />
    </div>
  </div>
</template>


<script>
import { reactive } from "vue";
import { AppState } from "../AppState";
import { computed, onMounted } from "@vue/runtime-core";
import Picture from "../components/Picture.vue";
import { picturesService } from "../services/PicturesService";
export default {
  name: "APOD",
  setup() {
    const state = reactive({
      query: "",
    });
    onMounted(() => {
      picturesService.getPicture();
    });
    return {
      state,
      picture: computed(() => AppState.picture),
      getPicture() {
        picturesService.getPicture(state.query);
      },
    };
  },
  components: { Picture },
};
</script>


<style lang="scss" scoped>
</style>
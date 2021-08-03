<template>
  <div class="picture col-12">
    <div class="row">
      <div class="col-md-9">
        <img :src="picture.img" :alt="picture.title" class="img-fluid" />
      </div>
      <div class="col-md-3">
        <h3>{{ picture.date }} - {{ picture.title }}</h3>
        <p>{{ picture.explanation }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from "vue";
import { picturesService } from "../services/PicturesService";
import { AppState } from "../AppState";
export default {
  name: "Picture",
  setup() {
    const state = reactive({});
    return {
      state,
      picture: computed(() => AppState.picture),
      getPicture() {
        picturesService.getPicture();
      },
    };
  },
  components: {},
};
</script>


<style scoped>
.img-fluid {
  width: 100%;
}
</style>
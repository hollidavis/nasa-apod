<template>
  <div class="picture row">
<div class="col-12">
  <h3>{{picture.title}} - {{picture.date}}</h3>
  <img :src="picture.img" :alt="picture.title">
  <p>{{picture.explanation}}</p>
</div>
  </div>
</template>


<script>
import { reactive } from 'vue';
import { Picture } from '../models/Picture';
import { picturesService } from '../services/PicturesService';
export default {
  name: "Picture",
  props: { picture:{type: Picture, required: true}},
  setup() {
    const state = reactive({
    });
    return {
      state,
      getPicture() {
        picturesService.getPicture();
      },
    };
  },
  components: {},
};
</script>


<style scoped>
</style>
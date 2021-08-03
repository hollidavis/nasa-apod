<template>
  <div class="APOD row">
    <div class="col-12">
    <form @submit.prevent="getPicture">
      <input v-model="state.query" type="date">
      <button type="button" class="btn btn-primary">Search</button>
    </form>
    </div>
    <div class="col-12">
<Picture/>
  </div>
  </div>
</template>


<script>
export default {
  name: 'component',
  setup(){
    return {}
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>
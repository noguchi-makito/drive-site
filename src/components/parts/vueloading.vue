<template>
  <div class="container">
    <vue-loading
      type="spin"
      color="#fff"
      :size="{ width: '50px', height: '50px' }"
    ></vue-loading>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    VueLoading
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
  <div id="overlay" v-show="showContent">
    <div id="content">
      <p>これがモーダルウィンドウです。</p>
      <p><button v-on:click="clickEvent">close</button></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickEvent: function() {
      this.$emit("from-child");
    }
  }
};
</script>

<style></style>

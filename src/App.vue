<template>
  <div id="app">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import "normalize.css";
/* style.css読み込み */
import "./assets/scss/style.scss";
export default {
  name: "App"
};
</script>

<style lang="scss"></style>

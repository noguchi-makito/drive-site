<template>
  <div id="overlay" v-show="showContent">
    <div id="modalContent">
      <h2 class="title">NEW FOLDER</h2>
      <p class="icon">
        <font-awesome-icon icon="folder" />
      </p>
      <div class="input_area">
        <input type="text" />
        <button class="input_area__button1">OK</button>
        <button class="input_area__button2" v-on:click="clickEvent">CANCEL</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showContent"],
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

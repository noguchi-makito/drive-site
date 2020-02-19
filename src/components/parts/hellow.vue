<template>
  <div>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {};
  },
  methods: {
    resetName: function() {
      (this.myName = "KEI"), this.$emit("nameWasReset", this.myName);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

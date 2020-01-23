<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea placeholder="感想を入力"></textarea>
  </div>
</template>

<script>
export default {
 data() {
   return {
     error: "入力は必須です"
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

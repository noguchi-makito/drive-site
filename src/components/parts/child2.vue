<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea placeholder="感想を入力" :value="kansou" @input="inputKansou"></textarea>
    <button>{{hyouji}}</button>
    <div>{{kansou}}</div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     error: "入力は必須です",
     hyouji: "感想を表示する"
   }
 },
 computed: {
   kansou(){
     return this.$store.getters.kansou
   }
 },
 methods:{
   inputKansou(event) {
     this.$store.dispatch("inputKansou", event.target.value)
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

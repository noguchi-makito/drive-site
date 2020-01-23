<template>
  <div class="column_1">
    <p>Formページ</p>
    <child></child>
    <child2></child2>
    <child3></child3>
    <button v-on:click="buttonAction">{{button}}</button>
  </div>
</template>

<script>
import child from "./parts/child";//componentパス
import child2 from "./parts/child2";
import child3 from "./parts/child3";
export default {
  data(){
    return {
      button: "確認"
    }
  },
  components: {
    child,
    child2,
    child3
  },//componentのファイル名
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

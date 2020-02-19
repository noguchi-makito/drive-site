<template>
  <div class="column_1 kansou">
    <p>Formページ</p>
    <child></child>
    <child2></child2>
    <p>{{message}}</p>
    <EditForm></EditForm>
  </div>
</template>

<script>
import child from "./parts/child"; //componentパス
import child2 from "./parts/child2";
import EditForm from "./parts/EditForm";
export default {
  components: {
    child,
    child2,
    EditForm
  }, //componentのファイル名

  //データ受渡し記載
  computed: {
    //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
    message() {
      return this.$store.getters.message;
    },
    kansou() {
      return this.$store.getters.kansou;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

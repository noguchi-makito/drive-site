<template>
  <div class="column_1">
    <p>Formページ</p>
    <child></child>
    <child2></child2>
    <child3></child3>
    <button>{{button}}</button>
    <p>{{message}}</p>
    <EditForm></EditForm>
  </div>
</template>

<script>
import child from "./parts/child";//componentパス
import child2 from "./parts/child2";
import child3 from "./parts/child3";
import EditForm from "./parts/EditForm";
export default {
  data(){
    return {
      button: "確認"
    }
  },
  components: {
    child,
    child2,
    child3,
    EditForm
  },//componentのファイル名

  //データ受渡し記載
  computed: {
    //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
    message(){
     return this.$store.getters.message
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <child :message="messge"></child>
  </div>
</template>

<script>
import Child from './child.vue'//componentsの読み込み
export default {
  components: {
    Child
  },//読みこむvueファイル名
  data() {
    return {
      messge: 'Hello Vue'
    }
  }//変数を渡す
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p.text {
  color: #ccc;
}
</style>

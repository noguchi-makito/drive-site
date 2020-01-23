<template>
  <div>
    <!--valueをv-bindでcomputedのmessageと繋いでる-->
    <!--入力フォームの初期値にstore.jsのmessageを使っている-->
    <input type="text" :value="message" @input="doUpdate"/>

  </div>

</template>
<script>
export default {
  computed:{
    message(){
      return this.$store.getters.message
    }
  },
  methods:{
    doUpdate(event){
      //ディスパッチでstoreのアクションを呼んでいる
      //event.targetは押された要素を指すのでここではinputタグを指してる
      //そのvalueなので、event.target.valueは入力された文字
      //つまり、入力された文字を引数として渡してstoreのdoUpdateアクションを呼んでる
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>
